import { useState } from "react";
import Layout from "@/components/Layout";
import { Link, useLocation } from "react-router-dom";
import mediaImg from "@/assets/media-production.jpg";
import { Monitor, Mic, Video, Camera, Share2, Film, ArrowRight, Download } from "lucide-react";
import galleryImages from "@/data/gallery.json";



const Media = () => {
  const location = useLocation();
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(location.state?.openAlbum || null);
  const [visibleCount, setVisibleCount] = useState(24);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 24, galleryImages.length));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <img src={mediaImg} alt="Media production setup" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="font-heading text-primary text-sm tracking-[0.3em] uppercase mb-3">Broadcast Quality</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Media & <span className="text-gradient">Production</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From live streaming to social media content — we make your event look and feel like a professional broadcast.
          </p>
        </div>
      </section>



      {/* Event Gallery */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          {!selectedAlbum ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Album Card */}
              <div
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors cursor-pointer group"
                onClick={() => setSelectedAlbum("Gitanjali Narnolia Cricket League 2026")}
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={galleryImages[0]}
                    alt="Gitanjali Narnolia Cricket League 2026"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-primary text-primary-foreground px-6 py-2 rounded font-heading uppercase text-sm tracking-widest">
                      View Album
                    </span>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading text-xl font-bold mb-2">Gitanjali Narnolia Cricket League 2026</h3>
                  <p className="text-muted-foreground text-sm">{galleryImages.length} Photos</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                <h3 className="font-heading text-2xl font-bold text-center sm:text-left">{selectedAlbum}</h3>
                <div className="flex gap-4">
                  <button
                    onClick={async () => {
                      if (window.confirm(`Are you sure you want to download all ${galleryImages.length} images? Your browser may ask for permission to download multiple files.`)) {
                        for (let i = 0; i < galleryImages.length; i++) {
                          const link = document.createElement("a");
                          link.href = galleryImages[i];
                          link.download = `${selectedAlbum}-image-${i + 1}.jpg`;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                          await new Promise(resolve => setTimeout(resolve, 300));
                        }
                      }
                    }}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm hover:opacity-90 transition-opacity font-bold uppercase tracking-wider flex items-center gap-2 shrink-0"
                  >
                    <Download size={16} /> Download All
                  </button>
                  <button
                    onClick={() => {
                      setSelectedAlbum(null);
                      setVisibleCount(24);
                    }}
                    className="px-4 py-2 border border-border rounded text-sm hover:border-primary transition-colors font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground shrink-0"
                  >
                    Back to Albums
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {galleryImages.slice(0, visibleCount).map((src, i) => (
                  <div key={i} className="group relative aspect-square overflow-hidden rounded-lg bg-secondary border border-border">
                    <img
                      src={src}
                      alt={`Gallery image ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={src}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground p-3 rounded-full hover:scale-110 transition-transform"
                        title="Download Image"
                      >
                        <Download size={20} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < galleryImages.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={loadMore}
                    className="px-8 py-3 bg-secondary border border-border rounded font-heading text-sm uppercase tracking-wider hover:border-primary transition-colors"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}

    </Layout>
  );
};

export default Media;
