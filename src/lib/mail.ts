import nodemailer from "nodemailer";

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
  return (
    (typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers") ||
    typeof (globalThis as { EdgeRuntime?: string }).EdgeRuntime !== "undefined"
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
  if (await getSecret("RESEND_API_KEY")) return true;
  if ((await getSecret("SMTP_HOST")) && (await getSecret("SMTP_USER")) && (await getSecret("SMTP_PASS"))) {
    return true;
  }
  // Cloudflare Workers cannot use SMTP. FormSubmit still delivers to info@.
  return isWorkersRuntime();
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

function getTransporter(host: string, user: string, pass: string, portValue: string) {
  const port = Number(portValue || 465);

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

async function sendWithSmtp({ subject, html, replyTo, attachments }: SiteEmail, toEmail: string) {
  const host = await getSecret("SMTP_HOST");
  const user = await getSecret("SMTP_USER");
  const pass = await getSecret("SMTP_PASS");
  const port = await getSecret("SMTP_PORT");
  const fromAddress = user || toEmail;

  await getTransporter(host, user, pass, port).sendMail({
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

  const payload = await res.json().catch(() => ({}));
  if (!res.ok || payload.success === false || payload.success === "false") {
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
    await sendWithSmtp(email, toEmail);
    return;
  }

  await sendWithFormSubmit(email, toEmail);
}
