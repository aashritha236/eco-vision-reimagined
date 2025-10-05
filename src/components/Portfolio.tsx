import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = sectionRef.current?.querySelectorAll(".parallax-card");
      cards?.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const scrolled = window.scrollY;
        const rate = scrolled * 0.05;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          (card as HTMLElement).style.transform = `translateY(${rate}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".scroll-reveal");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Eco Tower Complex",
      category: "Commercial",
      description: "50-story net-zero energy office building",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    {
      title: "Green Valley Resort",
      category: "Hospitality",
      description: "Luxury eco-resort with 100% renewable energy",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    },
    {
      title: "Sustainable Housing Project",
      category: "Residential",
      description: "200-unit carbon-neutral community",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
    {
      title: "Innovation Campus",
      category: "Education",
      description: "LEED Platinum university research facility",
      image: "https://images.unsplash.com/photo-1562774053-701939374585",
    },
    {
      title: "Urban Renewal Initiative",
      category: "Urban Planning",
      description: "City-wide carbon reduction program",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
    },
    {
      title: "Smart Factory 2.0",
      category: "Industrial",
      description: "Zero-waste manufacturing facility",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Project</span> Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing excellence in sustainable construction across diverse
            sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="scroll-reveal parallax-card group overflow-hidden border-border hover:shadow-elegant transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <button className="bg-white text-primary px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-primary hover:text-white transition-colors">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <CardContent className="p-6">
                <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
