import Link from "next/link";

import Layout from "@/components/Layout";
import FeaturedEventCard from "@/components/FeaturedEventCard";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import eventBox from "@/assets/event-boxcricket.jpg";
import eventLeague from "@/assets/event-league.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import { Trophy, Users, Calendar, Target, ArrowRight, TrendingUp } from "lucide-react";
import galleryImages from "@/data/gallery.json";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { R2EventCarousel } from "@/components/R2EventCarousel";

const leagues = [
  {
    title: "Youth Premier League (YPL)",
    status: "Season 3 Upcoming",
    desc: "A franchise-style cricket league for emerging talent. Teams are drafted, branded, and compete in a structured season format with playoffs.",
    stats: [
      { label: "Seasons", value: "2" },
      { label: "Teams", value: "16" },
      { label: "Players", value: "180+" },
      { label: "Matches", value: "64" },
    ],
  },
];

const formats = [
  { icon: Calendar, title: "League Phase", desc: "Round-robin group stage with every team playing 4+ matches." },
  { icon: Trophy, title: "Playoffs", desc: "Top teams qualify for knockouts — semis and a grand finale." },
  { icon: Target, title: "Season Format", desc: "Multi-week seasons with scheduled matchdays and rest periods." },
];

const impact = [
  { value: "350+", label: "Players Engaged" },
  { value: "120+", label: "Matches Played" },
  { value: "25,000+", label: "Community Reach" },
  { value: "3", label: "Cities" },
];

const events = [
  { r2Folder: "ASL Fr.CRCE_", r2Files: ["IMG20260606163441.jpg", "IMG_1460.JPG", "DSC_0358.JPG", "IMG_1492.JPG", "IMG_1496.JPG", "IMG_1504.JPG", "IMG20260606222548.jpg"], title: "Fr. CRCE Alumni Sports League", category: "Alumni Event", stats: [{ value: "2026", label: "Year" }, { value: "8", label: "Teams" }, { value: "64", label: "Players" }], desc: "Alumni event bringing together former students for an exciting sports league." },
  {
    r2Folder: "Gitanjali Narnolia cricket leauge",
    title: "GPL",
    category: "CORPORATE LEAGUE",
    stats: [{ value: "120", label: "Players" }, { value: "Mixed", label: "Categories" }, { value: "Corp", label: "Event" }],
    desc: "Corporate event featuring professional cricket matches and a grand prize distribution."
  },
  { image: null, title: "LPL", category: "LOKHANDWALA PREMIER LEAGUE", stats: [{ value: "8", label: "Seasons" }, { value: "600+", label: "Players" }, { value: "40+", label: "Societies" }], desc: "Massive community tournament spanning across 40+ residential societies." },
  { image: eventLeague, title: "YPL", category: "YUVA PREMIER LEAGUE", stats: [{ value: "11", label: "Seasons" }, { value: "750+", label: "Players" }, { value: "3", label: "Sports" }], desc: "Multi-season youth league featuring 3 sports with franchise-style team ownership." },
  { image: null, title: "ASSL", category: "ALL SPORTS SUPER LEAGUE", stats: [{ value: "2", label: "Seasons" }, { value: "180", label: "Players" }, { value: "8", label: "Sports" }], desc: "A thrilling multi-disciplinary super league testing athletes across 8 different sports." },
  { image: null, title: "WET WICKET", category: "MONSOON CRICKET LEAGUE", stats: [{ value: "8", label: "Teams" }, { value: "16+", label: "Monsoon" }, { value: "1", label: "Sport" }], desc: "Specialty monsoon season cricket tournament designed for wet weather play." },
  { image: null, title: "MONSOON CUP", category: "KNOCKOUT TOURNAMENT", stats: [{ value: "32", label: "Teams" }, { value: "350+", label: "Players" }, { value: "KO", label: "Format" }], desc: "High-stakes 32-team knockout cup tournament during the monsoon season." },
];

const Events = () => {
  return (
    <Layout>
      <section className="bg-secondary section-padding pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-fade-in-up mb-16">
            <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">PERFORMANCE PORTFOLIO</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 uppercase">
              DELIVERED <span className="text-gradient">REPEATEDLY</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A flagship roster of leagues delivered across schools, societies, corporate and academices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <FeaturedEventCard key={event.title} event={event} className="animate-fade-in-up" />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/quote" className="inline-flex items-center gap-2 bg-gradient-brand px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity">
              Plan Your Event <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
