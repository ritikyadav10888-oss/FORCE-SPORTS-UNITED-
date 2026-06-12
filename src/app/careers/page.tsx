"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
              Help us deliver premium sports events across India. Join our team of passionate sports professionals.
            </p>
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
                    <option value="Tournament Director">Tournament Director</option>
                    <option value="Event Operations Manager">Event Operations Manager</option>
                    <option value="Logistics & Ground Coordinator">Logistics & Ground Coordinator</option>
                    <option value="Match Referee & Umpire Coordinator">Match Referee & Umpire Coordinator</option>
                    <option value="Live Stream & Broadcast Technician">Live Stream & Broadcast Technician</option>
                    <option value="Social Media & Content Creator">Social Media & Content Creator</option>
                    <option value="Sports Marketing Executive">Sports Marketing Executive</option>
                    <option value="Hospitality & Vendor Manager">Hospitality & Vendor Manager</option>
                    <option value="Medical & Safety Officer">Medical & Safety Officer</option>
                    <option value="Sports Data Analyst">Sports Data Analyst</option>
                    <option value="Client Relationship Executive">Client Relationship Executive</option>
                    <option value="Finance & Accounts Manager">Finance & Accounts Manager</option>
                    <option value="Open Application / Other">Open Application / Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Current Location</label>
                  <input type="text" id="location" name="location" className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="e.g. Mumbai, Maharashtra" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="experience" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Years of Experience</label>
                  <input type="text" id="experience" name="experience" className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="e.g. 3 Years" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="linkedin" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">LinkedIn Profile</label>
                  <input type="url" id="linkedin" name="linkedin" className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="https://linkedin.com/in/johndoe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="portfolio" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Portfolio / Website</label>
                  <input type="url" id="portfolio" name="portfolio" className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="https://yourwebsite.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Cover Letter / Why do you want to join us?</label>
                <textarea id="message" name="message" rows={4} className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-y" placeholder="Tell us a little about yourself and your passion for sports..." />
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
