import { NextResponse } from "next/server";
import { isMailConfigured, sendSiteEmail } from "@/lib/mail";
import { brandedEnquiryEmail } from "@/lib/email-template";

export async function POST(req: Request) {
  if (!(await isMailConfigured())) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const body = await req.json();
  const { name, email, phone, company, eventType, teams, location, dateStart, dateEnd, addOns, details } = body;

  if (!name || !email || !phone || !eventType || !location) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const dates = [dateStart, dateEnd].filter(Boolean).join(" to ") || "-";
  const addOnList = Array.isArray(addOns) && addOns.length ? addOns.join(", ") : "-";

  try {
    await sendSiteEmail({
      replyTo: email,
      subject: `New quote request from ${name}`,
      fields: {
        Name: name,
        Company: company || "-",
        Email: email,
        Phone: phone,
        "Event type": eventType,
        Teams: teams || "-",
        Location: location,
        Dates: dates,
        "Add-ons": addOnList,
        Message: details || "-",
      },
      html: brandedEnquiryEmail({
        badge: "Quote request",
        title: "New quote request",
        intro: `${name} asked for a quote through forcesportsunited.com.`,
        fields: [
          { label: "Name", value: name },
          { label: "Company", value: company },
          { label: "Email", value: email, href: `mailto:${email}` },
          { label: "Phone", value: phone, href: `tel:${String(phone).replace(/\s+/g, "")}` },
          { label: "Event type", value: eventType },
          { label: "Teams", value: teams },
          { label: "Location", value: location },
          { label: "Dates", value: dates },
          { label: "Add-ons", value: addOnList },
        ],
        messageTitle: "Additional details",
        message: details,
        replyEmail: email,
        replyPhone: phone,
      }),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote form email error:", error);
    return NextResponse.json({ error: "Failed to send request." }, { status: 500 });
  }
}
