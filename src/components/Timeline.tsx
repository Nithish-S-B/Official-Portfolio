'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { GitCommit, Briefcase, GraduationCap, Award, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const Timeline: React.FC = () => {
  const { timeline } = PORTFOLIO_DATA;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Internship':
        return <Briefcase className="w-4 h-4 text-yellow-400" />;
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-yellow-400" />;
      case 'Milestone':
        return <Award className="w-4 h-4 text-yellow-400" />;
      default:
        return <Search className="w-4 h-4 text-yellow-400" />;
    }
  };

  return (
    <section id="journey" className="py-24 bg-[#09090b] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-yellow-400 mb-4">
            <GitCommit className="w-3.5 h-3.5" />
            <span>JOURNEY & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experience, Education & Research
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-neutral-800 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-9 h-9 rounded-full bg-neutral-950 border border-neutral-800 group-hover:border-yellow-400 flex items-center justify-center transition-colors shadow-lg">
                {getTypeIcon(item.type)}
              </div>

              {/* Card Content */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-neutral-800/90 group-hover:border-neutral-700 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-yellow-400 font-semibold px-2.5 py-1 rounded bg-yellow-400/10 border border-yellow-400/30">
                    {item.year}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wide">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-neutral-400 mb-4">
                  {item.organization}
                </p>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
