import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Phone, Mail, ArrowRight, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-elegant relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-luxury rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-elegant border border-primary/20 text-sm font-medium mb-6"
              >
                <Calendar size={16} className="text-accent" />
                <span>Get In Touch</span>
              </motion.div>

              <h2 className="text-headline text-primary mb-6">
                Let's Create Something
                <br />
                <span className="bg-gradient-luxury bg-clip-text text-transparent">
                  Extraordinary Together
                </span>
              </h2>
              
              <p className="text-body-large text-muted-foreground mb-8">
                Ready to transform your space or plan an unforgettable event? 
                Our team of experts is here to bring your vision to life with 
                personalized service and attention to detail.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-primary/10 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-luxury flex items-center justify-center">
                  <Phone size={20} className="text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Phone</h4>
                  <p className="text-muted-foreground">+254 746998526</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-primary/10 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-luxury flex items-center justify-center">
                  <Mail size={20} className="text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Email</h4>
                  <p className="text-muted-foreground">hello@ART_MOSPHERIC.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-primary/10 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-luxury flex items-center justify-center">
                  <MapPin size={20} className="text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Studio</h4>
                  <p className="text-muted-foreground">62000, Nairobi, Kenya</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-primary/10 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-luxury flex items-center justify-center">
                  <Clock size={20} className="text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Hours</h4>
                  <p className="text-muted-foreground">Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-luxury p-8"
          >
            <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
              Start Your Project
            </h3>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" className="glass-effect" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="glass-effect" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="john@example.com" className="glass-effect" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="+1 (555) 123-4567" className="glass-effect" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Interest
                </label>
                <Select>
                  <SelectTrigger className="glass-effect">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="event-planning">Event Planning</SelectItem>
                    <SelectItem value="interior-design">Interior Design</SelectItem>
                    <SelectItem value="landscaping">Landscaping</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your vision, timeline, and any specific requirements..."
                  className="glass-effect min-h-32"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                Send Message
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              We'll respond within 24 hours to discuss your project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;