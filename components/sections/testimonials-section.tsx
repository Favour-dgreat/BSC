"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "@/components/ui/motion";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    quote: "BSC gave my small business the exposure I didn't know I needed! I've connected with several new clients directly through the spotlight feature.",
    author: "Ada",
    role: "Founder of AfroGlow Skincare",
    avatar: "A",
    delay: 0.1,
  },
  {
    quote: "Being spotlighted in the community led to three new consulting contracts in just one week. The ROI has been incredible.",
    author: "Michael",
    role: "CEO, TechNest Consulting",
    avatar: "M",
    delay: 0.2,
  },
  {
    quote: "As a new entrepreneur, finding customers was my biggest challenge. The BSC community not only provided visibility but also mentorship.",
    author: "Sarah",
    role: "Founder, Eco Fashion Outlet",
    avatar: "S",
    delay: 0.3,
  },
];

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="testimonials" className="py-20  flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Hear from businesses that have grown through our spotlight community
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
            >
              <Card className="h-full border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 pt-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{`"${testimonial.quote}"`}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3 border border-border">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}