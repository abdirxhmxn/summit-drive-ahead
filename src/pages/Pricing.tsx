import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  CreditCard, 
  Banknote,
  Info,
  ArrowRight,
  Shield
} from "lucide-react";

const packageIncludes = [
  "30 hours of classroom instruction",
  "10 hours of behind-the-wheel training",
  "One-on-one driving sessions",
  "DMV test preparation",
  "Certificate of completion",
  "Flexible scheduling",
];

export default function Pricing() {
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
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Simple, Transparent </span>
                <span className="gradient-text">Pricing</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                One complete package — everything you need to become a safe, confident driver.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Pricing Card */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass-strong rounded-2xl p-8 md:p-10 border-2 border-primary/30 relative">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-cyan-glow text-primary-foreground text-sm font-bold">
                  COMPLETE PACKAGE
                </div>

                <div className="text-center mb-8 pt-4">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Driver Education Program
                  </h2>
                  <p className="text-muted-foreground">
                    Teen & Adult Driver Education
                  </p>
                </div>

                <div className="text-center mb-8">
                  <div className="font-display text-6xl font-bold gradient-text mb-2">$650</div>
                  <p className="text-muted-foreground">Full program price</p>
                </div>

                {/* What's Included */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {packageIncludes.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Link to="/#contact">
                    <Button variant="hero" size="xl" className="group">
                      Start Enrollment
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl font-bold mb-4">
                <span className="text-foreground">Payment </span>
                <span className="gradient-text">Options</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Cash Payment */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Banknote className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">Cash Payment</h3>
                    <span className="text-2xl font-bold gradient-text">$650</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Pay with cash, money order, or cashier's check — no additional fees.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    No processing fees
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Money order accepted
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Cashier's check accepted
                  </li>
                </ul>
              </motion.div>

              {/* Online Payment */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">Online Payment</h3>
                    <span className="text-2xl font-bold gradient-text">$650 + fee</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Pay online with credit or debit card. Processing fee applies.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Credit cards accepted
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Debit cards accepted
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Secure checkout
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Payment Plans Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-8"
            >
              <div className="glass rounded-xl p-6 border border-primary/20 flex items-start gap-4">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">Payment Plans Available</h4>
                  <p className="text-muted-foreground text-sm">
                    We offer flexible payment plans to make driver education accessible. 
                    Split your payment into 2-3 installments. Contact us to discuss options.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Maine State-Approved Program
              </h2>
              <p className="text-muted-foreground">
                Summit Driving School is fully licensed and approved by the State of Maine 
                to provide driver education. Our curriculum meets all state requirements 
                for teen and adult driver education.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
