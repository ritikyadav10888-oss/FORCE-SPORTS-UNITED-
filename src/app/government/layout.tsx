import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Events | Force Sports United",
  description: "Large-scale public and institutional sporting events delivered with reliable execution.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
