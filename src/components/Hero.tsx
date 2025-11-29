import { Button } from "@/components/ui/button";
import { BookOpen, Feather } from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Literary books and vintage atmosphere"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-6">
            <div className="bg-sepia/10 p-4 rounded-full">
              <Feather className="h-12 w-12 text-sepia" />
            </div>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-tight text-balance">
            Literary Society
          </h1>

          <p className="font-display text-2xl md:text-3xl text-sepia font-medium">
            BIT Sindri
          </p>

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            A sanctuary for words, ideas, and creative minds. We celebrate literature,
            foster thoughtful discussions, and nurture the art of expression.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="bg-sepia hover:bg-sepia/90 text-background font-body px-8"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Join Our Community
            </Button>
            <Button
              onClick={() => scrollToSection("#about")}
              variant="outline"
              size="lg"
              className="border-sepia text-sepia hover:bg-sepia/5 font-body px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sepia/30 to-transparent"></div>
    </section>
  );
};

export default Hero;
