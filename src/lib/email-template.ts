const SITE_URL = "https://forcesportsunited.com";
export const LOGO_CID = "fsu-logo";
const LOGO_SRC = `${SITE_URL}/logo.png`;
const WHATSAPP_URL = "https://wa.me/917208829940";

export function escapeHtml(value: unknown) {
  return String(value ?? "-")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function nl2br(value: unknown) {
  return escapeHtml(value).replace(/\n/g, "<br/>");
}

export type EmailField = {
  label: string;
  value?: string | null;
  href?: string;
};

function fieldRow(field: EmailField, index: number) {
  const raw = (field.value && String(field.value).trim()) || "-";
  const display = escapeHtml(raw);
  const valueHtml = field.href && raw !== "-"
    ? `<a href="${escapeHtml(field.href)}" style="color:#F15A24;text-decoration:none;font-weight:600;">${display}</a>`
    : display;
  const bg = index % 2 === 0 ? "#161616" : "#1d1d1d";

  return `
    <tr>
      <td style="padding:12px 18px;background:${bg};border-bottom:1px solid #2a2a2a;width:34%;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#F2C94C;font-family:Arial,Helvetica,sans-serif;">
        ${escapeHtml(field.label)}
      </td>
      <td style="padding:12px 18px;background:${bg};border-bottom:1px solid #2a2a2a;font-size:15px;color:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
        ${valueHtml}
      </td>
    </tr>
  `;
}

export function brandedEnquiryEmail({
  badge,
  title,
  intro,
  fields,
  messageTitle,
  message,
  replyEmail,
  replyPhone,
}: {
  badge: string;
  title: string;
  intro: string;
  fields: EmailField[];
  messageTitle?: string;
  message?: string | null;
  replyEmail?: string;
  replyPhone?: string;
}) {
  const replyHref = replyEmail ? `mailto:${replyEmail}` : undefined;
  const callHref = replyPhone ? `tel:${replyPhone.replace(/\s+/g, "")}` : undefined;

  return `
  <div style="margin:0;padding:0;background:#0b0b0b;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#0b0b0b;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;background:#141414;border:1px solid #2a2a2a;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="height:6px;background:#F15A24;"></td>
            </tr>
            <tr>
              <td style="padding:28px 28px 18px;background:#111111;text-align:center;">
                <img src="${LOGO_SRC}" alt="Force Sports United" width="96" height="96" style="display:block;margin:0 auto 14px;border:0;outline:none;border-radius:50%;" />
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:800;letter-spacing:0.12em;color:#F2C94C;">FORCE SPORTS UNITED</div>
                <div style="margin-top:6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#F15A24;">${escapeHtml(badge)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 0;">
                <h1 style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:1.25;color:#ffffff;">${escapeHtml(title)}</h1>
                <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#b3b3b3;">${escapeHtml(intro)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 20px 8px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #2a2a2a;border-radius:8px;overflow:hidden;">
                  ${fields.map(fieldRow).join("")}
                </table>
              </td>
            </tr>
            ${message && String(message).trim() && String(message).trim() !== "-" ? `
            <tr>
              <td style="padding:12px 20px 8px;">
                <div style="background:#1b140f;border:1px solid #3a2a1c;border-radius:8px;padding:18px 20px;">
                  <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#F2C94C;margin-bottom:8px;">${escapeHtml(messageTitle || "Message")}</div>
                  <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#f2f2f2;">${nl2br(message)}</div>
                </div>
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding:18px 20px 28px;text-align:center;">
                ${replyHref ? `<a href="${escapeHtml(replyHref)}" style="display:inline-block;margin:4px;background:#F15A24;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;font-weight:700;padding:12px 18px;border-radius:6px;">Reply to sender</a>` : ""}
                ${callHref ? `<a href="${escapeHtml(callHref)}" style="display:inline-block;margin:4px;background:#222;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;font-weight:700;padding:12px 18px;border-radius:6px;border:1px solid #3a3a3a;">Call</a>` : ""}
                <a href="${WHATSAPP_URL}" style="display:inline-block;margin:4px;background:#1f6b3a;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;font-weight:700;padding:12px 18px;border-radius:6px;">WhatsApp</a>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px 22px;background:#0f0f0f;border-top:1px solid #2a2a2a;text-align:center;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#888888;">
                  Sent from <a href="${SITE_URL}" style="color:#F2C94C;text-decoration:none;">forcesportsunited.com</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
}
