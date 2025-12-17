import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Car, 
  Shield, 
  Users, 
  Clock, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Teen Driver Education",
    description: "Comprehensive program for new drivers ages 15-17, meeting all Maine state requirements.",
    features: ["30 hours classroom", "10 hours behind-the-wheel", "DMV test preparation"],
    price: "$599",
    popular: true,
  },
  {
    icon: Car,
    title: "Adult Lessons",
    description: "Flexible one-on-one instruction tailored to adult learners of all experience levels.",
    features: ["Flexible scheduling", "Personalized curriculum", "License test included"],
    price: "$85/hr",
    popular: false,
  },
  {
    icon: Shield,
    title: "Defensive Driving",
    description: "Advanced techniques to anticipate hazards and react safely in any situation.",
    features: ["Insurance discount eligible", "Real-world scenarios", "Expert instructors"],
    price: "$149",
    popular: false,
  },
  {
    icon: Users,
    title: "Corporate Training",
    description: "Fleet driver training programs customized for businesses and organizations.",
    features: ["Group discounts", "On-site training available", "Compliance certification"],
    price: "Custom",
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Our Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Driving Programs </span>
            <span className="gradient-text">Designed for You</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're a first-time driver or looking to enhance your skills, 
            we have the perfect program to meet your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`relative group rounded-2xl p-6 card-hover ${
                service.popular 
                  ? "glass-strong border-2 border-primary/50" 
                  : "glass border border-border/50"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-cyan-glow text-primary-foreground text-xs font-bold">
                  MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="mt-auto pt-4 border-t border-border/50">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-display text-2xl font-bold gradient-text">
                    {service.price}
                  </span>
                  {service.price !== "Custom" && (
                    <span className="text-sm text-muted-foreground">starting</span>
                  )}
                </div>
                <Button 
                  variant={service.popular ? "hero" : "outline"} 
                  className="w-full group/btn"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
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
