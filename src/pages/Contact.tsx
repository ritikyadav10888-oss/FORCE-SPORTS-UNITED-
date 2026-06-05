import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const eventTypes = ["Box Cricket", "Cricket League", "Corporate Tournament", "Marathon", "Multi-Sport Event", "Other"];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", eventType: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", company: "", email: "", phone: "", eventType: "", budget: "", message: "" });
  };

  const inputClass = "w-full bg-secondary border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm";

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 animate-fade-in-up">
            <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Have an event in mind? We'd love to hear about it. Reach out and let's create something extraordinary.
            </p>
            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, text: "info@forcesportsunited.com" },
                { icon: Phone, text: "+91 72088 29940" },
                { icon: MapPin, text: "Mumbai, India" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/917208829940?text=Hi%20Force%20Sports%20United%2C%20I%27d%20like%20to%20discuss%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] px-6 py-3 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground transition-colors"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-heading tracking-wider uppercase mb-2">Name *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs font-heading tracking-wider uppercase mb-2">Company</label>
                <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} placeholder="Company name" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-heading tracking-wider uppercase mb-2">Email *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-xs font-heading tracking-wider uppercase mb-2">Phone</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+91 ..." />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-heading tracking-wider uppercase mb-2">Event Type</label>
                <select value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} className={inputClass}>
                  <option value="">Select event type</option>
                  {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-heading tracking-wider uppercase mb-2">Budget (Optional)</label>
                <input type="text" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputClass} placeholder="₹50,000 - ₹5,00,000" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-heading tracking-wider uppercase mb-2">Message *</label>
              <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Tell us about your event..." />
            </div>
            <button type="submit" className="w-full bg-gradient-brand px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
