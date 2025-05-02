"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  AlignRight as Spotlight,
  MessageSquare,
  Users,
  BarChart,
  Globe,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { motion } from "@/components/ui/motion";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Visibility",
      description: "Get seen by thousands of potential customers every day",
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      stat: "5,000+ Daily Views",
    },
    {
      title: "Growth",
      description: "Watch your business expand with new connections",
      icon: <Rocket className="h-6 w-6 text-purple-400" />,
      stat: "37% Average Growth",
    },
    {
      title: "Network",
      description: "Connect with like-minded entrepreneurs and businesses",
      icon: <TrendingUp className="h-6 w-6 text-green-400" />,
      stat: "1,200+ Active Members",
    },
  ];
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
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
              <span className="text-xs font-medium">
                Daily Business Spotlight
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Shine the Light on Your Business,
              <span className="text-primary"> Daily.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Join a thriving Telegram community where businesses get seen,
              connections grow, and sales happen naturally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" asChild>
                <Link
                  href="https://selar.com/businessspotlightcommunity"
                  target="_blank"
                >
                  Join the Spotlight Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#how-it-works">How It Works</Link>
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
            <div className="relative w-full max-w-full md:max-w-[400px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-card border border-border rounded-3xl p-6 shadow-xl overflow-hidden">
                <div className="flex items-center gap-2 mb-6">
                  <Rocket size={20} className="text-blue-400" />
                  <h2 className="text-lg font-semibold">Business Benefits</h2>
                </div>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                        index === activeFeature
                          ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/20"
                          : "hover:bg-[#1a1f2c]"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {feature.icon}
                        <h3 className="font-bold">{feature.title}</h3>
                      </div>

                      <p className="text-sm text-gray-400 mb-3">
                        {feature.description}
                      </p>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          index === activeFeature
                            ? "max-h-20 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="bg-[#1a1f2c]/60 p-3 rounded mt-2 border border-gray-700/50">
                          <p className="text-sm font-semibold text-blue-300">
                            {feature.stat}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Link href="#benefits"> Explore All Benefits</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
