import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | Sports Management Company in Mumbai",
  description: "Request a free quote from Force Sports United, a leading sports management company in Mumbai, for your next tournament, league, or corporate sports event.",
  keywords: [
    "sports management company quote Mumbai",
    "sports event quote Mumbai",
    "tournament management quote",
  ],
  alternates: { canonical: "/quote" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
