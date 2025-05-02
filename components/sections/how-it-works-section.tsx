"use client";

import { useEffect, useState } from "react";
import { 
  MessageCircle, 
  ClipboardList, 
  Clock, 
  Share2 
} from "lucide-react";
import { motion } from "@/components/ui/motion";

const steps = [
  {
    title: "Join the Telegram group",
    description: "Connect with the BSC community on Telegram, where all the magic happens.",
    icon: MessageCircle,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
  },
  {
    title: "Fill the spotlight interest form",
    description: "Submit your business information through our simple form to get in line for the spotlight.",
    icon: ClipboardList,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
  },
  {
    title: "Wait for your turn to be featured",
    description: "We schedule businesses on a first-come, first-served basis. Your spotlight day is coming!",
    icon: Clock, 
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20"
  },
  {
    title: "Engage with featured businesses",
    description: "Build connections by engaging with other businesses when they're in the spotlight.",
    icon: Share2,
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
  }
];

export function HowItWorksSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="how-it-works" className="py-20  flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Get featured in our community with these simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="absolute top-16 left-[50%] w-full h-[2px] bg-border hidden lg:block" />
              )}
              <div className="flex flex-col items-center text-center z-10 relative">
                <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 border ${step.color}`}>
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Step {index + 1}</h3>
                <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}