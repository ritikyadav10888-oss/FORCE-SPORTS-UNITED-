import Layout from "@/components/Layout";
import aboutTeam from "@/assets/about-team.jpg";
import { Target, Heart, Shield, ArrowRight, Eye, Crosshair } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", desc: "Every detail matters. From logistics to lighting, we obsess over getting it right." },
  { icon: Heart, title: "Passion", desc: "We live and breathe sports. That energy fuels everything we create." },
  { icon: Shield, title: "Reliability", desc: "When it's game day, you can count on Force Sports United to deliver flawlessly." },
];

const approach = [
  { step: "01", title: "Planning", desc: "Deep-dive into your vision, format, and requirements. We craft a tailored blueprint." },
  { step: "02", title: "Execution", desc: "On-ground deployment with trained crew, professional equipment, and zero compromises." },
  { step: "03", title: "Experience", desc: "Creating memorable moments for players, audience, and sponsors alike." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Force Sports United</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Force Sports United was born from a simple observation — sports events in India deserve better execution. Too many tournaments suffer from poor planning, amateur production, and inconsistent experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We set out to change that. Force Sports United is a premium sports event execution company that brings professional-grade management to every event — from local box cricket tournaments to multi-season leagues.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With a team of passionate sports professionals and event experts, we've delivered 200+ events, served 50,000+ players, and established ourselves as the go-to partner for anyone who takes sports seriously.
          </p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <img src={aboutTeam} alt="Force Sports United team coordinating backstage" className="rounded-lg w-full object-cover aspect-[3/2]" loading="lazy" width={1200} height={800} />
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-card border border-border rounded-lg p-8 md:p-10">
          <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-5">
            <Eye size={24} className="text-primary" />
          </div>
          <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To elevate sports event execution in India to world-class standards — making every tournament, league, and sporting experience feel professional, premium, and unforgettable.
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-8 md:p-10">
          <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-5">
            <Crosshair size={24} className="text-primary" />
          </div>
          <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To deliver seamless, end-to-end sports event management with precision execution, cutting-edge production, and an unwavering commitment to quality — for every event, every time.
          </p>
        </div>
      </div>
    </section>

    {/* Our Approach */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Approach</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A proven three-step framework that ensures flawless delivery.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {approach.map((a, i) => (
            <div key={a.step} className="relative bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
              <span className="font-heading text-5xl font-bold text-primary/20 absolute top-4 right-6">{a.step}</span>
              <h3 className="font-heading text-xl font-bold mb-3 mt-6">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              {i < 2 && <ArrowRight size={20} className="text-primary hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10" />}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Values</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Group of Companies */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          The Force <span className="text-gradient">Group of Companies</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-14">
          A diverse portfolio of brands dedicated to excellence in sports and beyond.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "FORCE SPORTS AND WEARS INDIA", logo: "/force group of company/force sport and wears india.png", desc: "CUSTOM SPORTSWEAR MANUFACTURING", url: "https://forcesportsindia.com" },
            { name: "FORCE PLAYING FIELD INDIA PRIVATE LIMITED", logo: "/force group of company/force playing field logo .png", desc: "SPORTS INFRASTRUCTURE" },
            { name: "FORCE 1 LIVE", logo: "/force group of company/force1live .png", desc: "SPORTS MEDIA & BROADCASTING" },
            { name: "FORCE SPORTS INFRA", logo: "/force group of company/force sport infra .png", desc: "INFRASTRUCTURE & DEVELOPMENT" },
            { name: "SPORTEX INDIA", logo: "/force group of company/Sportex india.png", desc: "FABRICS & MANUFACTURING UNIT" },
            { name: "FITTOOOS", logo: "/force group of company/fittooos.png", desc: "LIFESTYLE & STREETWEAR" },
            { name: "FIT SUTRA", logo: "/force group of company/fit sutra .png", desc: "FITNESS & WELLNESS" },
            { name: "SHATAK", logo: "/force group of company/shatak logo.png", desc: "PREMIUM ACTIVEWEAR" },
            { name: "JABRAAT", logo: "/force group of company/jabraat logo.png", desc: "PRO TEAM KITS" },
            { name: "FORCE SPORTS UNITED", logo: "/force group of company/force sports united logo.png", desc: "SPORTS EVENT MANAGEMENT COMPANY" }
          ].map((company) => {
            const CardWrapper = company.url ? 'a' : 'div';
            const wrapperProps = company.url ? { href: company.url, target: "_blank", rel: "noopener noreferrer" } : {};
            
            return (
              <CardWrapper key={company.name} {...wrapperProps} className={`bg-card border border-border p-6 rounded-lg flex flex-col items-center justify-center gap-4 transition-colors group ${company.url ? 'hover:border-primary cursor-pointer' : 'hover:border-primary/50'}`}>
                <div className="bg-white/95 w-full rounded-md p-3 flex items-center justify-center h-28">
                  <img src={company.logo} alt={company.name} className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="text-center mt-2 flex flex-col gap-1">
                  <h3 className="font-heading font-bold text-sm md:text-base group-hover:text-primary transition-colors">{company.name}</h3>
                  <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">{company.desc}</span>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
