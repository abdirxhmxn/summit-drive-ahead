import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Car, 
  CheckCircle2, 
  Clock, 
  GraduationCap, 
  Shield,
  Users,
  ArrowRight,
  Calendar
} from "lucide-react";

const classroomTopics = [
  "Maine traffic laws and regulations",
  "Road signs and signals",
  "Safe driving practices",
  "Hazard recognition",
  "Defensive driving techniques",
  "Impaired driving awareness",
  "Vehicle maintenance basics",
  "Emergency procedures",
];

const behindTheWheelSkills = [
  "Basic vehicle control",
  "Parking techniques (parallel, perpendicular, angle)",
  "Highway driving",
  "Night driving",
  "Adverse weather conditions",
  "Traffic navigation",
  "DMV test route practice",
  "Emergency maneuvers",
];

export default function Program() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,60%,10%)] via-background to-background" />
          <div className="absolute inset-0 grid-pattern opacity-10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  Maine State-Approved
                </span>
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Driver Education </span>
                <span className="gradient-text">Program</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive program combines classroom instruction with hands-on driving experience 
                to prepare you for safe, confident driving.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Classroom Component */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-8 border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Classroom Instruction
                </h2>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">30 Hours</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Learn the rules of the road, traffic laws, and essential driving theory in our 
                  engaging classroom sessions.
                </p>
                <ul className="space-y-3">
                  {classroomTopics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Behind-the-Wheel Component */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-8 border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Car className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Behind-the-Wheel Training
                </h2>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">10 Hours</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Get real-world driving experience with one-on-one instruction from our 
                  certified professionals.
                </p>
                <ul className="space-y-3">
                  {behindTheWheelSkills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who Can Enroll */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Who Can </span>
                <span className="gradient-text">Enroll?</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-xl font-bold text-foreground">Teen Students</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Ages 15-17
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Must have learner's permit
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Parent/guardian consent required
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass rounded-xl p-6 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-xl font-bold text-foreground">Adult Students</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Ages 18+
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Valid ID required
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Flexible scheduling available
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Schedule Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-primary/20 text-center"
            >
              <Calendar className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Ready to Start?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                New classes start regularly. Enroll today and take the first step toward 
                becoming a safe, confident driver.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/pricing">
                  <Button variant="hero" size="xl" className="group">
                    View Pricing & Enroll
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/#contact">
                  <Button variant="outline" size="xl">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
