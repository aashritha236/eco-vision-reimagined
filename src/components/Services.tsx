import { useEffect, useRef } from "react";
import { Leaf, TrendingDown, Building, Recycle, Sun, Droplet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      icon: Building,
      title: "Green Building Design",
      description:
        "Innovative architectural solutions that minimize environmental impact while maximizing efficiency and beauty.",
    },
    {
      icon: TrendingDown,
      title: "Carbon Management",
      description:
        "Comprehensive carbon footprint analysis and reduction strategies for sustainable operations.",
    },
    {
      icon: Recycle,
      title: "Material Recycling",
      description:
        "Advanced recycling systems that transform construction waste into valuable resources.",
    },
    {
      icon: Sun,
      title: "Renewable Energy",
      description:
        "Solar, wind, and geothermal integration for self-sustaining building solutions.",
    },
    {
      icon: Droplet,
      title: "Water Conservation",
      description:
        "Intelligent water management systems that reduce consumption and promote reuse.",
    },
    {
      icon: Leaf,
      title: "Eco-Certifications",
      description:
        "LEED and green building certification support throughout your project lifecycle.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-soft" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Sustainable</span> Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions for eco-friendly construction and carbon
            management that drive real environmental change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="scroll-reveal border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="text-primary hover:text-primary-light font-semibold flex items-center group">
                    Learn More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
