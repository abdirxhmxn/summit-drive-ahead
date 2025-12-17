import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const stats = [
  { icon: Shield, value: "15K+", label: "Graduates" },
  { icon: Clock, value: "25+", label: "Years Experience" },
  { icon: Award, value: "98%", label: "Pass Rate" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep Navy Base Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,60%,10%)] via-background to-background" />
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
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
      
      {/* Cyan Accent Glow - Bottom Right */}
      <motion.div
        animate={{ 
          x: [-30, 30, -30],
          y: [0, -30, 0],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-[hsl(180,100%,45%)] blur-[120px]"
      />
      
      {/* Small Bright Accent - Top Right */}
      <motion.div
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[15%] right-[25%] w-[250px] h-[250px] rounded-full bg-primary blur-[80px]"
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
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Portland, Maine's Premier Driving School
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Master the Road with </span>
            <span className="gradient-text text-glow">
              Confidence
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Experience next-generation driver education with certified instructors, 
            cutting-edge curriculum, and a proven track record of success. 
            Your journey to safe, confident driving starts here.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              View Our Programs
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="glass rounded-2xl p-6 border border-border/50 card-hover"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
