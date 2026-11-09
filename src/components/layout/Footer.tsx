"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0B0C] text-[#F9F8F6] border-t border-white/10 pt-20 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase font-normal text-[#F9F8F6]">
                FUETELLE
              </span>
              <span className="block text-[9px] tracking-[0.35em] uppercase text-[#C5A880] mt-0.5">
                Atelier &bull; Couture
              </span>
            </Link>

            <p className="text-xs text-[#F9F8F6]/60 leading-relaxed max-w-sm mb-6">
              The luxury platform connecting visionaries with world-class fashion
              designers and master tailors. Bringing custom garments from
              inspiration to precision reality.
            </p>

            {/* Social Icons (Accessible SVGs) */}
            <div className="flex items-center space-x-4 text-[#F9F8F6]/70">
              <a
                href="#social-instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-none border border-white/15 flex items-center justify-center hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#social-twitter"
                aria-label="X (formerly Twitter)"
                className="w-8 h-8 rounded-none border border-white/15 flex items-center justify-center hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#social-linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-none border border-white/15 flex items-center justify-center hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C5A880] mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#F9F8F6]/70 hover:text-[#F9F8F6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Professionals Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C5A880] mb-5">
              Professionals
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.professionals.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#F9F8F6]/70 hover:text-[#F9F8F6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C5A880] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#F9F8F6]/70 hover:text-[#F9F8F6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C5A880] mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#F9F8F6]/70 hover:text-[#F9F8F6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F9F8F6]/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} FUETELLE Atelier. All rights
            reserved.
          </p>

          <div className="flex items-center space-x-6">
            <span className="text-[11px] text-[#C5A880]">
              Handcrafted bespoke luxury
            </span>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-xs text-[#F9F8F6]/70 hover:text-[#C5A880] transition-colors group focus:outline-none"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-[#C5A880]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
