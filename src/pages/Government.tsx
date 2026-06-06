import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import eventLeague from "@/assets/event-league.jpg";
import { ArrowRight, Landmark, Shield, Globe, Building2, CheckCircle, Trophy } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Compliance & Structure", desc: "Adherence to public sector guidelines and protocols." },
  { icon: Globe, title: "Civic Engagement", desc: "Foster unity and health through large-scale public events." },
  { icon: Building2, title: "Institutional Reliability", desc: "Flawless execution for government bodies and institutions." },
  { icon: Trophy, title: "Public Excellence", desc: "Showcase civic pride with professionally managed tournaments." },
];

const whatWeHandle = [
  "Public event planning & compliance",
  "Large-scale venue sourcing & security",
  "Institutional team registrations",
  "Professional officiating & scoring",
  "Live broadcasting & media handling",
  "Official branding & stage setup",
  "Equipment & public infrastructure",
  "Photography & official documentation",
  "Civic award ceremonies & protocols",
  "Post-event reporting & analytics",
];

const Government = () => (
  <Layout>
    {/* Hero */}
    <section className="relative section-padding overflow-hidden">
      <img src={eventLeague} alt="Government sports event" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">For Government</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-2 uppercase">
            Government
          </h1>
          <p className="font-heading text-primary text-sm tracking-[0.2em] uppercase mb-6">
            Civic - Public - Institutional
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            Large-scale public and institutional sporting events delivered with compliance, structure, and reliable execution.
          </p>
          <Link to="/quote" className="inline-flex items-center gap-2 bg-gradient-brand px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity">
            Plan a Public Event <ArrowRight size={16} />
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
          <p className="text-muted-foreground max-w-xl mx-auto">You focus on the public. We handle the execution.</p>
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
          Why <span className="text-gradient">Institutional Sports?</span>
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

  </Layout>
);

export default Government;
