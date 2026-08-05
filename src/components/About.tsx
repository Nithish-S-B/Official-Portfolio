'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Brain, GraduationCap, Compass, Lightbulb, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 bg-[#09090b] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-yellow-400 mb-4">
            <Brain className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How I Think & Build Software
          </h2>
        </div>

        {/* Narrative Philosophy */}
        <div className="mb-16 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-neutral-900/30 p-8 sm:p-10 rounded-2xl border border-neutral-800/80 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[120px] pointer-events-none" />
          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal max-w-5xl">
            {about.philosophy}
          </p>
        </div>

        {/* Cards Grid: Education, Currently Exploring & Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Education */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="glass-panel p-8 rounded-2xl flex flex-col justify-between border border-neutral-800/80 hover:border-neutral-700 transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-6">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Education</h3>
              <p className="text-sm font-semibold text-yellow-400 mb-1">{about.education.degree}</p>
              <p className="text-xs text-neutral-400 mb-6 font-mono">{about.education.institution} • {about.education.period}</p>

              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">Key Focus Areas</h4>
              <ul className="space-y-2">
                {about.education.coursework.map((course, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Currently Exploring */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="glass-panel p-8 rounded-2xl flex flex-col justify-between border border-neutral-800/80 hover:border-neutral-700 transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Currently Exploring</h3>

              <div className="space-y-5">
                {about.exploring.map((item, idx) => (
                  <div key={idx} className="border-b border-neutral-800/80 pb-4 last:border-0 last:pb-0">
                    <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                      <span className="text-yellow-400 font-mono text-xs">0{idx + 1}.</span>
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Engineering Principles */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="glass-panel p-8 rounded-2xl flex flex-col justify-between border border-neutral-800/80 hover:border-neutral-700 transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-6">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Engineering Principles</h3>

              <div className="space-y-5">
                {about.principles.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
