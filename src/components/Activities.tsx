import { BookOpen, MessageCircle, Mic, PenTool, BookMarked, Award } from "lucide-react";

const Activities = () => {
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
    <section id="activities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
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
              <div
                key={index}
                className="group bg-card rounded-lg p-6 border border-border hover:border-sepia/30 transition-all hover:shadow-md"
              >
                <Icon className="h-8 w-8 text-sepia mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg font-semibold text-ink mb-3">
                  {activity.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
