import Layout from "@/components/Layout";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const events = [
  { image: portfolio1, title: "Sunset Marathon 2025", category: "Marathon", desc: "A 10,000-runner marathon with live entertainment, LED finish-line staging, and full broadcast coverage." },
  { image: portfolio2, title: "Pro Basketball Championship", category: "Tournament", desc: "Indoor arena tournament with immersive lighting, pyrotechnics, and a sell-out crowd of 18,000." },
  { image: portfolio3, title: "Grand Cycling Classic", category: "Cycling", desc: "A multi-city cycling event spanning 200km with mobile event infrastructure and real-time tracking." },
];

const Portfolio = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of events that showcase our expertise and passion.
          </p>
        </div>

        <div className="space-y-16">
          {events.map((event, i) => (
            <div
              key={event.title}
              className={`grid md:grid-cols-2 gap-8 items-center animate-fade-in-up ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-lg w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="text-primary font-heading text-sm tracking-widest uppercase">{event.category}</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-4">{event.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
