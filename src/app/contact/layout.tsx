import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sports Management Company in Mumbai",
  description: "Get in touch with Force Sports United, Mumbai's trusted sports management company, for your next league, tournament, or corporate sports event.",
  keywords: [
    "contact sports management company Mumbai",
    "sports event management company contact",
  ],
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
