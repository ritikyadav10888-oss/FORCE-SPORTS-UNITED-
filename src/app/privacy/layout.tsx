import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Force Sports United",
  description: "Privacy policy and data handling guidelines for Force Sports United.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
