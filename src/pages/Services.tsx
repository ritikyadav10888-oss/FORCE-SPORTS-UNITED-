import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  ClipboardCheck, Calendar, Users, Monitor, Mic, Video,
  Package, Shirt, CircleDot, Palette, DoorOpen, Megaphone, ArrowRight,
  Settings, Crown, Layers, Link as LinkIcon, Network, Handshake, Medal, Sparkles
} from "lucide-react";

const pillars = [
  { icon: ClipboardCheck, title: "Event Execution", desc: "End-to-end planning and flawless on-ground management" },
  { icon: Monitor, title: "Production", desc: "Live streaming, commentary, and professional coverage" },
  { icon: Settings, title: "Operations", desc: "Umpiring, scoring, scheduling, and match coordination" },
  { icon: Crown, title: "League Management", desc: "Complete league IPs from concept to multi-season execution" },
];

const serviceCategories = [
  {
    title: "Event Execution",
    desc: "Complete planning to on-ground delivery",
    items: [
      { icon: ClipboardCheck, label: "Event Planning & Strategy" },
      { icon: Calendar, label: "Scheduling & Coordination" },
      { icon: Users, label: "On-Ground Management" },
    ],
  },
  {
    title: "Tournament Operations",
    desc: "Professional match-day operations",
    items: [
      { icon: Users, label: "Certified Umpires" },
      { icon: ClipboardCheck, label: "Live Scoring (CricHeroes)" },
      { icon: Calendar, label: "Match Coordination" },
    ],
  },
  {
    title: "Production & Media",
    desc: "Broadcast-quality event coverage",
    items: [
      { icon: Monitor, label: "Live Streaming (YouTube)" },
      { icon: Mic, label: "Professional Commentary" },
      { icon: Video, label: "Highlights & Recaps" },
    ],
  },
  {
    title: "Equipment & Logistics",
    desc: "Everything your event needs on-ground",
    items: [
      { icon: CircleDot, label: "Balls & Equipment" },
      { icon: Shirt, label: "Team Jerseys & Kits" },
      { icon: Package, label: "Logistics Management" },
    ],
  },
  {
    title: "Branding & Experience",
    desc: "Premium look and feel for every event",
    items: [
      { icon: Palette, label: "Event Decor & Setup" },
      { icon: DoorOpen, label: "Entry & Stage Design" },
      { icon: Megaphone, label: "Sponsor Branding" },
    ],
  },
];

const features = [
  { icon: Layers, title: "EXECUTION AT SCALE", desc: "Delivering leagues with precision and consistency across multiple seasons." },
  { icon: LinkIcon, title: "SINGLE-POINT CONTROL", desc: "One team managing every moving part — no chasing multiple vendors." },
  { icon: Network, title: "STRUCTURED SYSTEMS", desc: "Defined formats, scheduling templates, and operational workflows." },
  { icon: Handshake, title: "VENDOR ECOSYSTEM", desc: "Reliable, tested partners across grounds, kits, trophies, and streaming." },
  { icon: Medal, title: "PROVEN EXPERIENCE", desc: "Built on real, repeatable execution across 31+ delivered seasons." },
  { icon: Sparkles, title: "PROFESSIONAL FEEL", desc: "Every league looks and operates like a professional sporting event." },
];

const Services = () => (
  <Layout>
    <section className="section-padding pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Modular, scalable services tailored to your event's needs. Pick what you need or let us handle everything.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors animate-fade-in-up group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-12 h-12 rounded border border-border flex items-center justify-center mb-6 bg-background group-hover:border-[#B8902E] transition-colors">
                <f.icon size={22} className="text-[#F2C94C]" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3 uppercase tracking-wide">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">What We <span className="text-gradient">Do</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Four pillars that power every Force Sports United event.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors group">
              <div className="w-12 h-12 rounded bg-background flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}

    {/* CTA Banner */}
    <section className="bg-gradient-brand section-padding text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Let's Build Your Next Tournament
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Whether it's a local box cricket match or a multi-city league — we make it happen.
        </p>
        <Link to="/quote" className="inline-flex items-center gap-2 bg-background px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-foreground hover:bg-background/90 transition-colors">
          Get a Free Quote <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
