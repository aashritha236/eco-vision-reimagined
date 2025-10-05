import { Leaf, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer id="about" className="bg-accent text-accent-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">EcoVision</h3>
            </div>
            <p className="text-accent-foreground/80 leading-relaxed">
              Leading the sustainable construction revolution with innovative
              carbon management solutions for a greener tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Projects", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-accent-foreground/80 hover:text-primary transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>Green Building Design</li>
              <li>Carbon Management</li>
              <li>Material Recycling</li>
              <li>Renewable Energy</li>
              <li>Eco-Certifications</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-accent-foreground/80 mb-4">
              Subscribe to our newsletter for sustainability insights
            </p>
            <div className="flex gap-4 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-accent-foreground/10 border border-accent-foreground/20 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg transition-colors font-semibold">
                Join
              </button>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-foreground/20 text-center text-accent-foreground/60">
          <p>
            © {new Date().getFullYear()} EcoVision. All rights reserved. |
            Building a sustainable future, one project at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
