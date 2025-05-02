"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AlignRight as Spotlight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full flex items-center  justify-center z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center px-4 justify-between">
        <Link href="#home" className="flex items-center gap-2">
          {/* <Spotlight className="h-8 w-8 text-primary" /> */}
          <span className="font-bold text-2xl tracking-tight">BSC</span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center  space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="ml-4">
            <Link href="https://selar.com/businessspotlightcommunity" target="_blank">
              Join Now
            </Link>
          </Button>
        </nav>
        
        {/* Mobile navigation */}
        <Sheet open={isNavOpen} onOpenChange={() => setIsNavOpen(!isNavOpen)}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsNavOpen(false)}
                  className="px-4 py-2 text-lg font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="https://selar.com/businessspotlightcommunity" target="_blank">
                  Join Now
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}