'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ShieldCheck, Database, Cpu, Zap, Bot, Eye, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Capabilities: React.FC = () => {
  const { capabilities } = PORTFOLIO_DATA;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Database': return <Database className="w-5 h-5 text-yellow-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-yellow-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-yellow-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-yellow-400" />;
      default: return <BarChart3 className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 bg-[#09090b] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-yellow-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering Capabilities & Strengths
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-8 rounded-2xl border border-neutral-800/90 hover:border-yellow-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-6">
                  {getIcon(cap.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80">
                {cap.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
