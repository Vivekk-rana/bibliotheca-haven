import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-6 w-6" />
                <span className="font-display text-lg font-semibold">Literary Society</span>
              </div>
              <p className="font-body text-sm text-background/80 leading-relaxed">
                Fostering a love for literature and creative expression at BIT Sindri.
              </p>
            </div>

            <div>
              <h3 className="font-display text-base font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 font-body text-sm">
                <li>
                  <a href="#about" className="text-background/80 hover:text-background transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#events" className="text-background/80 hover:text-background transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-background/80 hover:text-background transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-semibold mb-4">Connect</h3>
              <p className="font-body text-sm text-background/80 leading-relaxed">
                BIT Sindri, Dhanbad, Jharkhand
              </p>
              <p className="font-body text-sm text-background/80 mt-2">
                literarysociety@bitsindri.ac.in
              </p>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="font-body text-sm text-background/80 flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-warm-accent" fill="currentColor" /> by Literary Society
              <span className="mx-2">•</span>
              © {currentYear} BIT Sindri
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
