"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a1a1a]/90 backdrop-blur-xl border-b border-[#143636] shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Laveena - AI Engineer Home"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00d4d4] via-[#00ffcc] to-[#ff6b6b] p-[1px] shadow-[0_0_20px_rgba(0,212,212,0.3)] group-hover:shadow-[0_0_25px_rgba(0,255,204,0.5)] transition-all duration-300">
            <div className="w-full h-full bg-[#0a1a1a] rounded-[11px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-[#00ffcc] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-[#00ffcc] transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#00ffcc] animate-pulse" />
            </div>
            <span className="block text-[11px] font-mono text-slate-400 tracking-wider uppercase">
              AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0a1a1a]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#143636] shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#00b4b4]/25 to-[#00ffcc]/25 border border-[#00d4d4]/60 rounded-full shadow-[0_0_12px_rgba(0,212,212,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button: Let's Connect (Coral for high contrast) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase
              bg-gradient-to-r from-[#ff6b6b] via-[#f43f5e] to-[#fb7185] text-white shadow-[0_0_20px_rgba(255,107,107,0.3)]
              hover:shadow-[0_0_25px_rgba(255,107,107,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-[#0a1a1a] border border-[#143636] text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0a1a1a]/95 backdrop-blur-2xl border-b border-[#143636] px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#00d4d4]/15 border border-[#00d4d4]/40 text-[#00ffcc] font-semibold"
                        : "text-slate-300 hover:bg-[#143636]/40 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-slate-500 font-mono">0{NAV_LINKS.indexOf(link) + 1}</span>
                  </a>
                );
              })}
              <div className="pt-3 border-t border-[#143636]">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#ff6b6b] via-[#f43f5e] to-[#fb7185] text-white font-medium text-sm shadow-[0_0_20px_rgba(255,107,107,0.3)]"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
