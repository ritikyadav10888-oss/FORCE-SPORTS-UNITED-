import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | Force Sports United",
  description: "Request a free quote for your next sports tournament or league.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
