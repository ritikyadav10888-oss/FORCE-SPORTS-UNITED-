import Layout from "@/components/Layout";
import mediaImg from "@/assets/media-production.jpg";
import MediaGallery from "@/components/MediaGallery";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const Media = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <img src={mediaImg.src || (mediaImg as any)} alt="Media production setup" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
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
          <Suspense fallback={
            <div className="py-20 flex flex-col items-center justify-center text-muted-foreground">
              <Loader2 size={40} className="animate-spin mb-4 text-primary" />
              <p className="font-heading tracking-widest uppercase">Loading Gallery...</p>
            </div>
          }>
            <MediaGallery />
          </Suspense>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
