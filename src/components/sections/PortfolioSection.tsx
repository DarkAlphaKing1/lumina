import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight, Filter } from "lucide-react";
import greyroom from "@/assets/greyroom.jpg";
import grey from "@/assets/grey.jpg";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "events", label: "Events" },
    { id: "interiors", label: "Interiors" },
    { id: "landscapes", label: "Landscapes" }
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Corporate Gala",
      category: "events",
      description: "An elegant evening celebrating excellence with sophisticated design and ambient lighting.",
      image: grey,
      tags: ["Corporate", "Gala", "Luxury"],
      year: "2025"
    },
    {
      id: 2,
      title: "Modern Executive Suite",
      category: "interiors",
      description: "A contemporary living space blending comfort with professional aesthetics.",
      image: greyroom,
      tags: ["Residential", "Modern", "Executive"],
      year: "2025"
    },
    {
      id: 3,
      title: "Rooftop Garden Oasis",
      category: "landscapes",
      description: "Urban sanctuary featuring sustainable design and year-round beauty.",
      image: greyroom,
      tags: ["Rooftop", "Sustainable", "Urban"],
      year: "2025"
    },
    {
      id: 4,
      title: "Intimate Wedding Celebration",
      category: "events",
      description: "A romantic outdoor ceremony with natural elements and golden hour lighting.",
      image: grey,
      tags: ["Wedding", "Outdoor", "Romantic"],
      year: "2025"
    },
    {
      id: 5,
      title: "Contemporary Office Space",
      category: "interiors",
      description: "Collaborative workspace designed for creativity and productivity.",
      image: greyroom,
      tags: ["Office", "Collaborative", "Modern"],
      year: "2025"
    },
    {
      id: 6,
      title: "Private Garden Retreat",
      category: "landscapes",
      description: "Tranquil outdoor space designed for relaxation and entertainment.",
      image: grey,
      tags: ["Private", "Garden", "Relaxation"],
      year: "2025"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
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
            <Eye size={16} className="text-accent" />
            <span>Our Work</span>
          </motion.div>

          <h2 className="text-headline text-primary mb-6">
            Portfolio of
            <br />
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              Exceptional Projects
            </span>
          </h2>
          
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Explore our curated collection of premium designs and events that showcase our commitment 
            to excellence and attention to detail.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "luxury" : "luxury-ghost"}
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              <Filter size={16} />
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-luxury overflow-hidden h-full">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-background/20 backdrop-blur-sm text-background rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif font-semibold text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-body text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <Button variant="luxury-ghost" size="sm" className="w-full group/btn">
                    View Project
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero" size="xl" className="group">
            View Complete Portfolio
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;