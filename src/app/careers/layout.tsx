import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Force Sports United",
  description: "Join the team behind the game at Force Sports United.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
