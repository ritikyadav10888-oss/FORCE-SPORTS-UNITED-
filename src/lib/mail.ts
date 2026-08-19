import { existsSync } from "fs";
import { join } from "path";
import sharp from "sharp";
import nodemailer from "nodemailer";
import { LOGO_CID } from "@/lib/email-template";

const TO_EMAIL = process.env.SMTP_TO || "info@forcesportsunited.com";
const LOGO_SIZE = 192;

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

async function getLogoAttachment(): Promise<MailAttachment | null> {
  const logoPath = join(process.cwd(), "public", "logo.png");
  if (!existsSync(logoPath)) return null;

  const radius = LOGO_SIZE / 2;
  const circle = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${LOGO_SIZE}" height="${LOGO_SIZE}"><circle cx="${radius}" cy="${radius}" r="${radius}" fill="#fff"/></svg>`
  );

  const content = await sharp(logoPath)
    .resize(LOGO_SIZE, LOGO_SIZE)
    .composite([{ input: circle, blend: "dest-in" }])
    .png()
    .toBuffer();

  return {
    filename: "logo.png",
    content,
    cid: LOGO_CID,
    contentType: "image/png",
    contentDisposition: "inline",
  };
}

export async function sendSiteEmail({ subject, html, replyTo, attachments }: SiteEmail) {
  const fromAddress = process.env.SMTP_USER || TO_EMAIL;
  const logo = await getLogoAttachment();

  await getTransporter().sendMail({
    from: `"Force Sports United Website" <${fromAddress}>`,
    to: TO_EMAIL,
    replyTo,
    subject,
    html,
    attachments: logo ? [logo, ...(attachments || [])] : attachments,
  });
}
