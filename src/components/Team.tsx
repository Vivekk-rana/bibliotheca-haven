import { User } from "lucide-react";

const Team = () => {
  const team = [
    { name: "Arjun Sharma", role: "President", image: null },
    { name: "Priya Gupta", role: "Vice President", image: null },
    { name: "Rahul Singh", role: "Secretary", image: null },
    { name: "Anjali Verma", role: "Creative Head", image: null },
    { name: "Vikram Kumar", role: "Event Coordinator", image: null },
    { name: "Sneha Patel", role: "Social Media Manager", image: null },
  ];

  return (
    <section id="team" className="py-24 bg-parchment">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
            Our Team
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Meet the passionate individuals who guide our literary journey and bring our
            vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-border"
            >
              <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                <User className="h-20 w-20 text-muted-foreground/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-sepia/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">
                  {member.name}
                </h3>
                <p className="font-body text-sm text-sepia font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
