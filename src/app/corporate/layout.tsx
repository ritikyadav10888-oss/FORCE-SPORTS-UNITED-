import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Solutions | Force Sports United",
  description: "Employee engagement and brand-led sports tournaments that build corporate culture.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
