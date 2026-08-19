import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Media & Live Streaming Production in Mumbai",
  description: "Broadcast-quality live streaming and media production for sports events in Mumbai, delivered by Force Sports United's in-house production team.",
  keywords: [
    "sports live streaming Mumbai",
    "sports media production company Mumbai",
    "sports event broadcasting Mumbai",
    "cricket live streaming company Mumbai",
  ],
  alternates: { canonical: "/media" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
