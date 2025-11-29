import { useState } from "react";
import { Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-parchment">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
            Contact Us
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Have questions or want to join our literary community? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-body text-sm font-medium text-ink mb-2 block">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-body"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-body text-sm font-medium text-ink mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-body"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-body text-sm font-medium text-ink mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="font-body resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-sepia hover:bg-sepia/90 text-background font-body">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-sepia mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-ink">Email</p>
                    <a
                      href="mailto:literarysociety@bitsindri.ac.in"
                      className="font-body text-sm text-muted-foreground hover:text-sepia transition-colors"
                    >
                      literarysociety@bitsindri.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-sepia mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-ink">Location</p>
                    <p className="font-body text-sm text-muted-foreground">
                      BIT Sindri, Dhanbad, Jharkhand
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sepia/10 hover:bg-sepia/20 p-3 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5 text-sepia" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sepia/10 hover:bg-sepia/20 p-3 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5 text-sepia" />
                </a>
              </div>
            </div>

            <div className="bg-sepia/5 rounded-lg p-6 border border-sepia/20">
              <h4 className="font-display text-lg font-semibold text-ink mb-3">
                Join Our Community
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                Become a member of the Literary Society and be part of a vibrant community
                that celebrates literature and creativity.
              </p>
              <Button variant="outline" className="w-full border-sepia text-sepia hover:bg-sepia/5 font-body">
                Membership Information
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
