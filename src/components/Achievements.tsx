import { Trophy, Star, Users, BookOpen } from "lucide-react";

const Achievements = () => {
  const stats = [
    { icon: Trophy, value: "25+", label: "Events Organized" },
    { icon: Star, value: "10+", label: "Awards Won" },
    { icon: Users, value: "200+", label: "Active Members" },
    { icon: BookOpen, value: "50+", label: "Books Discussed" },
  ];

  const highlights = [
    {
      title: "Best Literary Society Award",
      year: "2023",
      description: "Recognized at the Inter-College Literary Festival for outstanding contributions to literary culture.",
    },
    {
      title: "Successful Annual Fest",
      year: "2023",
      description: "Organized a three-day literary festival with participation from over 500 students across institutions.",
    },
    {
      title: "Published Anthology",
      year: "2022",
      description: "Released our first literary magazine featuring works from talented student writers and poets.",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
            Achievements & Highlights
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Celebrating our journey of literary excellence and the milestones we've achieved together.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 text-center border border-border shadow-sm"
              >
                <Icon className="h-8 w-8 text-sepia mx-auto mb-3" />
                <div className="font-display text-3xl font-bold text-ink mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights */}
        <div className="max-w-4xl mx-auto space-y-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border-l-4 border-sepia shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {highlight.title}
                </h3>
                <span className="font-body text-sm text-sepia font-medium bg-sepia/10 px-3 py-1 rounded-full">
                  {highlight.year}
                </span>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
