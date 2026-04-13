import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";

interface ActivityCardProps {
  activity: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
  index: number;
}

const ActivityCard = ({ activity, index }: ActivityCardProps) => {
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
};

export default ActivityCard;