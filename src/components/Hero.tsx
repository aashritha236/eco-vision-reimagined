import { useEffect, useState } from "react";
import { ArrowRight, Leaf, TrendingDown, Building } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Leaf className="text-primary w-8 h-8 animate-bounce" />
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                Sustainable Construction Leaders
              </span>
              <Leaf className="text-primary w-8 h-8 animate-bounce" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
              Building a{" "}
              <span className="text-primary bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Greener
              </span>{" "}
              Tomorrow
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Leading the way in sustainable construction and carbon management
              solutions. Transform your projects with innovative eco-friendly
              technologies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-elegant text-lg px-8 py-6 group"
              >
                Explore Solutions
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                View Projects
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-16 max-w-3xl mx-auto">
              <div className="text-center space-y-2 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-elegant transition-all hover:-translate-y-1">
                <Building className="w-10 h-10 text-primary mx-auto" />
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center space-y-2 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-elegant transition-all hover:-translate-y-1">
                <TrendingDown className="w-10 h-10 text-primary mx-auto" />
                <h3 className="text-3xl font-bold text-primary">45%</h3>
                <p className="text-sm text-muted-foreground">Carbon Reduced</p>
              </div>
              <div className="text-center space-y-2 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-elegant transition-all hover:-translate-y-1">
                <Leaf className="w-10 h-10 text-primary mx-auto" />
                <h3 className="text-3xl font-bold text-primary">100%</h3>
                <p className="text-sm text-muted-foreground">Eco-Friendly</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
