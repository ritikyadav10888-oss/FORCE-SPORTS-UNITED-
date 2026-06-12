import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Force Sports United",
  description: "End-to-end sports league management, live production, and tournament operations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
