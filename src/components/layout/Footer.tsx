"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-[#143636] bg-[#0a1a1a] backdrop-blur-xl pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow in soft teal */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-t from-[#00b4b4]/10 via-[#00ffcc]/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#143636]">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00d4d4] via-[#00ffcc] to-[#ff6b6b] p-[1px]">
                <div className="w-full h-full bg-[#0a1a1a] rounded-[7px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-[#00ffcc]" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-slate-300 text-sm max-w-md leading-relaxed">
              {PORTFOLIO_DATA.personal.tagline} Focused on autonomous multi-agent systems,
              deterministic state graphs, and post-quantum cryptographic security.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00d4d4]/15 border border-[#00d4d4]/30 text-[#00ffcc] text-xs">
              <span className="w-2 h-2 rounded-full bg-[#00ffcc] animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.status}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 mb-4 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-[#00ffcc] transition-colors">About Me</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#00ffcc] transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#00ffcc] transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#00ffcc] transition-colors">Skills</a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-[#00ffcc] transition-colors">Certificates</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00ffcc] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates & Connect */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 mb-4 font-semibold">
              Telemetry &amp; Links
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="font-mono text-xs bg-[#0d2424] p-2.5 rounded-lg border border-[#143d3d]">
                <span className="text-slate-400 block mb-1">Local Coordinates:</span>
                <span className="text-[#00ffcc]">Karachi (PKT UTC+5)</span>
                <span className="text-[#00d4d4] block mt-0.5 font-bold">{currentTime || "Loading time..."}</span>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0d2424] border border-[#143d3d] text-slate-300 hover:text-white hover:border-[#00d4d4]/60 hover:bg-[#00d4d4]/15 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0d2424] border border-[#143d3d] text-slate-300 hover:text-white hover:border-[#00ffcc]/60 hover:bg-[#00ffcc]/15 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="p-2.5 rounded-xl bg-[#0d2424] border border-[#143d3d] text-slate-300 hover:text-white hover:border-[#ff6b6b]/60 hover:bg-[#ff6b6b]/15 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Built with Next.js, Framer Motion, and Tailwind CSS.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d2424] border border-[#143d3d] hover:border-[#00ffcc]/50 text-slate-300 hover:text-white transition-all text-xs"
          >
            <span>Back to apex</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
