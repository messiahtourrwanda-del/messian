import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
} from "lucide-react";

const destinations = [
  { name: "Rwanda", href: "#rwanda" },
  { name: "Uganda", href: "#uganda" },
  { name: "Kenya", href: "#kenya" },
  { name: "Tanzania", href: "#tanzania" },
  { name: "Burundi", href: "#burundi" },
];

const experiences = [
  { name: "Gorilla Trekking", href: "#gorilla-trekking" },
  { name: "Big Five Safaris", href: "#big-five" },
  { name: "Primate Tracking", href: "#primate-tracking" },
  { name: "Cultural Immersion", href: "#cultural" },
  { name: "Beach Extensions", href: "#beach" },
];

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Tours", href: "#tours" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Travel Blog", href: "#blog" },
  { name: "FAQs", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
];

export default function SafariFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(150,20%,8%)] text-white">
      {/* Newsletter Bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">
                Get Safari Inspiration
              </h3>
              <p className="text-white/60 text-sm">
                Subscribe for exclusive deals, travel tips, and wildlife stories
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-80 px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(45,80%,55%)]/30 focus:border-[hsl(45,80%,55%)]/50"
              />
              <button className="px-6 py-3 bg-[hsl(45,80%,55%)] text-[hsl(150,20%,10%)] rounded-lg hover:bg-[hsl(45,80%,48%)] transition-colors font-semibold text-sm flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[hsl(152,45%,25%)] flex items-center justify-center">
                <span className="text-[hsl(45,80%,55%)] font-bold text-lg">
                  M
                </span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">
                  Messiah Safari
                </div>
                <div className="text-[hsl(45,80%,55%)] text-[10px] uppercase tracking-[0.2em]">
                  & Tours
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              East Africa&apos;s premier safari operator, crafting unforgettable
              wildlife and cultural experiences across Rwanda, Uganda, Kenya,
              Tanzania, and Burundi since 2009.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+250123456789"
                className="flex items-center gap-3 text-white/60 hover:text-[hsl(45,80%,55%)] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +250 123 456 789
              </a>
              <a
                href="mailto:info@messiahsafari.com"
                className="flex items-center gap-3 text-white/60 hover:text-[hsl(45,80%,55%)] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@messiahsafari.com
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                KG 123 St, Kigali, Rwanda
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Destinations
            </h3>
            <ul className="space-y-3">
              {destinations.map((d) => (
                <li key={d.name}>
                  <a
                    href={d.href}
                    className="text-white/60 hover:text-[hsl(45,80%,55%)] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Experiences
            </h3>
            <ul className="space-y-3">
              {experiences.map((e) => (
                <li key={e.name}>
                  <a
                    href={e.href}
                    className="text-white/60 hover:text-[hsl(45,80%,55%)] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {e.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[hsl(45,80%,55%)] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 text-sm">
              © {currentYear} Messiah Safari & Tours. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[hsl(45,80%,55%)] hover:text-[hsl(150,20%,10%)] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[hsl(45,80%,55%)] hover:text-[hsl(150,20%,10%)] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[hsl(45,80%,55%)] hover:text-[hsl(150,20%,10%)] transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[hsl(45,80%,55%)] hover:text-[hsl(150,20%,10%)] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
