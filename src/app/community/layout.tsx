import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Sports Leagues in Mumbai | Force Sports United",
  description: "Force Sports United runs community sports leagues in Mumbai that bring neighborhoods, schools, and communities together through grassroots tournaments.",
  keywords: [
    "community sports management Mumbai",
    "grassroots sports league management",
    "school sports league Mumbai",
    "community cricket league Mumbai",
  ],
  alternates: { canonical: "/community" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
