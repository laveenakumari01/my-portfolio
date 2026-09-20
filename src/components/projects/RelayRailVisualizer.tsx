"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, CheckCircle, Clock, ArrowRight, Bot, Search, BookOpen, PenTool, AlertTriangle, Database } from "lucide-react";

interface RailAgent {
  id: string;
  name: string;
  role: string;
  model: string;
  status: "idle" | "running" | "completed" | "review";
  duration: string;
  icon: any;
  color: string;
  payload: string;
}

const AGENTS: RailAgent[] = [
  {
    id: "planner",
    name: "Planner Agent",
    role: "Decomposes topic into sub-hypotheses & queries",
    model: "Cerebras 8B (4ms)",
    status: "completed",
    duration: "0.4s",
    icon: Bot,
    color: "#38BDF8",
    payload: "Generated 4 distinct search vectors + query matrix",
  },
  {
    id: "search",
    name: "Search Swarm",
    role: "Parallel scraping of arXiv & Semantic Scholar",
    model: "Async HTTP / APIs",
    status: "completed",
    duration: "1.2s",
    icon: Search,
    color: "#8B5CF6",
    payload: "Retrieved 14 relevant papers (PDFs + abstracts)",
  },
  {
    id: "reader",
    name: "Reader Agent",
    role: "Extracts key methodologies, tables, & proofs",
    model: "Gemini 1.5 Pro",
    status: "running",
    duration: "1.8s",
    icon: BookOpen,
    color: "#06B6D4",
    payload: "Parsing section 4.2 experimental results...",
  },
  {
    id: "writer",
    name: "Synthesizer Writer",
    role: "Drafts comprehensive structured literature report",
    model: "Groq LLaMA 3.3 70B",
    status: "idle",
    duration: "2.1s",
    icon: PenTool,
    color: "#10B981",
    payload: "Awaiting reader extraction vectors",
  },
  {
    id: "critic",
    name: "Critic & Verifier",
    role: "Audits citations, flags unsupported claims",
    model: "Reflection Engine",
    status: "idle",
    duration: "0.8s",
    icon: AlertTriangle,
    color: "#F59E0B",
    payload: "Threshold: 92% hallucination safety score",
  },
  {
    id: "indexer",
    name: "Vector Indexer",
    role: "Chunks, embeds & commits findings to ChromaDB",
    model: "Text-Embedding-3",
    status: "idle",
    duration: "0.5s",
    icon: Database,
    color: "#EC4899",
    payload: "RAG corpus persistence & tagging",
  },
];

export default function RelayRailVisualizer() {
  const [activeStep, setActiveStep] = useState(2); // Reader currently active
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % AGENTS.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentAgent = AGENTS[activeStep];

  return (
    <div className="rounded-2xl bg-[#090e1c] border border-slate-700/80 p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
            Relay Rail // Live Multi-Agent Hand-off
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? "Pause Relay" : "Play Relay"}</span>
          </button>
          <button
            onClick={() => setActiveStep(0)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Reset to Step 1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* The Relay Rail Horizontal Track */}
      <div className="relative my-6 px-2">
        {/* Track Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-slate-800 rounded-full" />
        {/* Active Progress Fill */}
        <div
          className="absolute top-1/2 left-0 h-1 -translate-y-1/2 bg-gradient-to-r from-violet-500 via-cyan-400 to-amber-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(activeStep / (AGENTS.length - 1)) * 100}%` }}
        />

        {/* Agent Rail Stations */}
        <div className="relative flex items-center justify-between">
          {AGENTS.map((agent, idx) => {
            const isCompleted = idx < activeStep;
            const isCurrent = idx === activeStep;
            const Icon = agent.icon;

            return (
              <button
                key={agent.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPlaying(false);
                }}
                className="group flex flex-col items-center focus:outline-none"
              >
                {/* Node Pill on Track */}
                <div
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 relative z-10 ${
                    isCurrent
                      ? "ring-4 ring-cyan-400/30 scale-110 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                      : isCompleted
                      ? "bg-slate-800 border border-cyan-500/40 text-cyan-300"
                      : "bg-slate-900 border border-slate-700 text-slate-500 group-hover:border-slate-500"
                  }`}
                  style={{
                    backgroundColor: isCurrent ? agent.color : undefined,
                    color: isCurrent ? "#ffffff" : undefined,
                  }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />

                  {/* Tiny checkmark if completed */}
                  {isCompleted && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center text-[9px] font-bold">
                      ✓
                    </span>
                  )}
                </div>

                {/* Agent Short Label */}
                <span
                  className={`hidden sm:block mt-2 font-mono text-[10px] tracking-tight transition-colors ${
                    isCurrent
                      ? "text-cyan-300 font-bold"
                      : isCompleted
                      ? "text-slate-300"
                      : "text-slate-500"
                  }`}
                >
                  {agent.name.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Agent Telemetry Card */}
      <div className="mt-6 rounded-xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span
              className="w-3 h-3 rounded-full animate-ping"
              style={{ backgroundColor: currentAgent.color }}
            />
            <h4 className="text-sm sm:text-base font-bold text-white font-heading">
              Current Baton Holder: {currentAgent.name}
            </h4>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Step {activeStep + 1} of 6</span>
            <span className="text-slate-600">|</span>
            <span className="text-violet-300 font-semibold">{currentAgent.model}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 mb-3">
          {currentAgent.role}
        </p>

        <div className="flex items-start gap-2 bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80 font-mono text-xs">
          <span className="text-cyan-400 font-semibold shrink-0">PAYLOAD &gt;</span>
          <span className="text-slate-200">{currentAgent.payload}</span>
        </div>
      </div>
    </div>
  );
}
