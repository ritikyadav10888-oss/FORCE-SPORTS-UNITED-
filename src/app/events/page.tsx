import Link from "next/link";

import Layout from "@/components/Layout";
import FeaturedEventCard from "@/components/FeaturedEventCard";
import { ArrowRight } from "lucide-react";
import { OPL_ALBUM_NAME, OPL_CARD_IMAGES } from "@/data/opl";
import { CRCE_ALBUM_NAME, CRCE_CARD_IMAGES } from "@/data/crce";
import { MONSOON_MATCH_ALBUM_NAME, MONSOON_MATCH_CARD_IMAGES } from "@/data/monsoon-match";
import { WET_WICKET_ALBUM_NAME, WET_WICKET_CARD_IMAGES } from "@/data/wet-wicket";
import { LPL_ALBUM_NAME, LPL_CARD_IMAGES } from "@/data/lpl";
import { YPL_ALBUM_NAME, YPL_CARD_IMAGES } from "@/data/ypl";
import { GPL_ALBUM_NAME, GPL_CARD_IMAGES } from "@/data/gpl";
import { MONSOON_CUP_ALBUM_NAME, MONSOON_CUP_CARD_IMAGES } from "@/data/monsoon-cup";

export const dynamic = "force-dynamic";

const events = [
  {
    albumName: OPL_ALBUM_NAME,
    image: OPL_CARD_IMAGES,
    hasImage: true,
    title: "OPL",
    category: "OCTACREST PREMIER LEAGUE",
    stats: [{ value: "2026", label: "Year" }, { value: "Monsoon", label: "Edition" }, { value: "1", label: "Season" }],
    desc: "Monsoon cricket league featuring franchise-style team auctions and competitive match play.",
  },
  { albumName: CRCE_ALBUM_NAME, image: CRCE_CARD_IMAGES, hasImage: true, title: "Fr. CRCE Alumni Sports League", category: "Alumni Event", stats: [{ value: "2026", label: "Year" }, { value: "8", label: "Teams" }, { value: "64", label: "Players" }], desc: "Alumni event bringing together former students for an exciting sports league." },
  {
    albumName: MONSOON_MATCH_ALBUM_NAME,
    image: MONSOON_MATCH_CARD_IMAGES.slice(0, 4),
    hasImage: true,
    title: "Monsoon Match",
    category: "MONSOON CRICKET",
    stats: [{ value: "2026", label: "Year" }, { value: "Monsoon", label: "Season" }, { value: "1", label: "Sport" }],
    desc: "On-ground monsoon cricket with match photography and video coverage.",
  },
  {
    albumName: GPL_ALBUM_NAME,
    image: GPL_CARD_IMAGES,
    hasImage: true,
    title: "GPL",
    category: "CORPORATE LEAGUE",
    stats: [{ value: "120", label: "Players" }, { value: "Mixed", label: "Categories" }, { value: "Corp", label: "Event" }],
    desc: "Corporate event featuring professional cricket matches and a grand prize distribution.",
  },
  {
    albumName: LPL_ALBUM_NAME,
    image: LPL_CARD_IMAGES,
    hasImage: true,
    title: "LPL",
    category: "LOKHANDWALA PREMIER LEAGUE",
    stats: [{ value: "8", label: "Seasons" }, { value: "600+", label: "Players" }, { value: "40+", label: "Societies" }],
    desc: "Massive community tournament spanning across 40+ residential societies.",
  },
  {
    albumName: YPL_ALBUM_NAME,
    image: YPL_CARD_IMAGES,
    hasImage: true,
    title: "YPL",
    category: "YUVA PREMIER LEAGUE",
    stats: [{ value: "11", label: "Seasons" }, { value: "750+", label: "Players" }, { value: "3", label: "Sports" }],
    desc: "Multi-season youth league featuring 3 sports with franchise-style team ownership.",
  },
  { image: null, title: "ASSL", category: "ALL SPORTS SUPER LEAGUE", stats: [{ value: "2", label: "Seasons" }, { value: "180", label: "Players" }, { value: "8", label: "Sports" }], desc: "A thrilling multi-disciplinary super league testing athletes across 8 different sports." },
  {
    albumName: WET_WICKET_ALBUM_NAME,
    image: WET_WICKET_CARD_IMAGES,
    hasImage: true,
    title: "WET WICKET",
    category: "MONSOON CRICKET LEAGUE",
    stats: [{ value: "8", label: "Teams" }, { value: "16+", label: "Monsoon" }, { value: "1", label: "Sport" }],
    desc: "Specialty monsoon season cricket tournament designed for wet weather play.",
  },
  {
    albumName: MONSOON_CUP_ALBUM_NAME,
    image: MONSOON_CUP_CARD_IMAGES,
    hasImage: true,
    title: "MONSOON CUP",
    category: "KNOCKOUT TOURNAMENT",
    stats: [{ value: "32", label: "Teams" }, { value: "350+", label: "Players" }, { value: "KO", label: "Format" }],
    desc: "High-stakes 32-team knockout cup tournament during the monsoon season.",
  },
];

export default function EventsPage() {
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
}
