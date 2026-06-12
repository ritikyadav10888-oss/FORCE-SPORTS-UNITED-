import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Production | Force Sports United",
  description: "Broadcast-quality live streaming and media production for sports events.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
