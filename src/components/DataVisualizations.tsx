import { useEffect, useRef } from "react";
import graphImage from "@/assets/graph.png";
import statsImage from "@/assets/stats.png";

const DataVisualizations = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const graphs = [
    {
      image: graphImage,
      alt: "Embodied Carbon Emissions - Bar chart showing carbon intensity measured by kgCO2e/m² across various building projects, comparing against 2025 and 2030 targets",
      caption: "Embodied Carbon Emissions Analysis",
      description: "Comprehensive view of carbon intensity across our portfolio, tracking progress toward 2025 and 2030 sustainability targets."
    },
    {
      image: statsImage,
      alt: "Managed Portfolio Statistics - Timeline showing carbon footprint, energy intensity, and energy consumption trends from 2019 to 2022 with percentage improvements",
      caption: "Portfolio Performance Metrics",
      description: "Year-over-year improvements in carbon footprint, energy intensity, and total energy consumption across managed properties."
    }
  ];

  return (
    <section
      id="data-visualizations"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Key Graphs & Data Visualizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive sustainability metrics and environmental impact data through interactive visualizations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {graphs.map((graph, index) => (
            <div
              key={index}
              className="scroll-reveal bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative group">
                <img
                  src={graph.image}
                  alt={graph.alt}
                  loading="lazy"
                  className="w-full h-auto object-contain bg-white"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {graph.caption}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {graph.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center scroll-reveal">
          <p className="text-sm text-muted-foreground">
            All data visualizations are updated regularly to reflect our latest sustainability initiatives and environmental performance
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataVisualizations;
