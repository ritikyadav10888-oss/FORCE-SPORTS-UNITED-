import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Force Sports United",
  description: "Terms of service and user agreements for Force Sports United.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
