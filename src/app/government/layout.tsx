import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Sports Event Management Company in Mumbai",
  description: "Force Sports United delivers large-scale public and institutional sporting events for government bodies in Mumbai and across Maharashtra with reliable execution.",
  keywords: [
    "government sports event management company Mumbai",
    "public sports event organizer Mumbai",
    "institutional sports events Maharashtra",
  ],
  alternates: { canonical: "/government" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
