import type { Metadata } from "next";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import SplashScreen from "@/components/SplashScreen";
import { Providers } from "@/components/Providers";
import "./globals.css";

const SITE_URL = "https://forcesportsunited.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Force Sports United",
    default: "Force Sports United | Sports Management Company in Mumbai",
  },
  description: "Force Sports United is a leading sports management company in Mumbai, delivering premium sports leagues, tournaments, corporate sports events, and end-to-end sports event execution across Maharashtra.",
  keywords: [
    // Core service
    "sports management company",
    "sports event management company",
    "sports event management services",
    "sports management services",
    "sports event organizer",
    "sports event planning company",
    "sports league management company",
    "sports team management company",
    "Sports Management",
    "Event Execution",
    "Corporate Leagues",
    "Sports Tournaments",
    "Live Sports Streaming",
    // Mumbai / local intent
    "sports management company in Mumbai",
    "sports management company Mumbai",
    "best sports management company in Mumbai",
    "top sports management company in Mumbai",
    "management company in Mumbai",
    "sports management services Mumbai",
    "sports management agency Mumbai",
    "sports event management company Mumbai",
    "sports event management company in Mumbai",
    "sports event organizer Mumbai",
    "sports event organiser in Mumbai",
    "Mumbai sports event planning",
    "sports event management Maharashtra",
    "sports management company Maharashtra",
    "event management companies near me",
    "event management company in Mumbai",
    "best sports event organizer in Maharashtra",
    "best sports management company in Maharashtra",
    "corporate sports management company Mumbai",
    "cricket tournament organizer Mumbai",
    "box cricket league organizer Mumbai",
    "sports event management for corporate companies",
    "event management for youth sports leagues",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Force Sports United | Sports Management Company in Mumbai",
    description: "Premium sports management and event execution company in Mumbai — leagues, tournaments, corporate sports events, and live streaming.",
    type: "website",
    url: SITE_URL,
    siteName: "Force Sports United",
    locale: "en_IN",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Force Sports United | Sports Management Company in Mumbai",
    description: "Premium sports management and event execution company in Mumbai — leagues, tournaments, corporate sports events, and live streaming.",
    images: ["/logo.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: "Force Sports United",
  alternateName: "FORCE Sports United",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description: "Force Sports United is a leading sports management company in Mumbai delivering premium sports leagues, tournaments, corporate sports events, and end-to-end sports event execution.",
  email: "info@forcesportsunited.com",
  telephone: "+91-72088-29940",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "State", name: "Maharashtra" },
    { "@type": "Country", name: "India" },
  ],
  sameAs: [
    "https://www.instagram.com/forcesportsunited",
    "https://www.linkedin.com/company/force-sports-united/",
    "https://x.com/ForceSportsUtd",
    "https://www.youtube.com/@ForceSportsUnited",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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
