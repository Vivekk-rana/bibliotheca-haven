import { BookHeart, Users, Sparkles, BookOpen, PenTool } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const features = [
    {
      icon: BookHeart,
      title: "Our Vision",
      description:
        "To cultivate a vibrant community of literary enthusiasts who celebrate the written word and foster intellectual discourse.",
    },
    {
      icon: Users,
      title: "Our Mission",
      description:
        "Creating an inclusive space where students explore literature, enhance creativity, and develop critical thinking through engaging activities.",
    },
    {
      icon: Sparkles,
      title: "Our Purpose",
      description:
        "Promoting literary excellence, cultural enrichment, and creative expression through diverse events, discussions, and collaborative initiatives.",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-24 bg-parchment relative overflow-hidden">
      {/* Decorative animated elements with parallax */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-sepia/5 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-warm-accent/5 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Floating decorative book icon */}
      <motion.div
        className="absolute top-1/2 left-[5%] w-16 h-16 text-sepia/10"
        style={{ y: y1 }}
      >
        <BookOpen className="w-full h-full" />
      </motion.div>
      
      {/* Floating decorative quill icon */}
      <motion.div
        className="absolute top-1/3 right-[8%] w-12 h-12 text-warm-accent/10"
        style={{ y: y2 }}
      >
        <PenTool className="w-full h-full" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold text-ink mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="font-body text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Literary Society at BIT Sindri is more than just a club—it's a haven for
              those who find solace in stories, power in poetry, and joy in the written word.
              We bring together passionate minds to celebrate literature in all its forms.
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div
                  className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all border border-border group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="bg-sepia/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-sepia/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-7 w-7 text-sepia" />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
