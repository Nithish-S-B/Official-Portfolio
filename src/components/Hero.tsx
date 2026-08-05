'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowRight, FileText, Sparkles, Terminal, ShieldCheck, Zap, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenAskAI: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAskAI }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-grid-pattern overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-neutral-800/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Bold Headline & Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono mb-6 text-neutral-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
              <span className="text-neutral-600">|</span>
              <span className="text-yellow-400 font-semibold">{personal.location}</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">Intelligent Systems</span> <br className="hidden sm:inline" />
              & <span className="text-yellow-400 underline decoration-yellow-400/40 underline-offset-8">Scalable AI Pipelines</span>
            </h1>

            {/* Subheading / Impact Statement */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed mb-8 font-normal">
              I architect high-throughput Large Language Model serving infrastructure, sub-50ms RAG retrieval engines, and production-grade agent workflows. Turning cutting-edge deep learning research into deterministic, high-impact software.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-black bg-yellow-400 hover:bg-yellow-300 rounded-xl transition-all duration-200 shadow-lg hover:shadow-yellow-400/20 active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personal.resumeUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-all duration-200 w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 text-neutral-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenAskAI}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/15 border border-yellow-400/30 hover:border-yellow-400/60 rounded-xl transition-all w-full sm:w-auto"
              >
                <Bot className="w-4 h-4" />
                <span>Ask AI</span>
              </button>
            </div>

            {/* Key Metrics / Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-neutral-800/80">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Corporate Headshot with Premium Framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Backdrop glow ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-yellow-400/30 via-neutral-800/50 to-yellow-400/10 blur-xl opacity-70 animate-pulse-glow" />

            <div className="relative w-full max-w-md bg-neutral-900/90 border border-neutral-800/90 rounded-2xl p-3 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Top Bar Decoration */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/80 mb-3 text-xs text-neutral-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-neutral-500">nithish_profile.jpg</span>
              </div>

              {/* Headshot Image Container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-950 group">
                <Image
                  src="/profile.jpg"
                  alt="Nithish - Corporate Headshot"
                  fill
                  priority
                  className="object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                {/* Floating Info Pill 1 */}
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-yellow-400/30 flex items-center gap-2 text-xs font-mono text-yellow-400 shadow-xl">
                  <Zap className="w-3.5 h-3.5" />
                  <span>vLLM & RAG</span>
                </div>

                {/* Floating Info Pill 2 */}
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 backdrop-blur-md p-3 rounded-xl border border-neutral-800/90 flex items-center justify-between shadow-2xl">
                  <div>
                    <h2 className="text-xs font-bold font-mono text-white tracking-wide">NITHISH</h2>
                    <p className="text-[11px] text-neutral-400">AI / ML Infrastructure</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified AI Eng</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>SYSTEM_STATUS: OK</span>
                <span className="text-yellow-400/80">LLM_SERVE_READY</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
