import nodemailer from "nodemailer";

const TO_EMAIL = process.env.SMTP_TO || "info@forcesportsunited.com";

export function isMailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function getTransporter() {
  const port = Number(process.env.SMTP_PORT || 465);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

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

export async function sendSiteEmail({ subject, html, replyTo, attachments }: SiteEmail) {
  const fromAddress = process.env.SMTP_USER || TO_EMAIL;

  await getTransporter().sendMail({
    from: `"Force Sports United Website" <${fromAddress}>`,
    to: TO_EMAIL,
    replyTo,
    subject,
    html,
    attachments,
  });
}
