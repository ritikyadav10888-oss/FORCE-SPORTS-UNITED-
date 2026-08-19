import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Events Portfolio | Mumbai's Premier Sports Management Company",
  description: "Explore leagues and tournaments delivered by Force Sports United — a top sports management company in Mumbai — across schools, corporates, and communities.",
  keywords: [
    "sports events Mumbai",
    "sports tournament organizer Mumbai",
    "cricket tournament organizer Mumbai",
    "box cricket league Mumbai",
    "sports league Mumbai",
  ],
  alternates: { canonical: "/events" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
