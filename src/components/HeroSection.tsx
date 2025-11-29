import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] lg:min-h-[550px] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
          Securing Democratic Elections
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-100">
          Monitor elections in real-time, prevent fraud, and inspire new voters with transparent, data-driven insights
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-200">
          <Button 
            size="lg" 
            className="bg-card text-primary hover:bg-card/90 font-semibold px-8 py-6 text-base shadow-elegant"
          >
            Start Monitoring
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-semibold px-8 py-6 text-base backdrop-blur-sm"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
