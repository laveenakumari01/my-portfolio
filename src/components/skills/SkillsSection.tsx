"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Server,
  Database,
  Cpu,
  BarChart2,
  Wrench,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  BarChart2: <BarChart2 className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

const CATEGORY_STYLES: {
  borderHover: string;
  glowHover: string;
  badge: string;
  iconBg: string;
}[] = [
  {
    borderHover: "hover:border-[#00d4d4]/50",
    glowHover: "hover:shadow-[0_0_28px_rgba(0,212,212,0.2)]",
    badge: "text-[#00d4d4] border-[#00d4d4]/30 bg-[#00d4d4]/10",
    iconBg: "bg-[#00d4d4]/15 text-[#00d4d4] border-[#00d4d4]/30",
  },
  {
    borderHover: "hover:border-[#00ffcc]/50",
    glowHover: "hover:shadow-[0_0_28px_rgba(0,255,204,0.2)]",
    badge: "text-[#00ffcc] border-[#00ffcc]/30 bg-[#00ffcc]/10",
    iconBg: "bg-[#00ffcc]/15 text-[#00ffcc] border-[#00ffcc]/30",
  },
  {
    borderHover: "hover:border-emerald-500/50",
    glowHover: "hover:shadow-[0_0_28px_rgba(16,185,129,0.2)]",
    badge: "text-emerald-400 border-emerald-500/30 bg-emerald-950/40",
    iconBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  },
  {
    borderHover: "hover:border-cyan-400/50",
    glowHover: "hover:shadow-[0_0_28px_rgba(34,211,238,0.2)]",
    badge: "text-cyan-400 border-cyan-500/30 bg-cyan-950/40",
    iconBg: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  },
  {
    borderHover: "hover:border-[#ff6b6b]/50",
    glowHover: "hover:shadow-[0_0_28px_rgba(255,107,107,0.2)]",
    badge: "text-[#ff6b6b] border-[#ff6b6b]/30 bg-[#ff6b6b]/10",
    iconBg: "bg-[#ff6b6b]/15 text-[#ff6b6b] border-[#ff6b6b]/30",
  },
  {
    borderHover: "hover:border-amber-500/50",
    glowHover: "hover:shadow-[0_0_28px_rgba(245,158,11,0.2)]",
    badge: "text-amber-400 border-amber-500/30 bg-amber-950/40",
    iconBg: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  },
  {
    borderHover: "hover:border-teal-400/50",
    glowHover: "hover:shadow-[0_0_28px_rgba(45,212,191,0.2)]",
    badge: "text-teal-400 border-teal-500/30 bg-teal-950/40",
    iconBg: "bg-teal-500/15 text-teal-400 border-teal-500/30",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        category="Skills & Capabilities"
        title="Technical Toolkit"
        subtitle="Languages, frameworks, multi-agent orchestrators, and AI infrastructure I work with daily."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {PORTFOLIO_DATA.skills.map((cat, catIdx) => {
          const style = CATEGORY_STYLES[catIdx % CATEGORY_STYLES.length];
          const icon = ICON_MAP[cat.iconName] ?? <Sparkles className="w-5 h-5" />;

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: catIdx * 0.07 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl bg-[#0d1f2d] backdrop-blur-xl border border-[rgba(0,212,212,0.3)] p-5
                transition-all duration-300 shadow-[0_4px_24px_rgba(0,212,212,0.08)] ${style.borderHover} ${style.glowHover} group relative overflow-hidden`}
            >
              {/* Subtle top shimmer highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00ffcc]/20 to-transparent" />

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#143d3d]">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${style.iconBg} transition-transform duration-300 group-hover:scale-105`}>
                  {icon}
                </div>
                <h3 className="text-sm font-bold text-white font-heading leading-tight tracking-wide">
                  {cat.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: catIdx * 0.05 + sIdx * 0.02 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0d2424]
                      border border-[#143d3d] text-slate-300 hover:border-[#00d4d4]/60 hover:text-white hover:bg-[#143636] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
