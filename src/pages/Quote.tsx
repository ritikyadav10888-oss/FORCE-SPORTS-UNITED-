import { useState } from "react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle } from "lucide-react";

const eventTypes = ["Box Cricket", "Cricket League", "Corporate Tournament", "Marathon / Run", "Multi-Sport Event", "Custom Event"];
const addOns = ["Live Streaming", "Professional Umpires", "Scoring (CricHeroes)", "Commentary", "Branding & Decor", "Jerseys & Kits", "Photography & Video", "Trophies & Awards"];

const Quote = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    eventType: "", teams: "", location: "", dateStart: "", dateEnd: "",
    addOns: [] as string[], details: "",
  });

  const toggleAddOn = (addon: string) => {
    setForm((f) => ({
      ...f,
      addOns: f.addOns.includes(addon) ? f.addOns.filter((a) => a !== addon) : [...f.addOns, addon],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Quote request submitted!", description: "Our team will reach out within 24 hours with a custom proposal." });
    setForm({ name: "", email: "", phone: "", company: "", eventType: "", teams: "", location: "", dateStart: "", dateEnd: "", addOns: [], details: "" });
  };

  const inputClass = "w-full bg-secondary border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm";

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">Event Planner</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Get a <span className="text-gradient">Quote</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tell us about your event and we'll craft a custom proposal. No commitments — just possibilities.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {/* Contact Info */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-heading text-lg font-bold mb-4">Your Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading tracking-wider uppercase mb-2">Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-heading tracking-wider uppercase mb-2">Company</label>
                  <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} placeholder="Company name" />
                </div>
                <div>
                  <label className="block text-xs font-heading tracking-wider uppercase mb-2">Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-heading tracking-wider uppercase mb-2">Phone *</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+91 ..." />
                </div>
              </div>
            </div>

            {/* Event Info */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-heading text-lg font-bold mb-4">Event Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading tracking-wider uppercase mb-2">Event Type *</label>
                  <select required value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} className={inputClass}>
                    <option value="">Select type</option>
                    {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-heading tracking-wider uppercase mb-2">Number of Teams</label>
                  <input type="number" min="2" value={form.teams} onChange={(e) => setForm({ ...form, teams: e.target.value })} className={inputClass} placeholder="e.g. 16" />
                </div>
                <div>
                  <label className="block text-xs font-heading tracking-wider uppercase mb-2">Location *</label>
                  <input type="text" required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inputClass} placeholder="City or venue" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-heading tracking-wider uppercase mb-2">Start Date</label>
                    <input type="date" value={form.dateStart} onChange={(e) => setForm({ ...form, dateStart: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-heading tracking-wider uppercase mb-2">End Date</label>
                    <input type="date" value={form.dateEnd} onChange={(e) => setForm({ ...form, dateEnd: e.target.value })} className={inputClass} />
                  </div>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-heading text-lg font-bold mb-4">Add-Ons</h2>
              <p className="text-muted-foreground text-sm mb-4">Select any additional services you'd like included.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {addOns.map((addon) => (
                  <button
                    key={addon}
                    type="button"
                    onClick={() => toggleAddOn(addon)}
                    className={`flex items-center gap-2 text-left text-sm px-3 py-2.5 rounded border transition-colors ${
                      form.addOns.includes(addon)
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-secondary text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <CheckCircle size={14} className={form.addOns.includes(addon) ? "text-primary" : "text-muted-foreground/40"} />
                    {addon}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-heading text-lg font-bold mb-4">Anything Else?</h2>
              <textarea rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className={`${inputClass} resize-none`} placeholder="Special requirements, format preferences, budget range..." />
            </div>

            <button type="submit" className="w-full bg-gradient-brand px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Submit Quote Request <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
