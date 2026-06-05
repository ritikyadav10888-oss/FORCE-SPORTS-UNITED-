import Layout from "@/components/Layout";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import eventBox from "@/assets/event-boxcricket.jpg";
import eventLeague from "@/assets/event-league.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Trophy, Users, Calendar, Target, ArrowRight, TrendingUp } from "lucide-react";
import galleryImages from "@/data/gallery.json";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
  { image: null, title: "Fr. CRCE Alumni Sports League", category: "Alumni Event", stats: [{ value: "2026", label: "Year" }, { value: "8", label: "Teams" }, { value: "64", label: "Players" }] },
  { 
    image: [
      "/Gitanjali Narnolia cricket leauge(2026)/Candids/388A0839.JPG",
      "/Gitanjali Narnolia cricket leauge(2026)/Candids/388A0850.JPG",
      "/Gitanjali Narnolia cricket leauge(2026)/Candids/388A0854 - Copy.JPG",
      "/Gitanjali Narnolia cricket leauge(2026)/Price distibution/388A1298.JPG",
      "/Gitanjali Narnolia cricket leauge(2026)/Price distibution/388A1296.JPG",
      "/Gitanjali Narnolia cricket leauge(2026)/Price distibution/388A1274.JPG"
    ], 
    title: "GPL", 
    category: "CORPORATE LEAGUE", 
    stats: [{ value: "120", label: "Players" }, { value: "Mixed", label: "Categories" }, { value: "Corp", label: "Event" }] 
  },
  { image: null, title: "LPL", category: "LOKHANDWALA PREMIER LEAGUE", stats: [{ value: "8", label: "Seasons" }, { value: "600+", label: "Players" }, { value: "40+", label: "Societies" }] },
  { image: eventLeague, title: "YPL", category: "YUVA PREMIER LEAGUE", stats: [{ value: "11", label: "Seasons" }, { value: "750+", label: "Players" }, { value: "3", label: "Sports" }] },
  { image: null, title: "ASSL", category: "ALL SPORTS SUPER LEAGUE", stats: [{ value: "2", label: "Seasons" }, { value: "180", label: "Players" }, { value: "8", label: "Sports" }] },
  { image: null, title: "WET WICKET", category: "MONSOON CRICKET LEAGUE", stats: [{ value: "8", label: "Teams" }, { value: "16+", label: "Monsoon" }, { value: "1", label: "Sport" }] },
  { image: null, title: "MONSOON CUP", category: "KNOCKOUT TOURNAMENT", stats: [{ value: "32", label: "Teams" }, { value: "350+", label: "Players" }, { value: "KO", label: "Format" }] },
];

const Events = () => {
  const navigate = useNavigate();

  return (
  <Layout>
    <section className="section-padding pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center animate-fade-in-up mb-16">
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">Our Work</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 uppercase">
            Events <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each event is a testament to our commitment to excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={event.title}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="overflow-hidden aspect-[4/3] w-full relative bg-[#1c1311]">
                {Array.isArray(event.image) ? (
                  <Carousel 
                    className="w-full h-full group/carousel"
                    plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
                  >
                    <CarouselContent className="h-full ml-0">
                      {event.image.map((imgSrc, idx) => (
                        <CarouselItem 
                          key={idx} 
                          className="relative h-full pl-0 cursor-pointer"
                          onClick={() => {
                            if (event.title === "Gitanjali Premier League") {
                              navigate("/media", { state: { openAlbum: "Gitanjali Narnolia Cricket League 2026" } });
                            }
                          }}
                        >
                          <img src={imgSrc} alt={`${event.title} slide ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500" loading="lazy" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                ) : (event as any).image ? (
                  <img src={(event as any).image} alt={event.title} className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${(event as any).containImage ? "object-contain bg-white p-2" : "object-cover"}`} loading="lazy" width={800} height={600} />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2A1511]/50 group-hover:scale-105 transition-transform duration-500">
                    <Trophy size={32} className="text-primary/40 mb-3" />
                    <span className="font-heading text-xl font-bold tracking-widest text-primary/70 uppercase">Upcoming</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <span className="text-xs text-primary font-heading tracking-widest uppercase">{event.category}</span>
                <h3 className="font-heading text-lg font-bold mt-1 mb-3">{event.title}</h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {(event.stats || [
                    { value: event.teams, label: "Teams" },
                    { value: event.matches, label: "Matches" },
                    { value: event.audience, label: "Audience" }
                  ]).map((stat, idx) => (
                    <div key={idx} className="bg-secondary rounded px-2 py-2">
                      <div className="font-heading text-sm font-bold text-primary">{stat.value}</div>
                      <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/quote" className="inline-flex items-center gap-2 bg-gradient-brand px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity">
            Plan Your Event <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Events;
