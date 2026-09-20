"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Workflow,
  Sparkles,
  Zap,
  Calendar,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AgenticStackGraphic from "./AgenticStackGraphic";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const CORE_FOCUS_AREAS = [
  {
    icon: Workflow,
    title: "Autonomous Agent Graphs",
    description:
      "Cyclic state machines with LangGraph, multi-agent swarms, self-reflection critic loops, and deterministic fallback recovery.",
    accent: "text-[#00d4d4] border-[#00d4d4]/30 bg-[#00d4d4]/10",
  },
  {
    icon: Cpu,
    title: "Hybrid RAG & Vector Search",
    description:
      "Dense + sparse semantic retrieval pipelines with FAISS, PostgreSQL pgvector, multi-hop synthesis, and sub-40ms semantic caching.",
    accent: "text-[#00ffcc] border-[#00ffcc]/30 bg-[#00ffcc]/10",
  },
  {
    icon: ShieldCheck,
    title: "Quantum-Resilient Security",
    description:
      "Implementation of modern post-quantum cryptographic standards (ML-KEM / Kyber & ML-DSA / Dilithium) for future-proof security.",
    accent: "text-emerald-400 border-emerald-500/30 bg-emerald-950/40",
  },
  {
    icon: Zap,
    title: "Production LLM Engineering",
    description:
      "Heterogeneous multi-model routing (Gemini 1.5, Groq LLaMA 3.3, Ollama), structured JSON outputs, and high-throughput async APIs.",
    accent: "text-amber-400 border-amber-500/30 bg-amber-950/40",
  },
];

export default function AboutSection() {
  const { education, narrative } = PORTFOLIO_DATA.about;

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Subtle section ambient glow using #00b4b4 (soft teal) */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl -z-10"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(0, 180, 180, 0.12) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full blur-3xl -z-10"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(0, 255, 204, 0.08) 0%, transparent 70%)" }}
      />

      <SectionHeading
        category="About Me"
        title="AI Engineer building smart, secure systems"
        subtitle="SZABIST, Karachi, Pakistan (2024–2028) · CGPA 3.9/4.0 · 3rd Year AI Student building autonomous agent swarms & secure AI tools."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Education + Narrative + Core Competencies */}
        <div className="lg:col-span-7 space-y-6">
          {/* Education Card */}
          <GlassCard glowColor="teal" className="border-[#00d4d4]/25">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#00d4d4]/15 border border-[#00d4d4]/35 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-[#00ffcc]" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-500/40 font-bold shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                    CGPA {education.gpa}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-[#00ffcc] bg-[#00d4d4]/15 px-2.5 py-0.5 rounded-full border border-[#00d4d4]/40">
                    <Calendar className="w-3 h-3" />
                    <span>{education.duration}</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-heading">{education.degree}</h3>
                <p className="text-sm text-slate-300 font-mono">{education.institution}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#143d3d]/80 space-y-2">
              {education.highlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00ffcc] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Personal Narrative */}
          <GlassCard glowColor="aqua" className="space-y-4">
            <div className="flex items-center gap-2 text-[#00ffcc] font-mono text-xs font-semibold uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>A bit about me</span>
            </div>
            <div className="space-y-3">
              {narrative.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </GlassCard>

          {/* Core Engineering Focus Card */}
          <GlassCard glowColor="teal" className="space-y-4">
            <div className="flex items-center justify-between pb-1 border-b border-[#143d3d]">
              <div className="flex items-center gap-2 text-[#00ffcc] font-mono text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Core Engineering Focus</span>
              </div>
              <span className="font-mono text-[11px] text-slate-400">Production Ready</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {CORE_FOCUS_AREAS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="p-3.5 rounded-xl bg-[#0d1f2d]/80 border border-[rgba(0,212,212,0.3)] hover:border-[rgba(0,212,212,0.6)] hover:bg-[#0d1f2d] transition-all group"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 ${item.accent}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-white font-heading group-hover:text-[#00ffcc] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Brain illustration + Agentic Stack */}
        <div className="lg:col-span-5 space-y-6">
          {/* AI Brain Hologram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full rounded-2xl overflow-hidden border border-[rgba(0,212,212,0.3)] bg-[#0d1f2d] shadow-[0_4px_24px_rgba(0,212,212,0.08)] group"
          >
            {/* Ambient background glow */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, rgba(0,212,212,0.25) 0%, rgba(0,255,204,0.1) 60%, transparent 80%)",
              }}
            />

            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="/ai-assets/about-brain.jpg"
                alt="AI Neural Intelligence Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f2d] via-[#0d1f2d]/40 to-transparent" />
            </div>

            <div className="p-4 relative z-10 -mt-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white font-heading block">
                  Neural Intelligence Engine
                </span>
                <span className="text-[11px] font-mono text-[#00ffcc]/80">
                  Stateful Agent Cognition & RAG
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#00d4d4]/20 border border-[#00d4d4]/40 text-[#00ffcc]">
                ACTIVE
              </span>
            </div>
          </motion.div>

          {/* Agentic Stack Interactive Graphic */}
          <AgenticStackGraphic />
        </div>
      </div>
    </section>
  );
}
