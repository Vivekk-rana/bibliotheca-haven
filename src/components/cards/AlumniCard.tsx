import { motion } from "framer-motion";
import { Linkedin, Mail, User } from "lucide-react";
import type { Alumni } from "@/data/alumni";

interface AlumniCardProps {
  member: Alumni;
}

const AlumniCard = ({ member }: AlumniCardProps) => {
  return (
    <motion.div
      className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-border flex flex-col"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="h-[260px] w-full bg-muted overflow-hidden relative">
        {member.image ? (
          <motion.img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover object-top"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-16 h-16 text-muted-foreground" />
          </div>
        )}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-sepia/10 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-6 text-center flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold text-ink mb-1">
          {member.name}
        </h3>
        <p className="font-body text-sm text-sepia font-medium mb-4">
          {member.societyPosition}
        </p>

        <div className="mb-4">
          <p className="font-body text-ink font-medium">{member.company}</p>
          <p className="font-body text-sm text-muted-foreground">
            {member.designation}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-auto pt-2">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="text-sepia hover:text-warm-accent transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${member.email}`}
            aria-label={`Email ${member.name}`}
            className="text-sepia hover:text-warm-accent transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AlumniCard;
