import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo ( { top: 0, behavior: 'smooth' });
  };

  return ( 
    <footer className="bg-charcoal text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--accent))_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--primary-light))_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-serif font-bold text-accent mb-4">
                ART_MOSPHERIC
              </h3>
              <p className="text-body text-background/80 leading-relaxed max-w-md">
                Transforming spaces and creating unforgettable events with amazing design, 
                attention to detail, and personalized service that exceeds expectations.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <span className="text-background/80">+254 746998526</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <span className="text-background/80">hello@ART_MOSPHERIC.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <span className="text-background/80">67000 Nirobi, Kenya</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-serif font-semibold text-accent mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Event Planning",
                "Interior Design", 
                "Landscaping",
                "Design Consultation",
                "Project Management",
                "Custom Furniture"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))
            }
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-serif font-semibold text-accent mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 border-t border-background/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-serif font-semibold text-accent mb-2">
                Stay Inspired
              </h4>
              <p className="text-background/80">
                Get the latest design trends and project updates delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-accent"
              />
              <Button variant="luxury" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20 flex flex-col lg:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <p className="text-background/60 text-sm">
              © 2025 ART_MOSPHERIC. All rights reserved.
            </p>
            <div className="hidden lg:flex items-center gap-4 text-sm">
              <a href="/privacy" className="text-background/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-background/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>

          {/* Social Links & Back to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-3">
              { [
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Linkedin, href: "https://linkedin.com" }
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/10 border border-background/20 flex items-center justify-center text-background/80 hover:text-accent hover:border-accent transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-gradient-luxury flex items-center justify-center text-background hover:scale-105 transition-transform duration-300"
            >
              <ArrowUp size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;