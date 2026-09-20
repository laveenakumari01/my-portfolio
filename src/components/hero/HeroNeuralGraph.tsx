"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  ShieldAlert,
  Database,
  Search,
  CheckCircle2,
  Sparkles,
  Cpu,
} from "lucide-react";

interface AgentNode {
  id: string;
  label: string;
  role: string;
  status: string;
  icon: any;
  color: string;
  gradient: string;
  x: number; // percentage
  y: number; // percentage
  latency: string;
  tokens: string;
}

const NODES: AgentNode[] = [
  {
    id: "input",
    label: "Telemetry Query",
    role: "User Ingestion & Schema Sanitizer",
    status: "Active",
    icon: Sparkles,
    color: "#38BDF8",
    gradient: "from-sky-500 to-cyan-400",
    x: 18,
    y: 22,
    latency: "4ms",
    tokens: "128 ctx",
  },
  {
    id: "router",
    label: "Agentic Router",
    role: "Complexity Classifier & Cost Predictor",
    status: "Active",
    icon: BrainCircuit,
    color: "#8B5CF6",
    gradient: "from-violet-600 to-purple-500",
    x: 50,
    y: 18,
    latency: "28ms",
    tokens: "Groq 8B",
  },
  {
    id: "memory",
    label: "RAG & Vector Cache",
    role: "ChromaDB + PostgreSQL pgvector",
    status: "Online",
    icon: Database,
    color: "#06B6D4",
    gradient: "from-cyan-500 to-teal-400",
    x: 82,
    y: 26,
    latency: "18ms",
    tokens: "Cosine 0.91",
  },
  {
    id: "swarm",
    label: "Execution Swarm",
    role: "Parallel Tool Calling & Async Workers",
    status: "Processing",
    icon: Bot,
    color: "#10B981",
    gradient: "from-emerald-500 to-teal-500",
    x: 28,
    y: 65,
    latency: "142ms",
    tokens: "LLaMA 3.3 70B",
  },
  {
    id: "verifier",
    label: "Critic & Verifier",
    role: "Reflection Loop & Proof Gatekeeper",
    status: "Active",
    icon: CheckCircle2,
    color: "#F59E0B",
    gradient: "from-amber-500 to-orange-500",
    x: 72,
    y: 68,
    latency: "64ms",
    tokens: "Score: 98%",
  },
  {
    id: "core",
    label: "LangGraph State Engine",
    role: "Deterministic Checkpointing & Control Flow",
    status: "Synced",
    icon: Cpu,
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-500",
    x: 50,
    y: 45,
    latency: "2ms",
    tokens: "Cyclic Graph",
  },
];

const EDGES = [
  { from: "input", to: "router" },
  { from: "router", to: "core" },
  { from: "core", to: "memory" },
  { from: "core", to: "swarm" },
  { from: "swarm", to: "verifier" },
  { from: "verifier", to: "core" },
  { from: "memory", to: "verifier" },
];

export default function HeroNeuralGraph() {
  const [activeNode, setActiveNode] = useState<AgentNode>(NODES[1]); // Router default
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % EDGES.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-w-xl mx-auto flex items-center justify-center">
      {/* Outer ambient glow halo */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-600/20 via-cyan-500/15 to-transparent blur-3xl -z-10" />

      {/* Main glass visualizer frame */}
      <div className="relative w-full h-full rounded-2xl bg-[#0a0e1c]/80 backdrop-blur-2xl border border-slate-700/60 p-4 sm:p-6 shadow-[0_12px_48px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Decorative Grid & Corner Accents */}
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        <div className="absolute top-3 left-3 font-mono text-[10px] text-slate-500 tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>SWARM_ORCHESTRATION_TOPOLOGY // V3.8</span>
        </div>
        <div className="absolute top-3 right-3 font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
          LIVE TELEMETRY
        </div>

        {/* SVG Synapse Connectors */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          {EDGES.map((edge, idx) => {
            const fromNode = NODES.find((n) => n.id === edge.from)!;
            const toNode = NODES.find((n) => n.id === edge.to)!;
            const isPulsing = idx === pulseIndex;

            return (
              <g key={`${edge.from}-${edge.to}`}>
                {/* Base Synapse Line */}
                <line
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y}%`}
                  stroke="url(#edgeGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  strokeOpacity={isPulsing ? 0.9 : 0.4}
                />

                {/* Animated Data Packet */}
                {isPulsing && (
                  <circle r="4" fill="url(#pulseGrad)">
                    <animateMotion
                      path={`M ${fromNode.x * 4} ${fromNode.y * 3} L ${toNode.x * 4} ${toNode.y * 3}`}
                      dur="1.2s"
                      repeatCount="1"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Interactive Agent Nodes */}
        {NODES.map((node) => {
          const isSelected = activeNode.id === node.id;
          const Icon = node.icon;

          return (
            <motion.div
              key={node.id}
              onClick={() => setActiveNode(node)}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Node Outer Ring & Glow */}
              <div
                className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? "shadow-[0_0_24px_rgba(34,211,238,0.6)] ring-2 ring-cyan-400"
                    : "hover:shadow-[0_0_18px_rgba(139,92,246,0.4)]"
                }`}
                style={{
                  background: isSelected
                    ? "linear-gradient(135deg, rgba(139,92,246,0.9), rgba(6,182,212,0.9))"
                    : "rgba(15, 23, 42, 0.85)",
                  border: isSelected ? "none" : "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <Icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    isSelected ? "text-white" : "text-slate-300 group-hover:text-cyan-300"
                  }`}
                />

                {/* Tiny Status Beacon */}
                <span
                  className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-[#0a0e1c]"
                  style={{ backgroundColor: node.color }}
                />
              </div>

              {/* Node Label Text */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap text-center pointer-events-none">
                <span
                  className={`text-[10px] sm:text-xs font-mono font-medium px-1.5 py-0.5 rounded transition-colors ${
                    isSelected
                      ? "text-cyan-300 bg-cyan-950/80 border border-cyan-500/40"
                      : "text-slate-400 bg-slate-900/60"
                  }`}
                >
                  {node.label}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* Selected Node Telemetry HUD / Inspector */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20
              bg-[#060913]/90 backdrop-blur-md rounded-xl border border-slate-700/80 p-3 sm:p-3.5
              flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-lg"
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: activeNode.color }}
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-white font-heading">
                    {activeNode.label}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.2 rounded border border-cyan-800/40">
                    {activeNode.status}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {activeNode.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto font-mono text-[10px] sm:text-xs text-slate-300">
              <div className="bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
                <span className="text-slate-500 mr-1">LATENCY:</span>
                <span className="text-emerald-400 font-bold">{activeNode.latency}</span>
              </div>
              <div className="bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
                <span className="text-slate-500 mr-1">PAYLOAD:</span>
                <span className="text-violet-300 font-bold">{activeNode.tokens}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
