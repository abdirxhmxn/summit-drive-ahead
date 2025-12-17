import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
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
                <span className="text-foreground">Privacy </span>
                <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: December 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-strong rounded-2xl p-8 md:p-10 border border-border/50"
              >
                <div className="prose prose-invert max-w-none">
                  <div className="space-y-8 text-muted-foreground">
                    <section>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3">
                        Information We Collect
                      </h2>
                      <p className="mb-3">
                        We collect information you provide directly to us, including:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Name and contact information (email, phone, address)</li>
                        <li>Date of birth and identification documents</li>
                        <li>Learner's permit information</li>
                        <li>Parent/guardian information for minor students</li>
                        <li>Payment information</li>
                        <li>Communication preferences</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3">
                        How We Use Your Information
                      </h2>
                      <p className="mb-3">
                        We use the information we collect to:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Provide driver education services</li>
                        <li>Process payments and maintain records</li>
                        <li>Send appointment reminders and schedule updates</li>
                        <li>Communicate about your enrollment and progress</li>
                        <li>Comply with Maine state requirements for driver education</li>
                        <li>Improve our services</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3">
                        Information Sharing
                      </h2>
                      <p className="mb-3">
                        We do not sell your personal information. We may share information with:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Maine Bureau of Motor Vehicles (as required by law)</li>
                        <li>Payment processors for transaction processing</li>
                        <li>Service providers who assist our operations</li>
                        <li>Legal authorities when required by law</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3">
                        SMS/Text Messages
                      </h2>
                      <p>
                        If you consent to receive SMS messages, we may send you appointment 
                        reminders, schedule changes, and important updates. Message and data 
                        rates may apply. You can opt out at any time by replying STOP to any 
                        message or by contacting us directly.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3">
                        Data Security
                      </h2>
                      <p>
                        We implement appropriate security measures to protect your personal 
                        information. However, no method of transmission over the Internet is 
                        100% secure, and we cannot guarantee absolute security.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3">
                        Data Retention
                      </h2>
                      <p>
                        We retain student records as required by Maine state law and for our 
                        legitimate business purposes. You may request access to or deletion of 
                        your personal information by contacting us.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3">
                        Children's Privacy
                      </h2>
                      <p>
                        Our services are available to students ages 15 and older. For students 
                        under 18, we require parent/guardian consent and may collect limited 
                        information about the parent/guardian as well.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3">
                        Accessibility
                      </h2>
                      <p>
                        We are committed to making our website accessible to all users. If you 
                        experience any accessibility issues or need assistance, please contact us 
                        and we will work to accommodate your needs.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3">
                        Changes to This Policy
                      </h2>
                      <p>
                        We may update this privacy policy from time to time. We will notify you 
                        of any changes by posting the new policy on this page with an updated 
                        revision date.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3">
                        Contact Us
                      </h2>
                      <p>
                        If you have questions about this privacy policy or our practices, 
                        please contact us through our website contact form or during business hours.
                      </p>
                    </section>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
