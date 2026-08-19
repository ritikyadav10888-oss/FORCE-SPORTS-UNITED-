import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Management Services in Mumbai",
  description: "End-to-end sports management services in Mumbai — league management, tournament operations, live production, and full-scale sports event execution.",
  keywords: [
    "sports management services Mumbai",
    "sports management company services",
    "sports league management company",
    "tournament management company Mumbai",
    "sports event operations Mumbai",
    "sports production company Mumbai",
  ],
  alternates: { canonical: "/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
