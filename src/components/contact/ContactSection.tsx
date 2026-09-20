"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import SectionHeading from "@/components/ui/SectionHeading";

const CONTACT_LINKS = [
  {
    name: "Email",
    value: "laveena.kumari72@gmail.com",
    href: "mailto:laveena.kumari72@gmail.com",
    target: "_self",
    icon: Mail,
    accent: "#00d4d4",
    borderHover: "hover:border-[#00d4d4]/60",
    glowHover: "hover:shadow-[0_0_35px_rgba(0,212,212,0.22)]",
    iconBg: "bg-[#00d4d4]/15 text-[#00d4d4] border-[#00d4d4]/30",
  },
  {
    name: "GitHub",
    value: "github.com/laveenakumari01",
    href: "https://github.com/laveenakumari01",
    target: "_blank",
    icon: GithubIcon,
    accent: "#00ffcc",
    borderHover: "hover:border-[#00ffcc]/60",
    glowHover: "hover:shadow-[0_0_35px_rgba(0,255,204,0.22)]",
    iconBg: "bg-[#00ffcc]/15 text-[#00ffcc] border-[#00ffcc]/30",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/laveena-kumariofficial",
    href: "https://www.linkedin.com/in/laveena-kumariofficial/",
    target: "_blank",
    icon: LinkedinIcon,
    accent: "#00d4d4",
    borderHover: "hover:border-[#00d4d4]/60",
    glowHover: "hover:shadow-[0_0_35px_rgba(0,212,212,0.22)]",
    iconBg: "bg-[#00d4d4]/15 text-[#00d4d4] border-[#00d4d4]/30",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Ambient background soft glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-3xl -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0, 212, 212, 0.12) 0%, rgba(0, 255, 204, 0.05) 50%, transparent 70%)",
        }}
      />

      <SectionHeading
        category="Contact"
        title="Let's Connect"
        subtitle="Feel free to reach out for collaborations, opportunities, or just a chat!"
        alignment="center"
      />

      {/* 3 Clickable Link Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mt-4">
        {CONTACT_LINKS.map((link, idx) => {
          const Icon = link.icon;

          return (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.target}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl bg-[#0d1f2d] backdrop-blur-xl border border-[rgba(0,212,212,0.3)] p-6
                transition-all duration-300 shadow-[0_4px_24px_rgba(0,212,212,0.08)] flex flex-col justify-between overflow-hidden
                ${link.borderHover} ${link.glowHover}`}
            >
              {/* Subtle top shimmer highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00ffcc]/20 to-transparent" />

              {/* Top row: Icon & Arrow */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border ${link.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0d2424] border border-[#143d3d] flex items-center justify-center text-slate-400 group-hover:text-[#00ffcc] group-hover:border-[#00ffcc]/40 transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom details */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-medium">
                  {link.name}
                </span>
                <p className="text-sm font-semibold text-white group-hover:text-[#00ffcc] transition-colors truncate font-sans">
                  {link.value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
