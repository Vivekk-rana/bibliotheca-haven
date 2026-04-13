import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";
import { User } from "lucide-react";

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    imageUrl?: string;
  };
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  return (
    <ScrollReveal key={index} delay={index * 0.1}>
      <motion.div
        className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-border"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {member.imageUrl ? (
              <img
                className="w-full h-full object-cover object-top"
                src={`team/2022/${member.imageUrl}.jpeg`}
                alt={member.name}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-16 h-16 text-muted-foreground" />
              </div>
            )}
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-sepia/10 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="font-display text-xl font-semibold text-ink mb-2">
            {member.name}
          </h3>

          <p className="font-body text-lg text-sepia font-medium">
            {member.role}
          </p>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

export default TeamCard;