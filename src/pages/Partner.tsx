import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Handshake, Store, Megaphone, Users, ArrowRight } from "lucide-react";

const partnerTypes = [
  {
    icon: Store,
    title: "Vendors & Suppliers",
    desc: "Equipment providers, venue partners, catering services, and logistics companies. Join our vendor network to serve premium sports events.",
    benefits: ["Regular event bookings", "Brand exposure at events", "Long-term partnerships"],
  },
  {
    icon: Megaphone,
    title: "Sponsors",
    desc: "Brands looking for authentic engagement with sports-loving audiences. Get visibility through branding, streaming, and on-ground presence.",
    benefits: ["Logo on jerseys & banners", "Live stream mentions", "Social media features"],
  },
  {
    icon: Users,
    title: "Collaborators",
    desc: "Event organizers, sports clubs, academies, and community leaders. Let's co-create events that benefit everyone.",
    benefits: ["Co-branded events", "Shared audience reach", "Revenue sharing models"],
  },
];

const Partner = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">Grow With Us</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 uppercase">
            Partner With <span className="text-gradient">Force Sports United</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We're building a network of premium partners to deliver world-class sports experiences.
          </p>
        </div>

        <div className="space-y-6">
          {partnerTypes.map((p, i) => (
            <div key={p.title} className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="md:flex md:gap-8">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                      <p.icon size={20} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold">{p.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0">
                  <h4 className="font-heading text-sm tracking-wider mb-3">BENEFITS</h4>
                  <ul className="space-y-2">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Handshake size={14} className="text-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-brand px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity">
            Become a Partner <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Partner;
