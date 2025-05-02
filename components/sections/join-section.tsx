"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";

export function JoinSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="join" className="py-24  flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 backdrop-blur-sm"></div>
          <div className="relative p-8 md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ready to grow your business visibility daily?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Join the community of thriving entrepreneurs who are getting featured, making connections, and growing their businesses together.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="https://selar.com/businessspotlightcommunity" target="_blank">
                    Join the Spotlight Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
              
              <p className="mt-6 text-sm text-muted-foreground">
                Limited spots available. Join today to secure your spotlight.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}