import Link from "next/link";
import { AlignRight as Spotlight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full flex items-center justify-center border-border bg-card/50">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid justify-items-center align-content-between gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-2">
              {/* <Spotlight className="h-6 w-6 text-primary" /> */}
              <span className="font-bold text-xl">BSC</span>
            </Link>
            <p className="text-muted-foreground">
              Business Spotlight Community: Helping businesses gain visibility,
              engagement, and growth through daily features.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-center w-full md:w-auto">
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Benefits
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-center  w-full md:w-auto">
            <h3 className="font-medium text-lg mb-4 w-full text-left">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#join"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Join Now
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <a
                  href="mailto:businessspotlightcommunity@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  businessspotlightcommunity@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Business Spotlight Community. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
