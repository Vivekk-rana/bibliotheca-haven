import { Calendar, Clock, MapPin } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface PastEventCardProps {
  event: {
    title: string;
    date: string;
    description: string;
  };
  index: number;
}

interface UpcomingEventCardProps {
  event: {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
  };
  index: number;
}

const PastEventsCard = ({ event, index }: PastEventCardProps) => {
  return (
    <ScrollReveal key={index} delay={index * 0.15}>
      <motion.div
        className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-all"
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h4 className="font-display text-lg font-semibold text-ink mb-2">
          {event.title}
        </h4>
        <motion.div
          className="flex items-center gap-2 mb-3"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Calendar className="h-4 w-4 text-sepia" />
          <span className="font-body text-sm text-muted-foreground">
            {event.date}
          </span>
        </motion.div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {event.description}
        </p>
      </motion.div>
    </ScrollReveal>
  );
};

const UpcomingEventsCard = ({ event, index }: UpcomingEventCardProps) => {
    return (
        <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div
                  className="bg-card rounded-lg p-6 border-2 border-sepia/20 shadow-sm hover:shadow-md transition-all"
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-display text-xl font-semibold text-ink mb-4">
                    {event.title}
                  </h4>
                  <div className="space-y-3 mb-4">
                    <motion.div
                      className="flex items-start gap-3 text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Calendar className="h-4 w-4 text-sepia mt-0.5 flex-shrink-0" />
                      <span className="font-body text-muted-foreground">{event.date}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-3 text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Clock className="h-4 w-4 text-sepia mt-0.5 flex-shrink-0" />
                      <span className="font-body text-muted-foreground">{event.time}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-3 text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <MapPin className="h-4 w-4 text-sepia mt-0.5 flex-shrink-0" />
                      <span className="font-body text-muted-foreground">{event.location}</span>
                    </motion.div>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="w-full border-sepia text-sepia hover:bg-sepia/5">
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
    )
}

export { PastEventsCard, UpcomingEventsCard };