import { BookHeart, Users, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookHeart,
      title: "Our Vision",
      description:
        "To cultivate a vibrant community of literary enthusiasts who celebrate the written word and foster intellectual discourse.",
    },
    {
      icon: Users,
      title: "Our Mission",
      description:
        "Creating an inclusive space where students explore literature, enhance creativity, and develop critical thinking through engaging activities.",
    },
    {
      icon: Sparkles,
      title: "Our Purpose",
      description:
        "Promoting literary excellence, cultural enrichment, and creative expression through diverse events, discussions, and collaborative initiatives.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-parchment">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
            About Us
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            The Literary Society at BIT Sindri is more than just a club—it's a haven for
            those who find solace in stories, power in poetry, and joy in the written word.
            We bring together passionate minds to celebrate literature in all its forms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="bg-sepia/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-sepia" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink mb-4">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
