"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, Database, Network, Bot, CheckCircle } from "lucide-react";

export default function AgenticStackGraphic() {
  const [selectedTier, setSelectedTier] = useState<number>(0);

  const tiers = [
    {
      title: "Tier 04: Swarms & Reflection",
      subtitle: "Autonomous Worker Agents & Critic Loops",
      icon: Bot,
      color: "from-[#ff6b6b] to-amber-500",
      accent: "#ff6b6b",
      details: [
        "Writer-Critic feedback validation cycles with confidence thresholds.",
        "Parallel async tool calling across web scrapers and external APIs.",
        "Self-correcting escalation when low confidence or hallucination is flagged."
      ]
    },
    {
      title: "Tier 03: Orchestration & State Machine",
      subtitle: "LangGraph Cyclic State Channels",
      icon: Network,
      color: "from-[#00d4d4] to-[#00b4b4]",
      accent: "#00d4d4",
      details: [
        "Stateful graph checkpointing with rewind and human-in-the-loop gates.",
        "Dynamic routing conditional edges based on classifier predictions.",
        "Deterministic control flow replacing brittle single-prompt chains."
      ]
    },
    {
      title: "Tier 02: Memory, RAG & Caching",
      subtitle: "Hybrid Vector Search & Cosine Cache",
      icon: Database,
      color: "from-[#00ffcc] to-teal-600",
      accent: "#00ffcc",
      details: [
        "Sub-40ms semantic cache using SentenceTransformers + FAISS/ChromaDB.",
        "PostgreSQL pgvector hybrid search combined with BM25 full-text indexing.",
        "Multi-hop document retrieval across academic and threat-intel corpora."
      ]
    },
    {
      title: "Tier 01: Foundation & Inference",
      subtitle: "Heterogeneous Multi-LLM Engine",
      icon: Cpu,
      color: "from-teal-400 to-emerald-600",
      accent: "#10B981",
      details: [
        "Ultra-low latency Groq LLaMA 3.3 70B for synthesis & structured JSON.",
        "Google Gemini 1.5 Pro for million-token context digestion.",
        "Local self-hosted Ollama (Mistral / Qwen) for air-gapped private tasks."
      ]
    }
  ];

  return (
    <div className="relative rounded-2xl bg-[#0d1f2d] backdrop-blur-xl border border-[rgba(0,212,212,0.3)] p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,212,212,0.08)] overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#143d3d]">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#00ffcc]" />
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-slate-300">
            Agentic Architecture Stack
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#00ffcc] bg-[#00d4d4]/15 border border-[#00d4d4]/40 px-2 py-0.5 rounded">
          INTERACTIVE MOTIF
        </span>
      </div>

      {/* Tier Blocks Stack */}
      <div className="space-y-2.5">
        {tiers.map((tier, idx) => {
          const isSelected = selectedTier === idx;
          const Icon = tier.icon;

          return (
            <motion.div
              key={tier.title}
              onClick={() => setSelectedTier(idx)}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className={`cursor-pointer rounded-xl p-3.5 transition-all duration-300 border ${
                isSelected
                  ? "bg-[#0f2c2c] border-slate-600 shadow-[0_0_20px_rgba(0,0,0,0.6)] ring-1 ring-[#00ffcc]/30"
                  : "bg-[#0d1f2d]/80 border-[rgba(0,212,212,0.3)] hover:border-[rgba(0,212,212,0.6)] hover:bg-[#0d1f2d]"
              }`}
              style={{
                borderColor: isSelected ? tier.accent : undefined,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-tr ${tier.color} text-white shadow-md`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white font-heading">
                      {tier.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {tier.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: tier.accent }}
                  />
                </div>
              </div>

              {/* Expandable details when selected */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.25 }}
                  className="mt-3 pt-3 border-t border-[#143d3d] space-y-1.5"
                >
                  {tier.details.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start gap-2 text-[11px] text-slate-300 leading-relaxed"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#00ffcc] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-[#143d3d] text-center font-mono text-[10px] text-slate-400">
        Click any layer to inspect architectural implementations
      </div>
    </div>
  );
}
