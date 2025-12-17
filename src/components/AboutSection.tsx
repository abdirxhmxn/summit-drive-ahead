import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Award, 
  Users, 
  Target,
  Shield,
  Clock,
  ThumbsUp,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const highlights = [
  "State-certified instructors with decades of experience",
  "98% first-time pass rate - highest in Portland",
  "Modern dual-control vehicles with top safety ratings",
  "Flexible scheduling 7 days a week",
  "Personalized attention for every student",
  "Training on real Portland roads and conditions",
];

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Users, value: "15K+", label: "Graduates" },
  { icon: Target, value: "98%", label: "Pass Rate" },
  { icon: Shield, value: "A+", label: "Safety Rating" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Box */}
          <div className="glass-strong rounded-3xl border border-primary/20 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 md:p-12 border-b border-border/30">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="text-primary font-medium">About Summit</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text text-glow">Driving Excellence</span>
                <span className="text-foreground"> Since 1999</span>
              </h2>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
                For over 25 years, Summit Driving School has been Portland, Maine's most trusted 
                driver education provider. We combine proven teaching methods with modern technology 
                to build confident, safe drivers for life.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border/30">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`p-6 md:p-8 text-center ${
                    index < stats.length - 1 ? "border-r border-border/30" : ""
                  } ${index < 2 ? "border-b md:border-b-0 border-border/30" : ""}`}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us Content */}
            <div className="p-8 md:p-12">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <ThumbsUp className="w-6 h-6 text-primary" />
                Why Choose Summit?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-10 pt-8 border-t border-border/30 text-center"
              >
                <p className="text-muted-foreground text-lg">
                  <span className="text-primary font-semibold">Our mission:</span> We're not just teaching you to pass a test—we're building 
                  <span className="text-foreground font-medium"> lifelong driving skills</span> that keep you and others safe on the road.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
