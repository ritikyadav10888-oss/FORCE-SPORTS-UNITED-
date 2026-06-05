import { useState } from "react";
import Layout from "@/components/Layout";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const openings = [
  {
    title: "Tournament Director",
    location: "Mumbai",
    type: "Full-time",
    summary: "Oversee the entire tournament lifecycle, manage stakeholders, and ensure seamless execution of all event operations.",
  },
  {
    title: "Event Operations Manager",
    location: "Mumbai",
    type: "Full-time",
    summary: "Lead on-ground tournament execution, vendor coordination, and match-day operations.",
  },
  {
    title: "Logistics & Ground Coordinator",
    location: "On-site",
    type: "Contract",
    summary: "Manage equipment transport, ground preparation, seating arrangements, and facility readiness.",
  },
  {
    title: "Match Referee & Umpire Coordinator",
    location: "Mumbai",
    type: "Contract",
    summary: "Recruit, schedule, and manage certified officials to ensure fair play and adherence to tournament rules.",
  },
  {
    title: "Live Stream & Broadcast Technician",
    location: "Remote / On-site",
    type: "Contract",
    summary: "Multicamera setup, digital overlays, scoring sync, and broadcast delivery for sports events.",
  },
  {
    title: "Social Media & Content Creator",
    location: "Mumbai / Remote",
    type: "Part-time",
    summary: "Capture on-ground highlights, create reels, and manage digital engagement during tournaments.",
  },
  {
    title: "Sports Marketing Executive",
    location: "Mumbai",
    type: "Full-time",
    summary: "Brand partnerships, sponsor pitch decks, and commercial campaigns for leagues and corporate events.",
  },
  {
    title: "Hospitality & Vendor Manager",
    location: "Mumbai",
    type: "Full-time",
    summary: "Coordinate food & beverage, VIP lounges, trophies/medals procurement, and player accommodations.",
  },
  {
    title: "Medical & Safety Officer",
    location: "On-site",
    type: "Contract",
    summary: "Ensure compliance with safety protocols, provide first-aid response, and coordinate with local emergency services.",
  },
  {
    title: "Sports Data Analyst",
    location: "Mumbai",
    type: "Full-time",
    summary: "Analyze player statistics, team performance data, and match trends to provide actionable insights for leagues and broadcasters.",
  },
  {
    title: "Client Relationship Executive",
    location: "Mumbai",
    type: "Full-time",
    summary: "Act as the primary point of contact for corporate clients, ensuring their event requirements and expectations are exceeded.",
  },
  {
    title: "Finance & Accounts Manager",
    location: "Mumbai / Remote",
    type: "Full-time",
    summary: "Oversee tournament budgets, vendor payments, financial reporting, and compliance for all sporting events.",
  }
];

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "Thank you for applying. We will get back to you shortly.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <Layout>
      <div className="section-padding pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">Join the team</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 uppercase">
              Careers at <span className="text-gradient">Force Sports United</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Help us deliver premium sports events across India. Open roles in operations, production, and marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {openings.map((role) => (
              <div key={role.title} className="bg-card border border-border p-6 rounded-lg flex flex-col h-full hover:border-primary transition-colors group">
                <div className="p-3 bg-secondary rounded-lg w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">{role.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">{role.summary}</p>
                
                <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-border">
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <MapPin size={14} className="text-primary" />
                    {role.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <Clock size={14} className="text-primary" />
                    {role.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Apply Form */}
          <div className="bg-secondary border border-border rounded-xl p-8 md:p-12 max-w-4xl mx-auto" id="apply">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl font-bold mb-4 uppercase">
                Submit Your <span className="text-gradient">Application</span>
              </h2>
              <p className="text-muted-foreground">
                Upload your resume and tell us which role you're applying for. We'll get back to you shortly!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Full Name *</label>
                  <input required type="text" id="name" name="name" className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Email Address *</label>
                  <input required type="email" id="email" name="email" className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Role Applied For *</label>
                  <select required defaultValue="" id="role" name="role" className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="" disabled className="text-muted-foreground">Select a role</option>
                    {openings.map((role) => (
                      <option key={role.title} value={role.title}>{role.title}</option>
                    ))}
                    <option value="Open Application / Other">Open Application / Other</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="resume" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Upload Resume (PDF/DOC, Max 5MB) *</label>
                <input required type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-widest file:bg-primary/20 file:text-primary hover:file:bg-primary/30 cursor-pointer transition-colors" />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-gradient-brand px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  {!isSubmitting && <ArrowRight size={16} />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
