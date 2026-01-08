import { heroData } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4 animate-fade-in">
            {heroData.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {heroData.role}
          </p>
          <p className="text-lg text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {heroData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {heroData.ctaButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {button.label}
                {index === 0 && <ArrowRight size={16} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
