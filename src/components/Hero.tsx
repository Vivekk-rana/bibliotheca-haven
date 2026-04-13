import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";
import { motion } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

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
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AnimatedLogo />
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold leading-tight text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: "linear-gradient(90deg, hsl(var(--ink)) 0%, hsl(var(--sepia)) 50%, hsl(var(--ink)) 100%)",
              backgroundSize: "200% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Literary Society
          </motion.h1>

          <motion.p
            className="font-display text-2xl md:text-3xl text-sepia font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            BIT Sindri
          </motion.p>

          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            VOX POPULI - Voice of the people
            
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-sepia hover:bg-sepia/90 text-background font-body px-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("#about")}
                variant="outline"
                size="lg"
                className="border-sepia text-sepia hover:bg-sepia/5 font-body px-8 shadow-md hover:shadow-lg transition-shadow"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sepia/30 to-transparent"></div>
    </section>
  );
};

export default Hero;
