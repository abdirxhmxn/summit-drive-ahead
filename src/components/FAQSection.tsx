import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What are the requirements to enroll in the Teen Driver Education program?",
    answer: "Students must be at least 15 years old to begin classroom instruction and 15½ years old to start behind-the-wheel training. You'll need to bring a valid Maine learner's permit and parent/guardian consent form to your first lesson.",
  },
  {
    question: "How long does it take to complete the full driver's education course?",
    answer: "The complete Teen Driver Education program typically takes 4-6 weeks, including 30 hours of classroom instruction and 10 hours of behind-the-wheel training. We offer flexible scheduling to fit your needs.",
  },
  {
    question: "Do you provide vehicles for the driving test?",
    answer: "Yes! We can provide a dual-control vehicle for your DMV road test for an additional fee. This includes a pre-test warm-up session to help you feel confident.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require 24-hour notice for cancellations or rescheduling. Late cancellations may be subject to a fee. We understand emergencies happen and will work with you on a case-by-case basis.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans for our comprehensive programs. You can split the cost into 2-3 installments. Contact us for more details about payment options.",
  },
  {
    question: "Are your instructors certified?",
    answer: "Absolutely. All our instructors are state-certified by the Maine Bureau of Motor Vehicles, have clean driving records, and undergo regular training to stay current with best practices and regulations.",
  },
  {
    question: "What areas do you serve in Maine?",
    answer: "We primarily serve Portland and surrounding areas including South Portland, Scarborough, Westbrook, Gorham, and Falmouth. We can also accommodate students from nearby communities.",
  },
  {
    question: "Do you offer defensive driving courses for insurance discounts?",
    answer: "Yes! Our defensive driving course is approved by most insurance companies for premium discounts. Completing the course can save you up to 10% on your auto insurance.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about getting started with Summit Driving School.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors py-5 [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
