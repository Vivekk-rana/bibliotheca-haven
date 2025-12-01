import { Image as ImageIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = Array(6).fill(null).map((_, i) => ({
    id: i + 1,
    alt: `Literary Society event ${i + 1}`,
  }));

  return (
    <section id="gallery" className="py-24 bg-parchment">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
            Gallery
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Moments captured from our literary journey—events, celebrations, and the community we've built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 0.1}>
              <motion.div
                className="group aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-border hover:border-sepia/30 transition-all shadow-sm hover:shadow-md cursor-pointer"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full flex items-center justify-center relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageIcon className="h-12 w-12 text-muted-foreground/30" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-sepia/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="font-body text-sm text-muted-foreground">
            More photos coming soon. Follow us on social media for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
