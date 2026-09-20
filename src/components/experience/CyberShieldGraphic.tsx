"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Key, Lock } from "lucide-react";

interface AgentDef {
  name: string;
  role: string;
  color: string;
}

const DEFAULT_AGENTS: AgentDef[] = [
  { name: "Parser", role: "AST & Bytecode Static Analysis", color: "#00d4d4" },
  { name: "Fuzzer", role: "Differential Vulnerability Probe", color: "#00ffcc" },
  { name: "Verifier", role: "Formal Verification Constraints", color: "#10b981" },
  { name: "KEM Guard", role: "ML-KEM Key Exchange Encapsulator", color: "#38bdf8" },
  { name: "Signer", role: "ML-DSA Dilithium Signature Agent", color: "#ff6b6b" },
  { name: "Synthesizer", role: "Multi-Agent Consensus & Audit", color: "#f59e0b" },
  { name: "Monitor", role: "Real-time Anomaly Detection", color: "#00b4b4" },
];

export default function CyberShieldGraphic() {
  const [selectedAgent, setSelectedAgent] = useState<AgentDef>(DEFAULT_AGENTS[0]);

  return (
    <div className="rounded-2xl bg-[#0a1e1e]/90 backdrop-blur-xl border border-[#143d3d] p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-12 -left-12 w-48 h-48 bg-[#00d4d4]/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 w-48 h-48 bg-[#00ffcc]/10 rounded-full blur-3xl" />

      {/* Title bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#143d3d]">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#00ffcc]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
            7-Agent Cyber Defense Swarm &amp; PQC
          </span>
        </div>
        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
          Quantum-Safe PQC
        </span>
      </div>

      {/* Interactive Swarm Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {DEFAULT_AGENTS.map((agent) => {
          const isSelected = selectedAgent.name === agent.name;
          return (
            <button
              key={agent.name}
              onClick={() => setSelectedAgent(agent)}
              className={`p-2.5 rounded-xl border text-left transition-all duration-200 ${
                isSelected
                  ? "bg-[#0f2c2c] border-[#00d4d4]/60 shadow-[0_0_15px_rgba(0,212,212,0.25)]"
                  : "bg-[#0a1a1a]/50 border-[#143d3d] hover:border-[#00d4d4]/40 hover:bg-[#0a1a1a]/80"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: agent.color }}
                />
                <span className="font-mono text-xs font-bold text-white truncate">
                  {agent.name}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 line-clamp-1">
                {agent.role}
              </p>
            </button>
          );
        })}

        {/* 8th block: Post-Quantum Cryptography */}
        <div className="p-2.5 rounded-xl border border-[#00d4d4]/40 bg-[#00d4d4]/10 col-span-2 sm:col-span-1 flex flex-col justify-center">
          <div className="flex items-center gap-1.5 text-[#00ffcc] font-mono text-xs font-bold">
            <Key className="w-3.5 h-3.5 text-[#00d4d4] shrink-0" />
            <span>PQC Core</span>
          </div>
          <span className="text-[10px] text-slate-400 mt-0.5">Kyber + Dilithium</span>
        </div>
      </div>

      {/* Selected Agent Inspector */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedAgent.name}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="rounded-xl bg-[#0a1a1a]/80 border border-[#143d3d] p-3.5"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: selectedAgent.color }}
              />
              <span className="font-heading font-semibold text-sm text-white">
                Agent Swarm Node: {selectedAgent.name}
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#00ffcc]">Autonomous Role</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {selectedAgent.role}. Cooperatively acts within the FastAPI agentic mesh to analyze incoming threat payloads, probe for vulnerabilities, and verify cryptographic constraints in real-time.
          </p>
        </motion.div>
      </AnimatePresence>

      {/* PQC Architecture callout */}
      <div className="mt-4 pt-3 border-t border-[#143d3d] grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-2 bg-[#0a1a1a]/40 p-2 rounded-lg border border-[#143d3d] text-slate-300">
          <Lock className="w-3.5 h-3.5 text-[#00d4d4] shrink-0" />
          <span>CRYSTALS-Kyber: Quantum KEM</span>
        </div>
        <div className="flex items-center gap-2 bg-[#0a1a1a]/40 p-2 rounded-lg border border-[#143d3d] text-slate-300">
          <Key className="w-3.5 h-3.5 text-[#00ffcc] shrink-0" />
          <span>CRYSTALS-Dilithium: Quantum Sig</span>
        </div>
      </div>
    </div>
  );
}
