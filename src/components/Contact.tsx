import { useState } from "react";
import { Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

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
          <ScrollReveal>
            <motion.div
              className="bg-card rounded-lg p-8 shadow-sm border border-border"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
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
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full bg-sepia hover:bg-sepia/90 text-background font-body">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-xl font-semibold text-ink mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
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
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <MapPin className="h-5 w-5 text-sepia mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body text-sm font-medium text-ink">Location</p>
                      <p className="font-body text-sm text-muted-foreground">
                        BIT Sindri, Dhanbad, Jharkhand
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-display text-xl font-semibold text-ink mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sepia/10 hover:bg-sepia/20 p-3 rounded-full transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="h-5 w-5 text-sepia" />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sepia/10 hover:bg-sepia/20 p-3 rounded-full transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="h-5 w-5 text-sepia" />
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                className="bg-sepia/5 rounded-lg p-6 border border-sepia/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-display text-lg font-semibold text-ink mb-3">
                  Join Our Community
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Become a member of the Literary Society and be part of a vibrant community
                  that celebrates literature and creativity.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="w-full border-sepia text-sepia hover:bg-sepia/5 font-body">
                    Membership Information
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
