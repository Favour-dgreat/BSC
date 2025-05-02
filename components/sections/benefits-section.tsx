"use client";

import { useEffect, useState } from "react";
import { AlignRight as Spotlight, Users, Gift, CalendarClock, BadgeCheck } from "lucide-react";
import { motion } from "@/components/ui/motion";

const benefits = [
  {
    icon: Spotlight,
    title: "Daily spotlight opportunities",
    description: "Get your business featured to our entire community regularly, increasing your brand visibility.",
    delay: 0.1,
  },
  {
    icon: Users,
    title: "Increased visibility and engagement",
    description: "Connect with potential customers who are actively looking for the products and services you offer.",
    delay: 0.2,
  },
  {
    icon: Gift,
    title: "Access to a supportive community",
    description: "Join a network of entrepreneurs who understand your journey and can provide valuable insights.",
    delay: 0.3,
  },
  {
    icon: CalendarClock,
    title: "Free promo slots",
    description: "Enjoy complimentary promotion opportunities as an active community member.",
    delay: 0.4,
  },
  {
    icon: BadgeCheck,
    title: "Priority for future collaborations",
    description: "Get early access and special consideration for upcoming events and partnership opportunities.",
    delay: 0.5,
  }
];

export function BenefitsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="benefits" className="py-20 bg-muted/30  flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Member Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Being part of the Business Spotlight Community comes with these valuable advantages
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}