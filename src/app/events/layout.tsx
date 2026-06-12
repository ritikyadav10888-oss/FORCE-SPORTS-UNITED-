import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Portfolio | Force Sports United",
  description: "Explore our flagship roster of sports leagues delivered across schools, corporate, and communities.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
