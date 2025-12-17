import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MapPin, 
  Award, 
  Users, 
  Target,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "State Certified",
    description: "Fully licensed and approved by the Maine Bureau of Motor Vehicles.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Certified professionals with decades of teaching experience.",
  },
  {
    icon: Target,
    title: "Proven Results",
    description: "98% first-time pass rate, the highest in the Portland area.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Training on Portland roads, from downtown to coastal routes.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              About Summit
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Driving Excellence </span>
              <span className="gradient-text">Since 1999</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              For over 25 years, Summit Driving School has been Portland's trusted choice 
              for driver education. We combine time-tested teaching methods with modern 
              technology to create confident, safe drivers.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art facility, fleet of dual-control vehicles, and 
              comprehensive curriculum ensure every student receives the highest 
              quality instruction. We're not just teaching you to pass a test—we're 
              building lifelong driving skills.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "25+", label: "Years" },
                { value: "15K+", label: "Students" },
                { value: "98%", label: "Pass Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/30"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass rounded-2xl p-6 border border-border/50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
