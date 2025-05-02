"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignRight as Spotlight, MessageSquare, Users, BarChart } from "lucide-react";
import { motion } from "@/components/ui/motion";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-muted/30 w-fit mb-2">
              <Spotlight className="h-4 w-4 mr-2 text-primary" />
              <span className="text-xs font-medium">Daily Business Spotlight</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Shine the Light on Your Business, 
              <span className="text-primary"> Daily.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Join a thriving Telegram community where businesses get seen, connections grow, and sales happen naturally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" asChild>
                <Link href="https://selar.com/businessspotlightcommunity" target="_blank">
                  Join the Spotlight Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#how-it-works">
                  How It Works
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center p-3 rounded-lg bg-muted/30 border border-border">
                <MessageSquare className="h-6 w-6 mb-2 text-primary" />
                <span className="text-sm font-medium">Daily Exposure</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-muted/30 border border-border">
                <Users className="h-6 w-6 mb-2 text-primary" />
                <span className="text-sm font-medium">New Connections</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-muted/30 border border-border">
                <BarChart className="h-6 w-6 mb-2 text-primary" />
                <span className="text-sm font-medium">Growing Sales</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-card border border-border rounded-3xl p-6 shadow-xl overflow-hidden">
                <div className="flex items-center mb-4 ">
                  <Spotlight className="h-6 w-6 mr-2 text-primary" />
                  <h3 className="font-semibold">Business Spotlight Community</h3>
                </div>
                <div className="space-y-4 min-h-[350px]">
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <h4 className="font-medium mb-1">Today&apos;s Spotlight</h4>
                    <p className="text-sm text-muted-foreground">AfroGlow Skincare - Natural products for radiant skin</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <h4 className="font-medium mb-1">Tomorrow&apos;s Spotlight</h4>
                    <p className="text-sm text-muted-foreground">TechNest Consulting - Business IT solutions</p>
                  </div>
                  
                </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>237 members</span>
                    <span>Daily updates</span>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}