import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Management Blog & Insights | Force Sports United",
  description: "News, insights, and updates from Force Sports United, Mumbai's leading sports management company.",
  keywords: [
    "sports management blog India",
    "sports industry insights Mumbai",
    "sports event management news",
  ],
  alternates: { canonical: "/blog" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
