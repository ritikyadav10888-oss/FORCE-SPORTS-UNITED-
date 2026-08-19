import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Force Sports United | Leading Sports Management Company in Mumbai",
  description: "Force Sports United is a leading sports management company in Mumbai. Learn about our story, mission, and the team behind flawless sports leagues and events.",
  keywords: [
    "about Force Sports United",
    "leading sports management company in Mumbai",
    "best sports management company in Mumbai",
    "sports management company Mumbai team",
  ],
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
