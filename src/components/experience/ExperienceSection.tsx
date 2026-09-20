"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

/** Animated vertical timeline that draws itself on scroll using teal to aqua */
function AnimatedTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 20%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="absolute left-0 top-0 bottom-0 w-[2px] ml-[-1px]" aria-hidden="true">
      {/* Track */}
      <div className="absolute inset-0 bg-[#143d3d]/60 rounded-full" />
      {/* Animated fill */}
      <motion.div
        className="absolute top-0 left-0 right-0 rounded-full"
        style={{
          height,
          background: "linear-gradient(to bottom, #00d4d4, #00ffcc)",
          boxShadow: "0 0 12px rgba(0,212,212,0.6)",
        }}
      />
    </div>
  );
}

export default function ExperienceSection() {
  const exp = PORTFOLIO_DATA.experience[0];

  return (
    <section id="experience" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-3xl -z-10"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(0,212,212,0.08) 0%, transparent 70%)" }}
      />

      <SectionHeading
        category="Work Experience"
        title="Where I've Applied My Skills"
        subtitle="Hands-on experience building AI agents, secure systems, and real-world applications."
      />

      {/* Timeline wrapper */}
      <div className="relative pl-8 sm:pl-12">
        <AnimatedTimeline />

        {/* Timeline dot in teal */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "spring" }}
          className="absolute left-0 top-6 w-4 h-4 rounded-full border-2 border-[#00d4d4] bg-[#00ffcc] shadow-[0_0_12px_rgba(0,212,212,0.8)] -translate-x-[7px]"
          aria-hidden="true"
        />

        <GlassCard glowColor="teal" className="max-w-4xl" interactive={false}>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              {/* NFTCipher Shield Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="shrink-0 relative"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#00d4d4]/40 shadow-[0_0_20px_rgba(0,212,212,0.25)]">
                  <Image
                    src="/ai-assets/nftcipher-shield.jpg"
                    alt="NFTCipher quantum security shield badge"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Animated glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-[#00ffcc]/50"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  aria-hidden="true"
                />
              </motion.div>

              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#00d4d4]/15 border border-[#00d4d4]/40 text-[#00ffcc]">
                  {exp.badge}
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">{exp.role}</h3>
                <div className="text-base font-semibold text-[#00ffcc]">{exp.company}</div>
              </div>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs text-slate-400 sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-[#00d4d4]" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00ffcc]" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed border-l-2 border-[#00d4d4]/50 pl-4 mb-8">
            {exp.description}
          </p>

          {/* Key Achievements */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              What I Built &amp; Achieved
            </h4>
            <div className="space-y-3">
              {exp.achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`flex items-start gap-3 text-sm text-slate-300 rounded-xl p-4 border transition-all duration-300 ${
                    idx === 3
                      ? "bg-amber-950/20 border-amber-700/30 hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                      : "bg-[#0d1f2d]/80 border-[rgba(0,212,212,0.3)] hover:border-[rgba(0,212,212,0.6)]"
                  }`}
                >
                  {idx === 3 ? (
                    <div className="flex items-start gap-3 w-full">
                      {/* Employee of Month Gold Badge */}
                      <div className="shrink-0 relative">
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                          <Image
                            src="/ai-assets/emp-month-badge.jpg"
                            alt="Employee of the Month golden badge"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-lg border border-amber-400/60"
                          animate={{ opacity: [0.2, 0.7, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-amber-100/90">{item}</span>
                    </div>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#00ffcc] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-6 border-t border-[#143d3d]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0a1e1e] border border-[#143d3d] text-slate-300 hover:border-[#00d4d4]/60 hover:text-white transition-colors skill-tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
