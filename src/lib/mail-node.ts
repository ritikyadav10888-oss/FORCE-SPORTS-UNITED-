type MailAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

type SiteEmail = {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: MailAttachment[];
};

export async function sendWithNodemailer(
  { subject, html, replyTo, attachments }: SiteEmail,
  toEmail: string,
  config: { host: string; user: string; pass: string; port: number },
) {
  const nodemailer = (await import("nodemailer")).default;

  await nodemailer
    .createTransport({
      host: config.host,
      port: config.port,
      secure: config.port === 465,
      auth: { user: config.user, pass: config.pass },
    })
    .sendMail({
      from: `"Force Sports United Website" <${config.user || toEmail}>`,
      to: toEmail,
      replyTo,
      subject,
      html,
      attachments,
    });
}
