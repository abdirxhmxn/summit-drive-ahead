import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Car, 
  Clock, 
  ArrowRight,
  CheckCircle2,
  Users,
  BookOpen,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const packageIncludes = [
  { icon: BookOpen, text: "30 hours of classroom instruction" },
  { icon: Car, text: "10 hours of behind-the-wheel training" },
  { icon: Shield, text: "DMV test preparation" },
  { icon: Users, text: "One-on-one driving sessions" },
  { icon: GraduationCap, text: "Certificate of completion" },
  { icon: Clock, text: "Flexible scheduling options" },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Program
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Complete Driver Education </span>
            <span className="gradient-text">Package</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to become a safe, confident driver — all in one comprehensive program.
          </p>
        </motion.div>

        {/* Main Package Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-strong rounded-2xl p-8 md:p-10 border-2 border-primary/30 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-6 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-cyan-glow text-primary-foreground text-xs font-bold">
              FULL PACKAGE
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Package Info */}
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Teen & Adult Driver Education
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Maine state-approved driver education program for teens (15+) and adults. 
                  Combines classroom theory with real-world driving experience.
                </p>

                {/* What's Included */}
                <ul className="space-y-3 mb-8">
                  {packageIncludes.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Pricing */}
              <div className="glass rounded-xl p-6 border border-border/50 text-center">
                <div className="text-sm text-muted-foreground mb-2">Complete Package</div>
                <div className="font-display text-5xl font-bold gradient-text mb-2">$650</div>
                <div className="text-sm text-muted-foreground mb-6">
                  Cash, money order, or cashier's check
                  <br />
                  <span className="text-xs">(Online payment: $650 + processing fee)</span>
                </div>
                
                <Link to="/pricing">
                  <Button variant="hero" size="lg" className="w-full group mb-4">
                    Enroll Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Payment plans available</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5 text-primary" />
            <span>Flexible scheduling available 7 days a week</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
