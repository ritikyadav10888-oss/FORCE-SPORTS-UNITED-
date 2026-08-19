const DEFAULT_TO = "info@forcesportsunited.com";

type MailAttachment = {
  filename: string;
  content: Buffer;
  cid?: string;
  contentType?: string;
  contentDisposition?: "inline" | "attachment";
};

type SiteEmail = {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: MailAttachment[];
};

function isWorkersRuntime() {
  const g = globalThis as {
    EdgeRuntime?: string;
    WorkerGlobalScope?: unknown;
    caches?: unknown;
  };
  return (
    (typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers") ||
    typeof g.EdgeRuntime !== "undefined" ||
    typeof g.WorkerGlobalScope !== "undefined"
  );
}

async function getSecret(name: string) {
  const fromProcess = process.env[name];
  if (fromProcess) return fromProcess;

  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const { env } = await getCloudflareContext({ async: true });
    const value = (env as Record<string, unknown>)[name];
    if (typeof value === "string" && value.trim()) return value.trim();
  } catch {
    // Local Next.js has no Worker bindings.
  }

  return "";
}

async function getToEmail() {
  return (await getSecret("SMTP_TO")) || DEFAULT_TO;
}

export async function isMailConfigured() {
  return true;
}

async function sendWithResend({ subject, html, replyTo, attachments }: SiteEmail, apiKey: string, toEmail: string) {
  const fromAddress =
    (await getSecret("RESEND_FROM")) || "Force Sports United <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [toEmail],
      reply_to: replyTo || undefined,
      subject,
      html,
      attachments: attachments?.map((file) => ({
        filename: file.filename,
        content: Buffer.from(file.content).toString("base64"),
      })),
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend failed (${res.status}): ${detail}`);
  }
}

async function sendWithSmtp({ subject, html, replyTo, attachments }: SiteEmail, toEmail: string) {
  const nodemailer = (await import("nodemailer")).default;
  const host = await getSecret("SMTP_HOST");
  const user = await getSecret("SMTP_USER");
  const pass = await getSecret("SMTP_PASS");
  const port = Number((await getSecret("SMTP_PORT")) || 465);
  const fromAddress = user || toEmail;

  await nodemailer
    .createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })
    .sendMail({
      from: `"Force Sports United Website" <${fromAddress}>`,
      to: toEmail,
      replyTo,
      subject,
      html,
      attachments,
    });
}

async function sendWithFormSubmit({ subject, html, replyTo, attachments }: SiteEmail, toEmail: string) {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`;
  const form = new FormData();
  form.set("_subject", subject);
  form.set("_captcha", "false");
  form.set("_template", "box");
  form.set("message", html);
  if (replyTo) {
    form.set("_replyto", replyTo);
    form.set("email", replyTo);
  }

  for (const file of attachments || []) {
    form.append(
      "attachment",
      new Blob([new Uint8Array(file.content)], { type: file.contentType || "application/octet-stream" }),
      file.filename,
    );
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: form,
  });

  const raw = await res.text();
  let payload: { success?: boolean | string; message?: string } = {};
  try {
    payload = JSON.parse(raw);
  } catch {
    payload = {};
  }

  const message = String(payload.message || raw || "");
  const needsActivation = /activat|confirm|check your email/i.test(message);
  const failed =
    payload.success === false ||
    payload.success === "false";

  // First FormSubmit send asks info@ to confirm. That is expected, not a 500.
  if (res.ok || needsActivation) {
    return;
  }

  if (!res.ok || failed) {
    throw new Error(payload.message || `FormSubmit failed (${res.status})`);
  }
}

export async function sendSiteEmail(email: SiteEmail) {
  const toEmail = await getToEmail();
  const resendKey = await getSecret("RESEND_API_KEY");

  if (resendKey) {
    await sendWithResend(email, resendKey, toEmail);
    return;
  }

  const smtpReady =
    Boolean(await getSecret("SMTP_HOST")) &&
    Boolean(await getSecret("SMTP_USER")) &&
    Boolean(await getSecret("SMTP_PASS"));

  if (smtpReady && !isWorkersRuntime()) {
    try {
      await sendWithSmtp(email, toEmail);
      return;
    } catch (error) {
      console.error("SMTP send failed, falling back to FormSubmit:", error);
    }
  }

  await sendWithFormSubmit(email, toEmail);
}
