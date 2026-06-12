import type { Metadata } from "next";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import SplashScreen from "@/components/SplashScreen";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Force Sports United",
    default: "Force Sports United | Premium Sports League Execution",
  },
  description: "Force Sports United is a premier sports event execution company delivering flawless leagues, community tournaments, and corporate sports events.",
  keywords: [
    "sports event management company",
    "sports event management services",
    "event management company sports",
    "sports event organizer",
    "sports event planning company",
    "Sports Management", 
    "Event Execution", 
    "Corporate Leagues", 
    "Sports Tournaments", 
    "Live Sports Streaming",
    "sports event management company Mumbai",
    "sports event organizer Mumbai",
    "Mumbai sports event planning",
    "sports event management Maharashtra",
    "event management companies near me",
    "sports event management company in Mumbai",
    "best sports event organizer in Maharashtra",
    "sports event management for corporate companies",
    "event management for youth sports leagues"
  ],
  openGraph: {
    title: "Force Sports United",
    description: "Premium sports event execution and league management.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <Providers>
          <SplashScreen />
          {children}
          <Toaster />
          <Sonner />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
