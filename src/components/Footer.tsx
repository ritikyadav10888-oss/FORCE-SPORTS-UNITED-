"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const footerSections = [
  {
    title: "COMPANY",
    links: [
      { to: "/about", label: "About Force Sports United" },
      { to: "/services", label: "Services" },
      { to: "/events", label: "Events" },
      { to: "/careers", label: "Careers" },
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      { to: "/corporate", label: "Corporate Solutions" },
      { to: "/community", label: "Community Sports" },
      { to: "/government", label: "Government Events" },
      { to: "/media", label: "Media & Production" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { to: "/blog", label: "Blog & Insights" },
      { to: "/quote", label: "Get a Quote" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
];

const Footer = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
  <footer className="bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4" style={{ perspective: "1000px" }}>
            <img src="/logo.png" alt="Force Sports United Logo" className="h-6 w-6 rounded-full object-cover shadow-sm animate-coin border-2 border-[#F2C94C]" />
            <h3 className="font-heading text-xl font-bold">
              <span className="bg-gradient-to-b from-[#F2C94C] via-[#F2D675] to-[#B8902E] bg-clip-text text-transparent">FORCE</span> SPORTS UNITED
            </h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
            Premium sports event execution company. Where sports meet precision execution.<br/>
            <span className="text-primary font-heading tracking-widest mt-2 block uppercase text-xs font-bold">Estb 2026</span>
          </p>

          <div className="flex gap-4 mt-8 text-muted-foreground">
            <a href="https://www.instagram.com/forcesportsunited?igsh=MXdwZ2l3eTN2dmJoZg==" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] p-2.5 rounded-md hover:bg-primary/20 hover:text-primary transition-all duration-300" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://www.linkedin.com/company/force-sports-united/" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] p-2.5 rounded-md hover:bg-primary/20 hover:text-primary transition-all duration-300" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://x.com/ForceSportsUtd?s=20" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] p-2.5 rounded-md hover:bg-primary/20 hover:text-primary transition-all duration-300" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" className="bg-[#1a1a1a] p-2.5 rounded-md hover:bg-primary/20 hover:text-primary transition-all duration-300" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="font-heading text-sm font-bold mb-4 tracking-wider">{section.title}</h4>
            <div className="space-y-2">
              {section.links.map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  className={`block text-sm transition-colors ${
                    isActive(link.to) ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Force Sports United. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
