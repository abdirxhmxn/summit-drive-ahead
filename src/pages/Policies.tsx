import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Policies() {
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
                <span className="text-foreground">School </span>
                <span className="gradient-text">Policies</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Please review our policies before enrolling. We're committed to providing 
                a fair and transparent experience for all students.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Policies Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Attendance Policy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-8 border border-border/50"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Attendance Policy
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Regular attendance is required to complete the driver education program successfully.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Students must attend all 30 hours of classroom instruction</li>
                    <li>All 10 hours of behind-the-wheel training must be completed</li>
                    <li>Missed classroom sessions must be made up before certification</li>
                    <li>Students arriving more than 15 minutes late may not be admitted to class</li>
                    <li>Excessive absences may result in removal from the program without refund</li>
                  </ul>
                </div>
              </motion.div>

              {/* Cancellation & Rescheduling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-8 border border-border/50"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Cancellation & Rescheduling
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We understand that schedules change. Please review our cancellation policy:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>24-hour notice required</strong> for all cancellations or reschedules</li>
                    <li>Cancellations with less than 24 hours notice may incur a $25 fee</li>
                    <li>No-shows for driving lessons may incur a $50 fee</li>
                    <li>Emergency situations will be handled on a case-by-case basis</li>
                    <li>Weather-related cancellations by the school will be rescheduled at no charge</li>
                  </ul>
                </div>
              </motion.div>

              {/* Refund Policy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-8 border border-border/50"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Refund Policy
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Refund eligibility depends on when you withdraw from the program:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Before program starts:</strong> Full refund minus $50 administrative fee</li>
                    <li><strong>Within first week:</strong> 75% refund of tuition</li>
                    <li><strong>After first week:</strong> Prorated refund based on services rendered</li>
                    <li><strong>After 50% completion:</strong> No refund available</li>
                    <li>All refund requests must be submitted in writing</li>
                    <li>Refunds are processed within 14 business days</li>
                  </ul>
                </div>
              </motion.div>

              {/* Student Conduct */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-8 border border-border/50"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Student Conduct
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    All students are expected to maintain professional conduct:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>No use of alcohol or drugs before or during lessons</li>
                    <li>Cell phones must be silenced during classroom instruction</li>
                    <li>Respectful behavior toward instructors and fellow students</li>
                    <li>Appropriate attire required (closed-toe shoes for driving lessons)</li>
                    <li>Students must bring valid learner's permit to all driving lessons</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    Violation of conduct policies may result in dismissal from the program without refund.
                  </p>
                </div>
              </motion.div>

              {/* Privacy & Records */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-strong rounded-2xl p-8 border border-border/50"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Privacy & Records
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We take your privacy seriously:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Student records are kept confidential and secure</li>
                    <li>Records are maintained as required by Maine state law</li>
                    <li>We do not sell or share personal information with third parties</li>
                    <li>Students/parents may request copies of their records</li>
                  </ul>
                  <p className="mt-4">
                    For complete privacy information, please see our{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>.
                  </p>
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
