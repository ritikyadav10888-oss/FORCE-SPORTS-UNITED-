import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Sports | Force Sports United",
  description: "Sports leagues that bring neighborhoods, schools, and communities together.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
