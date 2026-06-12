import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Force Sports United",
  description: "Get in touch with Force Sports United for your next sporting event.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
