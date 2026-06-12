import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Force Sports United",
  description: "Learn about Force Sports United, a premium sports event execution company delivering flawless sports leagues.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
