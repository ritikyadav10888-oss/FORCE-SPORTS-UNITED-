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
  fields?: Record<string, string>;
};

async function getSecret(name: string) {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const { env } = await getCloudflareContext({ async: true });
    const value = (env as Record<string, unknown>)[name];
    if (typeof value === "string" && value.trim()) return value.trim();
  } catch {
    // Local Next.js has no Worker bindings.
  }

  return process.env[name] || "";
}

async function getToEmail() {
  return (await getSecret("SMTP_TO")) || DEFAULT_TO;
}

async function getSmtpConfig() {
  const host = await getSecret("SMTP_HOST");
  const user = await getSecret("SMTP_USER");
  const pass = await getSecret("SMTP_PASS");
  const port = Number((await getSecret("SMTP_PORT")) || 465);
  return { host, user, pass, port };
}

export async function isMailConfigured() {
  const { host, user, pass } = await getSmtpConfig();
  return Boolean(host && user && pass);
}

function htmlToText(html: string) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function toWorkerAttachments(attachments?: MailAttachment[]) {
  return attachments?.map((file) => ({
    filename: file.filename,
    mimeType: file.contentType,
    content: Buffer.from(file.content).toString("base64"),
  }));
}

async function sendWithWorkerSmtp({ subject, html, replyTo, attachments }: SiteEmail, toEmail: string) {
  const { WorkerMailer } = await import("worker-mailer");
  const { host, user, pass, port } = await getSmtpConfig();
  const fromAddress = user || toEmail;
  const message = {
    from: { name: "Force Sports United Website", email: fromAddress },
    to: toEmail,
    reply: replyTo,
    subject,
    text: htmlToText(html),
    html,
    attachments: toWorkerAttachments(attachments),
  };

  const attempts = [
    { host, port, secure: port === 465, startTls: port !== 465 },
    { host, port: 587, secure: false, startTls: true },
  ];

  let lastError: unknown;
  for (const attempt of attempts) {
    try {
      await WorkerMailer.send(
        {
          host: attempt.host,
          port: attempt.port,
          secure: attempt.secure,
          startTls: attempt.startTls,
          credentials: { username: user, password: pass },
          authType: ["login", "plain"] as Array<"login" | "plain">,
        },
        message,
      );
      return;
    } catch (error) {
      lastError = error;
      console.error(`Hostinger SMTP failed on port ${attempt.port}:`, error);
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Hostinger SMTP send failed");
}

export async function sendSiteEmail(email: SiteEmail) {
  if (!(await isMailConfigured())) {
    throw new Error("Hostinger SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
  }

  const toEmail = await getToEmail();

  if (process.env.NODE_ENV !== "production") {
    const { sendWithNodemailer } = await import("./mail-node");
    await sendWithNodemailer(email, toEmail, await getSmtpConfig());
    return;
  }

  await sendWithWorkerSmtp(email, toEmail);
}
