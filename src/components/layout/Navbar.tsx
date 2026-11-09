"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F9F8F6]/95 backdrop-blur-md shadow-[0_1px_0_0_#E5E2DC]"
          : "bg-[#F9F8F6] border-b border-[#E5E2DC]"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Logo / Wordmark */}
        <Link
          href="/"
          className="group flex flex-col justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A880]"
        >
          <span className="font-serif text-2xl tracking-[0.2em] uppercase font-medium text-[#0B0B0C] group-hover:text-[#66645F] transition-colors">
            FUETELLE
          </span>
          <span className="text-[9px] tracking-[0.35em] uppercase text-[#66645F] -mt-1 font-sans">
            Atelier &bull; Couture
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-9">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.14em] uppercase text-[#66645F] hover:text-[#0B0B0C] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300 font-sans font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/login"
            className="text-xs tracking-[0.14em] uppercase text-[#0B0B0C] hover:text-[#66645F] transition-colors font-sans font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="group inline-flex items-center justify-center px-5 py-2.5 bg-[#0B0B0C] text-[#F9F8F6] text-xs tracking-[0.14em] uppercase font-sans font-medium rounded-none hover:bg-[#66645F] transition-all duration-300 border border-[#0B0B0C] hover:border-[#66645F]"
          >
            <span>Get Started</span>
            <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C5A880]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-3">
          <Link
            href="/signup"
            className="text-[11px] tracking-wider uppercase px-3.5 py-1.5 bg-[#0B0B0C] text-[#F9F8F6] font-medium"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0B0B0C] hover:text-[#66645F] focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F8F6] border-b border-[#E5E2DC] px-6 py-8 space-y-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[0.14em] uppercase text-[#0B0B0C] py-2 border-b border-[#E5E2DC]/50 font-sans"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 flex flex-col space-y-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-xs tracking-[0.14em] uppercase border border-[#E5E2DC] text-[#0B0B0C] font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-xs tracking-[0.14em] uppercase bg-[#0B0B0C] text-[#F9F8F6] font-medium flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
