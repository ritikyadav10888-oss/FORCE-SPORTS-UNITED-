
import Layout from "@/components/Layout";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";

const posts = [
  {
    slug: "how-to-organize-box-cricket-tournament",
    title: "How to Organize a Box Cricket Tournament — Complete Guide",
    excerpt: "Everything you need to know about planning and executing a box cricket tournament, from venue selection to scoring systems.",
    category: "Guide",
    readTime: "8 min read",
    date: "March 2026",
  },
  {
    slug: "sports-event-checklist",
    title: "The Ultimate Sports Event Checklist for Organizers",
    excerpt: "A comprehensive checklist covering logistics, operations, production, and branding for any sports event.",
    category: "Checklist",
    readTime: "5 min read",
    date: "February 2026",
  },
  {
    slug: "corporate-sports-benefits",
    title: "Why Corporate Sports Events Are the Best Team Building Investment",
    excerpt: "How organized sports tournaments boost employee engagement, health, and company culture.",
    category: "Insights",
    readTime: "6 min read",
    date: "January 2026",
  },
  {
    slug: "live-streaming-sports-events",
    title: "Live Streaming Your Sports Event — A Beginner's Guide",
    excerpt: "Equipment, platforms, and tips for professionally live streaming your tournament or league matches.",
    category: "Guide",
    readTime: "7 min read",
    date: "December 2025",
  },
  {
    slug: "cricket-league-format-guide",
    title: "Choosing the Right League Format for Your Cricket Tournament",
    excerpt: "Round-robin vs knockout vs hybrid — which format works best for your event size and goals.",
    category: "Guide",
    readTime: "5 min read",
    date: "November 2025",
  },
  {
    slug: "sponsor-sports-event-roi",
    title: "The ROI of Sponsoring Local Sports Events",
    excerpt: "Why brands are increasingly turning to grassroots sports for authentic audience engagement.",
    category: "Insights",
    readTime: "6 min read",
    date: "October 2025",
  },
];

const Blog = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">Knowledge Hub</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Blog & <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Tips, guides, and insights on sports event management from the Force Sports United team.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-24 bg-card border border-border rounded-lg animate-fade-in-up">
          <div className="mb-6 inline-flex items-center justify-center p-4 rounded-xl border border-[#B8902E] bg-background/50">
            <Clock size={32} className="text-[#F2C94C]" />
          </div>
          <h2 className="font-heading text-3xl font-bold mb-4 uppercase tracking-widest text-primary">Blog Coming Soon</h2>
          <p className="text-muted-foreground text-center max-w-md">
            We are working hard to bring you the best insights and guides on sports event management. Stay tuned!
          </p>
        </div>

        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-4">More articles coming soon. Have a topic in mind?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-heading text-sm tracking-wider uppercase hover:opacity-80 transition-opacity">
            Suggest a Topic <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
