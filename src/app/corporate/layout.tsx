import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Sports Management Company in Mumbai",
  description: "Corporate sports management in Mumbai — employee engagement leagues and brand-led sports tournaments that build company culture, run by Force Sports United.",
  keywords: [
    "corporate sports management company Mumbai",
    "corporate sports events Mumbai",
    "corporate cricket tournament Mumbai",
    "employee engagement sports events Mumbai",
  ],
  alternates: { canonical: "/corporate" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
