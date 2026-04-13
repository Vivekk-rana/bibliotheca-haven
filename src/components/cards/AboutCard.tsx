import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";

interface AboutCardProps {
  feature: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
  index: number;
}

const AboutCard = ({ feature, index }: AboutCardProps) => {
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
};

export default AboutCard;