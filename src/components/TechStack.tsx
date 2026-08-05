'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, TechItem } from '@/data/portfolio';
import { Cpu, Terminal, Sparkles, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export const TechStack: React.FC = () => {
  const { techStack } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'AI / ML', 'Frameworks', 'Databases & Vector', 'Cloud & MLOps', 'Tools'];

  const filteredTech = selectedCategory === 'All'
    ? techStack
    : techStack.filter(t => t.category === selectedCategory);

  return (
    <section id="tech-stack" className="py-24 bg-[#09090b] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-yellow-400 mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>PRODUCTION TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Tech Stack & Engineering Skills
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-900/90 p-1.5 rounded-xl border border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-yellow-400 text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredTech.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: idx * 0.02 }}
              whileHover={{ y: -3 }}
              className={`p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                item.featured
                  ? 'bg-neutral-900/90 border-yellow-400/30 hover:border-yellow-400/70 shadow-lg'
                  : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-tight">
                  {item.category}
                </span>
                {item.featured && (
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" title="Core Expertise" />
                )}
              </div>

              <h3 className="text-sm font-bold text-white mb-1 tracking-tight">
                {item.name}
              </h3>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60 mt-2">
                <span className="text-[11px] font-mono text-neutral-400">Proficiency</span>
                <span className="text-[11px] font-mono text-yellow-400 font-semibold">{item.level}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
