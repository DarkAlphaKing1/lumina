import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Home, Trees, ArrowRight, Sparkles, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Planning",
      subtitle: "Formal & Informal Events",
      description: "From intimate dinner parties to grand corporate galas, we create unforgettable experiences that reflect your vision and exceed expectations.",
      features: ["Corporate Events", "Wedding Planning", "Private Parties", "Product Launches"],
      color: "primary",
      delay: 0.2
    },
    {
      icon: Home,
      title: "Interior Design",
      subtitle: "Home & Office Spaces",
      description: "Transform your living and working spaces into sophisticated environments that inspire creativity and comfort through expert design.",
      features: ["Residential Design", "Office Interiors", "Space Planning", "Custom Furniture"],
      color: "accent",
      delay: 0.4
    },
    {
      icon: Trees,
      title: "Landscaping",
      subtitle: "Outdoor & Garden Design",
      description: "Create breathtaking outdoor sanctuaries that seamlessly blend natural beauty with functional design for year-round enjoyment.",
      features: ["Garden Design", "Outdoor Living", "Sustainable Landscapes", "Seasonal Planning"],
      color: "primary-light",
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-warm relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--accent))_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-elegant border border-primary/20 text-sm font-medium mb-6"
          >
            <Star size={16} className="text-accent" />
            <span>Our Expertise</span>
          </motion.div>

          <h2 className="text-headline text-primary mb-6">
            Premium Services for
            <br />
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              Discerning Clients
            </span>
          </h2>
          
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            We specialize in creating extraordinary experiences and spaces that reflect your unique style and vision, 
            combining luxury aesthetics with functional excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-luxury h-full p-8 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-luxury opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-luxury flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={28} className="text-background" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-caption text-accent mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                        <Sparkles size={14} className="text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button variant="luxury-ghost" className="w-full group/btn">
                    Learn More
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-body text-muted-foreground mb-6">
            Ready to bring your vision to life with our expert team?
          </p>
          <Button variant="hero" size="xl" className="group">
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;