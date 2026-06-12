import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Force Sports United",
  description: "Read the latest news, insights, and updates from Force Sports United.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
