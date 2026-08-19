import { NextResponse } from "next/server";
import { isMailConfigured, sendSiteEmail } from "@/lib/mail";
import { brandedEnquiryEmail } from "@/lib/email-template";

export async function POST(req: Request) {
  if (!(await isMailConfigured())) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const body = await req.json();
  const { name, company, email, phone, eventType, budget, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    await sendSiteEmail({
      replyTo: email,
      subject: `New contact enquiry from ${name}`,
      html: brandedEnquiryEmail({
        badge: "Website contact",
        title: "New contact enquiry",
        intro: `${name} submitted the contact form on forcesportsunited.com.`,
        fields: [
          { label: "Name", value: name },
          { label: "Company", value: company },
          { label: "Email", value: email, href: `mailto:${email}` },
          { label: "Phone", value: phone, href: phone ? `tel:${String(phone).replace(/\s+/g, "")}` : undefined },
          { label: "Event type", value: eventType },
          { label: "Budget", value: budget },
        ],
        messageTitle: "Message",
        message,
        replyEmail: email,
        replyPhone: phone,
      }),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
