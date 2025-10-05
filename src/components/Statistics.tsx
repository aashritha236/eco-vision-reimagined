import { useEffect, useRef, useState } from "react";
import { TrendingDown, Users, Award, Globe } from "lucide-react";

const Statistics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { icon: Globe, value: 500, suffix: "+", label: "Projects Worldwide" },
    { icon: Users, value: 250, suffix: "+", label: "Happy Clients" },
    { icon: TrendingDown, value: 45, suffix: "%", label: "Carbon Reduction" },
    { icon: Award, value: 30, suffix: "+", label: "Awards Won" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            stats.forEach((stat, index) => {
              let current = 0;
              const increment = stat.value / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  current = stat.value;
                  clearInterval(timer);
                }
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(current);
                  return newCounters;
                });
              }, 30);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-r from-primary via-primary-light to-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                <Icon className="w-12 h-12 mx-auto" />
                <h3 className="text-5xl font-bold">
                  {counters[index]}
                  {stat.suffix}
                </h3>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
