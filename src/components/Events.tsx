import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Literary Fest 2024",
      date: "March 15-17, 2024",
      time: "10:00 AM onwards",
      location: "Main Auditorium, BIT Sindri",
      description: "A three-day celebration of literature featuring guest speakers, competitions, and cultural performances.",
      type: "upcoming",
    },
    {
      title: "Poetry Open Mic Night",
      date: "February 28, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Literary Society Hall",
      description: "Express yourself through poetry and spoken word in an intimate evening gathering.",
      type: "upcoming",
    },
  ];

  const pastEvents = [
    {
      title: "World Book Day Celebration",
      date: "April 23, 2023",
      description: "Book exchange, author discussions, and literary quizzes celebrating the joy of reading.",
      type: "past",
    },
    {
      title: "Creative Writing Workshop",
      date: "September 15, 2023",
      description: "Interactive workshop with renowned author exploring techniques of storytelling and character development.",
      type: "past",
    },
  ];

  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
            Events
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Join us in our journey through literature with engaging events, workshops, and celebrations.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="font-display text-2xl font-semibold text-ink mb-8 text-center">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
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
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-display text-2xl font-semibold text-ink mb-8 text-center">
            Past Events
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
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
                    <span className="font-body text-sm text-muted-foreground">{event.date}</span>
                  </motion.div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
