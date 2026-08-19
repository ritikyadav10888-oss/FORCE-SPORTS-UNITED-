import { NextResponse } from "next/server";
import { isMailConfigured, sendSiteEmail } from "@/lib/mail";
import { brandedEnquiryEmail } from "@/lib/email-template";

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(req: Request) {
  if (!(await isMailConfigured())) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const formData = await req.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const role = formData.get("role") as string;
  const location = formData.get("location") as string;
  const experience = formData.get("experience") as string;
  const linkedin = formData.get("linkedin") as string;
  const portfolio = formData.get("portfolio") as string;
  const message = formData.get("message") as string;
  const resume = formData.get("resume") as File | null;

  if (!name || !email || !role) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (resume && resume.size > MAX_RESUME_SIZE) {
    return NextResponse.json({ error: "Resume must be under 5MB." }, { status: 400 });
  }

  try {
    const attachments = resume && resume.size > 0
      ? [{ filename: resume.name, content: Buffer.from(await resume.arrayBuffer()) }]
      : undefined;

    await sendSiteEmail({
      replyTo: email,
      subject: `New job application: ${role} — ${name}`,
      fields: {
        Name: name,
        Email: email,
        Phone: phone || "-",
        Role: role,
        Location: location || "-",
        Experience: experience || "-",
        LinkedIn: linkedin || "-",
        Portfolio: portfolio || "-",
        Resume: attachments ? attachments[0].filename : "Not attached",
        Message: message || "-",
      },
      html: brandedEnquiryEmail({
        badge: "Careers",
        title: "New job application",
        intro: `${name} applied for ${role} through forcesportsunited.com.${attachments ? " A resume is attached." : ""}`,
        fields: [
          { label: "Name", value: name },
          { label: "Email", value: email, href: `mailto:${email}` },
          { label: "Phone", value: phone, href: phone ? `tel:${String(phone).replace(/\s+/g, "")}` : undefined },
          { label: "Role", value: role },
          { label: "Location", value: location },
          { label: "Experience", value: experience },
          { label: "LinkedIn", value: linkedin, href: linkedin || undefined },
          { label: "Portfolio", value: portfolio, href: portfolio || undefined },
          { label: "Resume", value: attachments ? attachments[0].filename : "Not attached" },
        ],
        messageTitle: "Cover letter",
        message,
        replyEmail: email,
        replyPhone: phone,
      }),
      attachments,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Careers form email error:", error);
    return NextResponse.json({ error: "Failed to submit application." }, { status: 500 });
  }
}
