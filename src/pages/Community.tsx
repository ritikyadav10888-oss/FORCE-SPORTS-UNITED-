import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import eventLeague from "@/assets/event-league.jpg";
import { ArrowRight, Users, Trophy, GraduationCap, Building, CheckCircle, Home } from "lucide-react";

const benefits = [
  { icon: Users, title: "Community Bonding", desc: "Bring neighborhoods and societies together through sports." },
  { icon: GraduationCap, title: "Youth Development", desc: "Foster teamwork and discipline among school and academy students." },
  { icon: Building, title: "Society Engagement", desc: "Create memorable weekend events for residential complexes." },
  { icon: Trophy, title: "Healthy Competition", desc: "Encourage active lifestyles in a fun, competitive environment." },
];

const whatWeHandle = [
  "League concept & format design",
  "Venue sourcing & logistics",
  "Team registrations & scheduling",
  "Professional umpires & scorers",
  "Live streaming & commentary",
  "Branding, decor & stage setup",
  "Jerseys, kits & equipment",
  "Photography & highlight reels",
  "Award ceremonies & trophies",
  "Post-event content & reports",
];

const Community = () => (
  <Layout>
    {/* Hero */}
    <section className="relative section-padding overflow-hidden">
      <img src={eventLeague} alt="Community sports event" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-6 inline-flex items-center justify-center p-4 rounded-xl border border-[#B8902E] bg-background/50">
            <Users size={32} className="text-[#F2C94C]" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-2 uppercase">
            Community
          </h1>
          <p className="font-heading text-[#F2C94C] text-sm tracking-[0.2em] uppercase mb-6">
            Schools - Societies - Academies
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            Leagues that bring neighbourhoods, schools, and residential communities together around the game.
          </p>
          <Link to="/quote" className="inline-flex items-center gap-2 bg-gradient-brand px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity">
            Organize a Community League <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* What We Handle */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Everything, <span className="text-gradient">End-to-End</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">You focus on showing up. We handle the rest.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {whatWeHandle.map((item) => (
            <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-3">
              <CheckCircle size={16} className="text-primary shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-14">
          Why <span className="text-gradient">Community Sports?</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <b.icon size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-brand section-padding text-center">
      <div className="max-w-3xl mx-auto">
        <Home size={40} className="text-primary-foreground mx-auto mb-4" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Unite Your Community?
        </h2>
        <p className="text-primary-foreground/80 mb-8">Let's design a community sports experience everyone will love.</p>
        <Link to="/quote" className="inline-flex items-center gap-2 bg-background px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-foreground hover:bg-background/90 transition-colors">
          Get a Quote <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Community;
