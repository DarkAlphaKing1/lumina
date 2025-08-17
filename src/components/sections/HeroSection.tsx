import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Calendar, Home } from "lucide-react";
import LuxuryScene from "@/components/3d/LuxuryScene";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <LuxuryScene />
      </div>

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-elegant border border-primary/20 text-sm font-medium"
            >
              <Sparkles size={16} className="text-accent" />
              <span>Premium Design & Event Services</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-display text-primary leading-none"
            >
              Transform Your
              <br />
              <span className="bg-gradient-luxury bg-clip-text text-transparent">
                Vision Into Reality
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-body-large text-muted-foreground max-w-2xl leading-relaxed"
            >
              Experience luxury interior design and premium event planning that reflects your unique style. 
              From intimate gatherings to corporate events, from cozy homes to sophisticated offices.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button variant="hero" size="xl" className="group">
                <Calendar size={20} />
                Plan Your Event
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="elegant" size="xl" className="group">
                <Home size={20} />
                Design Your Space
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/20"
            >
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute top-1/4 right-10 z-10 w-32 h-32 bg-gradient-luxury rounded-full blur-3xl opacity-20"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-1/4 left-10 z-10 w-24 h-24 bg-accent/30 rounded-full blur-2xl opacity-30"
      />
    </section>
  );
};

export default HeroSection;