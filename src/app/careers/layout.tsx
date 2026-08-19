import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Jobs at a Sports Management Company in Mumbai",
  description: "Join the team behind the game — explore careers and job openings at Force Sports United, a leading sports management company in Mumbai.",
  keywords: [
    "sports management company jobs Mumbai",
    "sports event management careers Mumbai",
    "jobs at sports management company",
  ],
  alternates: { canonical: "/careers" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
