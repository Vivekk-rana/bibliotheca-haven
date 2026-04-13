import { User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import TeamCard from "./cards/TeamCard";

const Team = () => {
  const team = [
    {
      name: "Shan Raj Gabriel Tigga",
      batch: 2022,
      role: "President",
      imageUrl: "shan",
    },
    {
      name: "Sunidhi Verma",
      batch: 2022,
      role: "Vice President",
      imageUrl: "sunidhi",
    },
    {
      name: "Swapnal Swami",
      batch: 2022,
      role: "Vice President",
      imageUrl: "swapnal",
    },
    {
      name: "Shivam Pandey",
      batch: 2022,
      role: "Secretary",
      imageUrl: "shivam",
    },
    {
      name: "Vivek Anand",
      batch: 2022,
      role: "Joint Secretary",
      imageUrl: "vivek",
    },
    {
      name: "Ravi Shankar Prasad",
      batch: 2022,
      role: "Treasurer",
      imageUrl: "ravi",
    },
    {
      name: "Aman Kumar Rajak",
      batch: 2022,
      role: "Joint Treasurer",
      imageUrl: "aman",
    },
    {
      name: "Vikash Kumar Singh",
      batch: 2022,
      role: "Technical Head",
      imageUrl: "vikas",
    },
    {
      name: "Nisha Kumari",
      batch: 2022,
      role: "Editor-in-Chief",
      imageUrl: "nisha",
    },
    {
      name: "Dona Bhattacharjee",
      batch: 2022,
      role: "Alumni In-Charge",
      imageUrl: "dona",
    },
    {
      name: "Anand Shreshtha",
      batch: 2022,
      role: "Media & Sponsorship Head",
      imageUrl: "anand",
    },
    {
      name: "Sahil Singh",
      batch: 2022,
      role: "Public Relations Officer",
      imageUrl: "sahil",
    },
    {
      name: "Monika Kumari",
      batch: 2022,
      role: "Public Relations Officer",
      imageUrl: "monika",
    },
  ];

  return (
    <section id="team" className="py-24 bg-parchment">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
            Our Team
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Meet the passionate individuals who guide our journey and
            bring our vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
