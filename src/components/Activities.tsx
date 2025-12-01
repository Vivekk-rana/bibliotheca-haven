import { BookOpen, MessageCircle, Mic, PenTool, BookMarked, Award, Feather } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Activities = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const activities = [
    {
      icon: BookOpen,
      title: "Reading Sessions",
      description: "Curated book discussions exploring diverse genres and literary movements.",
    },
    {
      icon: MessageCircle,
      title: "Literary Debates",
      description: "Engaging debates on themes, authors, and contemporary literary issues.",
    },
    {
      icon: Mic,
      title: "Open Mic Nights",
      description: "Platform for poetry recitals, storytelling, and creative performances.",
    },
    {
      icon: PenTool,
      title: "Creative Writing",
      description: "Workshops and sessions to hone writing skills across various forms.",
    },
    {
      icon: BookMarked,
      title: "Book Club",
      description: "Monthly book selections with thoughtful group discussions and reviews.",
    },
    {
      icon: Award,
      title: "Literary Events",
      description: "Organizing competitions, festivals, and cultural literary celebrations.",
    },
  ];

  return (
    <section ref={ref} id="activities" className="py-24 bg-background relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-20 h-20 text-sepia/8"
        style={{ y: y1 }}
      >
        <Feather className="w-full h-full" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 left-[5%] w-16 h-16 text-warm-accent/10"
        style={{ y: y2 }}
      >
        <BookMarked className="w-full h-full" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
            Our Activities
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            From intimate reading circles to vibrant literary festivals, we offer diverse
            opportunities to engage with literature and express your creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="group bg-card rounded-lg p-6 border border-border hover:border-sepia/30 transition-all hover:shadow-md"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-8 w-8 text-sepia mb-4" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold text-ink mb-3">
                    {activity.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {activity.description}
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

export default Activities;
