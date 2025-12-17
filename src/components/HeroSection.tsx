import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Maine State-Approved",
  "Certified Instructors", 
  "98% Pass Rate",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Large Cyan Glow - Top Left */}
      <motion.div
        animate={{ 
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-[hsl(195,100%,50%)] blur-[180px]"
      />
      
      {/* Electric Blue Glow - Center Right */}
      <motion.div
        animate={{ 
          y: [0, 60, 0],
          x: [0, -40, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full bg-[hsl(210,100%,45%)] blur-[150px]"
      />
      
      {/* Deep Blue Glow - Bottom Center */}
      <motion.div
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[5%] left-[30%] w-[700px] h-[500px] rounded-full bg-[hsl(220,80%,35%)] blur-[160px]"
      />

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Maine State-Approved Driver Education
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Your Path to </span>
            <span className="gradient-text text-glow">
              Safe Driving
            </span>
            <span className="text-foreground"> Starts Here</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Complete driver education for teens and adults in Maine. 
            Classroom instruction plus behind-the-wheel training — everything you need to become a confident, safe driver.
          </motion.p>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link to="/pricing">
              <Button variant="hero" size="xl" className="group">
                Enroll Now — $650
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/program">
              <Button variant="outline" size="xl">
                View Program Details
              </Button>
            </Link>
          </motion.div>

          {/* Simple Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="glass rounded-xl p-5 border border-border/50">
              <div className="font-display text-2xl font-bold gradient-text mb-1">30 hrs</div>
              <div className="text-sm text-muted-foreground">Classroom</div>
            </div>
            <div className="glass rounded-xl p-5 border border-border/50">
              <div className="font-display text-2xl font-bold gradient-text mb-1">10 hrs</div>
              <div className="text-sm text-muted-foreground">Behind-the-Wheel</div>
            </div>
            <div className="glass rounded-xl p-5 border border-border/50">
              <div className="font-display text-2xl font-bold gradient-text mb-1">$650</div>
              <div className="text-sm text-muted-foreground">Full Package</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
