import { Link } from "react-router-dom";
import {
  ArrowRight,
  Trophy,
  Users,
  Calendar,
  Zap,
  ClipboardCheck,
  Monitor,
  Settings,
  Crown,
  Shield,
  Star,
  CheckCircle,
  Video,
} from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import eventBox from "@/assets/event-boxcricket.jpg";
import eventLeague from "@/assets/event-league.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const stats = [
  { icon: Users, value: "1,500+", label: "Participants" },
  { icon: Trophy, value: "31+", label: "Leagues" },
  { icon: Calendar, value: "750+", label: "Games" },
  { icon: Zap, value: "8+", label: "Sports" },
];

const pillars = [
  { icon: ClipboardCheck, title: "League Management", desc: "End-to-end execution of sports leagues." },
  { icon: Monitor, title: "Live Production", desc: "Broadcast-quality streaming & commentary." },
  { icon: Settings, title: "Operations", desc: "Flawless on-ground tournament operations." },
  { icon: Crown, title: "Premium Experience", desc: "Corporate & community events that stand out." },
];

const servicesSnapshot = [
  { icon: Users, label: "Umpiring" },
  { icon: Monitor, label: "Live Streaming" },
  { icon: ClipboardCheck, label: "Scoring (CricHeroes)" },
  { icon: Star, label: "Branding & Decor" },
  { icon: Settings, label: "Equipment & Kits" },
  { icon: Calendar, label: "Scheduling" },
];

const featuredEvents = [
  { image: null, hasImage: false, title: "FR. CRCE ALUMNI SPORTS LEAGUE", titleColor: "text-foreground", teams: "8 Teams", players: "64 Players", desc: "Alumni event bringing together former students for an exciting sports league." },
  {
    image: [
      "/Gitanjali Narnolia cricket leauge(2026)/Candids/388A0839.JPG",
      "/Gitanjali Narnolia cricket leauge(2026)/Candids/388A0850.JPG",
      "/Gitanjali Narnolia cricket leauge(2026)/Candids/388A0854 - Copy.JPG",
      "/Gitanjali Narnolia cricket leauge(2026)/Price distibution/388A1298.JPG",
      "/Gitanjali Narnolia cricket leauge(2026)/Price distibution/388A1296.JPG",
      "/Gitanjali Narnolia cricket leauge(2026)/Price distibution/388A1274.JPG"
    ],
    hasImage: true,
    title: "GPL - CORPORATE LEAGUE",
    titleColor: "text-foreground",
    teams: "Mixed Categories",
    players: "120 Players",
    desc: "Corporate event featuring professional cricket matches and a grand prize distribution."
  },
  { image: eventLeague, hasImage: true, title: "YUVA PREMIER LEAGUE (YPL)", titleColor: "text-primary", teams: "11 Seasons", players: "750+ Players", desc: "Multi-season league featuring 3 sports with franchise-style team ownership." },
];

const services = [
  { icon: Users, label: "Umpiring" },
  { icon: Monitor, label: "Live Streaming" },
  { icon: ClipboardCheck, label: "Scoring (CricHeroes)" },
  { icon: Star, label: "Branding & Decor" },
  { icon: Settings, label: "Equipment & Kits" },
  { icon: Calendar, label: "Scheduling" },
];

const differentiators = [
  { icon: Shield, title: "Professional Execution", desc: "Trained crew, standardized processes, and zero-compromise quality." },
  { icon: Star, title: "Premium Experience", desc: "From entry gates to trophy ceremonies — every moment is curated." },
  { icon: CheckCircle, title: "End-to-End Management", desc: "You focus on playing. We handle everything else." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Sports stadium event" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 md:whitespace-nowrap">
          The Force <span className="text-gradient">Behind The Game</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Your one stop solution for all your sports events
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quote" className="inline-flex items-center justify-center gap-2 bg-gradient-brand px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity">
            Plan Your Event <ArrowRight size={16} />
          </Link>
          <Link to="/services" className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-foreground hover:bg-secondary transition-colors">
            View Services
          </Link>
        </div>
      </div>
    </section>

    {/* Social Proof Stats */}
    <section className="bg-gradient-brand py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</div>
            <div className="text-primary-foreground/80 text-xs md:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Services Snapshot */}
    <section className="section-padding bg-[#151515]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 uppercase">
            SERVICES <span className="text-primary">SNAPSHOT</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for a seamless sports event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesSnapshot.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#1a1a1a] border border-border/30 rounded-xl p-5 hover:border-primary/50 transition-colors animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="text-primary shrink-0" size={24} />
              <span className="font-heading font-medium text-lg tracking-wide">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Premium Event Services */}
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="font-heading text-primary text-sm tracking-[0.2em] uppercase mb-3">Our Expertise</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 uppercase">
            Premium Event Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end solutions to ensure your tournament looks and feels like a professional broadcast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#151515] border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#2A1511] flex items-center justify-center mb-6">
              <Video className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold mb-4 uppercase tracking-wide">Live Streaming</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Multi-camera setups with professional commentary and real-time graphics broadcasted to YouTube or your platform of choice.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-heading text-xs tracking-widest uppercase hover:opacity-80 transition-opacity">
              Learn More <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-[#151515] border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#2A1511] flex items-center justify-center mb-6">
              <Trophy className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold mb-4 uppercase tracking-wide">Awards & Trophies</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Custom-designed premium medals, man of the match awards, and championship trophies that players actually want to keep.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-heading text-xs tracking-widest uppercase hover:opacity-80 transition-opacity">
              Learn More <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-[#151515] border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[#2A1511] flex items-center justify-center mb-6">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-xl font-bold mb-4 uppercase tracking-wide">Certified Umpires</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Professional, unbiased officiating from certified referees and scorers to maintain the integrity of every match.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-heading text-xs tracking-widest uppercase hover:opacity-80 transition-opacity">
              Learn More <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>


    {/* Featured Events */}
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 uppercase">Our Featured <span className="text-gradient">Events</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Highlights from our recent tournaments and leagues.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <div key={event.title} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors group flex flex-col">
              <div className="overflow-hidden aspect-[4/3] w-full relative bg-[#1c1311]">
                {event.hasImage && Array.isArray(event.image) ? (
                  <Carousel
                    className="w-full h-full group/carousel"
                    plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
                  >
                    <CarouselContent className="h-full ml-0">
                      {event.image.map((imgSrc, idx) => (
                        <CarouselItem key={idx} className="relative h-full pl-0">
                          <img src={imgSrc} alt={`${event.title} slide ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500" loading="lazy" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                ) : event.hasImage && event.image ? (
                  <img src={event.image as string} alt={event.title} className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${(event as any).containImage ? "object-contain bg-white p-2" : "object-cover"}`} loading="lazy" width={800} height={600} />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2A1511]/50 group-hover:scale-105 transition-transform duration-500">
                    <Trophy size={32} className="text-primary/40 mb-3" />
                    <span className="font-heading text-xl font-bold tracking-widest text-primary/70 uppercase">Upcoming</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`font-heading text-xl font-bold mb-4 ${event.titleColor}`}>{event.title}</h3>
                <div className="flex gap-3 mb-4">
                  <span className="text-xs bg-[#241a18] px-3 py-1.5 rounded text-primary">{event.teams}</span>
                  <span className="text-xs bg-[#241a18] px-3 py-1.5 rounded text-primary">{event.players}</span>
                </div>
                <p className="text-muted-foreground text-sm flex-1">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/events" className="inline-flex items-center gap-2 text-primary font-heading text-sm tracking-wider uppercase hover:opacity-80 transition-opacity">
            View All Events <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>



    {/* Why Force Sports United */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Why <span className="text-gradient">Force Sports United</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">What makes us the preferred choice for sports event execution.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((d) => (
            <div key={d.title} className="text-center p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <d.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{d.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



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

export default Index;
