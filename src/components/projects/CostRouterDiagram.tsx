"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Server, ShieldCheck, ArrowDown, Database, Cpu, Check, AlertCircle } from "lucide-react";

interface QueryScenario {
  id: string;
  label: string;
  query: string;
  complexity: "Simple" | "Moderate" | "Complex / Sensitive";
  cacheHit: boolean;
  chosenTier: "Cache" | "Tier 1: Groq 8B" | "Tier 2: Gemini Flash" | "Tier 3: Ollama Local";
  costSavings: string;
  latency: string;
  verifierStatus: "Verified" | "Escalated to Tier 2";
}

const SCENARIOS: QueryScenario[] = [
  {
    id: "simple",
    label: "FAQ / Fast Query",
    query: "What is the mathematical formulation of self-attention?",
    complexity: "Simple",
    cacheHit: true,
    chosenTier: "Cache",
    costSavings: "100% (Zero Tokens)",
    latency: "32ms",
    verifierStatus: "Verified",
  },
  {
    id: "moderate",
    label: "Structured Code Generation",
    query: "Generate a FastAPI SSE endpoint for streaming LLM tokens with CORS.",
    complexity: "Moderate",
    cacheHit: false,
    chosenTier: "Tier 1: Groq 8B",
    costSavings: "100% (Groq Free Tier)",
    latency: "140ms",
    verifierStatus: "Verified",
  },
  {
    id: "complex",
    label: "Sensitive Cryptographic Audit",
    query: "Audit PQC key generation logic for CRYSTALS-Kyber memory safety.",
    complexity: "Complex / Sensitive",
    cacheHit: false,
    chosenTier: "Tier 3: Ollama Local",
    costSavings: "100% (Air-gapped GPU)",
    latency: "620ms",
    verifierStatus: "Verified",
  },
];

export default function CostRouterDiagram() {
  const [selectedScenario, setSelectedScenario] = useState<QueryScenario>(SCENARIOS[0]);

  return (
    <div className="rounded-2xl bg-[#090e1c] border border-slate-700/80 p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
            Cost-Aware Dynamic Dispatch Pipeline
          </span>
        </div>
        <span className="font-mono text-[11px] text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
          78% INFERENCE COST SLASHER
        </span>
      </div>

      {/* Interactive Scenario Selector */}
      <div className="space-y-2 mb-5">
        <span className="text-xs font-mono text-slate-400 block">
          Select Simulation Input:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {SCENARIOS.map((scenario) => {
            const isSelected = scenario.id === selectedScenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario)}
                className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                  isSelected
                    ? "bg-violet-950/40 border-violet-400/80 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300"
                }`}
              >
                <div className="font-semibold text-white mb-0.5">{scenario.label}</div>
                <div className="text-[10px] font-mono text-slate-400 truncate">
                  {scenario.query}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Pipeline Flow */}
      <div className="space-y-3 font-mono text-xs">
        {/* Step 1: Input & Classifier */}
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <div>
              <span className="text-slate-400">Step 1: </span>
              <span className="text-white font-semibold">Classifier Agent</span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 text-[11px]">
            Complexity: {selectedScenario.complexity}
          </span>
        </div>

        {/* Step 2: Semantic Cache Check */}
        <div
          className={`p-3 rounded-xl border transition-all ${
            selectedScenario.cacheHit
              ? "bg-emerald-950/40 border-emerald-500/60 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              : "bg-slate-900/60 border-slate-800 text-slate-400"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Database className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-slate-400">Step 2: </span>
                <span className="text-white font-semibold">Semantic Vector Cache Check</span>
              </div>
            </div>
            <span className="text-[11px] font-bold">
              {selectedScenario.cacheHit ? "HIT (32ms, Cosine > 0.88)" : "MISS (Proceeding to Dispatch)"}
            </span>
          </div>
        </div>

        {/* Step 3: Provider Tier Dispatch */}
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400">Step 3: Dynamic Model Dispatch</span>
            <span className="text-amber-400 font-bold">{selectedScenario.chosenTier}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[10px] text-center">
            <div
              className={`p-2 rounded-lg border ${
                selectedScenario.chosenTier.includes("Groq")
                  ? "bg-cyan-950/60 border-cyan-400 text-cyan-300 font-bold"
                  : "bg-slate-950/50 border-slate-800/80 text-slate-500"
              }`}
            >
              Tier 1: Groq 8B
            </div>
            <div
              className={`p-2 rounded-lg border ${
                selectedScenario.chosenTier.includes("Gemini")
                  ? "bg-cyan-950/60 border-cyan-400 text-cyan-300 font-bold"
                  : "bg-slate-950/50 border-slate-800/80 text-slate-500"
              }`}
            >
              Tier 2: Gemini Flash
            </div>
            <div
              className={`p-2 rounded-lg border ${
                selectedScenario.chosenTier.includes("Ollama")
                  ? "bg-cyan-950/60 border-cyan-400 text-cyan-300 font-bold"
                  : "bg-slate-950/50 border-slate-800/80 text-slate-500"
              }`}
            >
              Tier 3: Local Ollama
            </div>
          </div>
        </div>

        {/* Step 4: Reflection Verifier */}
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-violet-400" />
            <div>
              <span className="text-slate-400">Step 4: </span>
              <span className="text-white font-semibold">Verifier Critic Loop</span>
            </div>
          </div>
          <span className="text-emerald-400 font-bold text-[11px] flex items-center gap-1">
            <Check className="w-3.5 h-3.5" />
            {selectedScenario.verifierStatus}
          </span>
        </div>
      </div>

      {/* Outcome Telemetry */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
        <div>
          <span className="text-slate-500">SAVINGS: </span>
          <span className="text-emerald-400 font-bold">{selectedScenario.costSavings}</span>
        </div>
        <div>
          <span className="text-slate-500">ROUND-TRIP: </span>
          <span className="text-cyan-400 font-bold">{selectedScenario.latency}</span>
        </div>
      </div>
    </div>
  );
}
