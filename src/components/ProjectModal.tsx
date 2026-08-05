'use client';

import React from 'react';
import { Project } from '@/data/portfolio';
import { X, ExternalLink, CheckCircle, Code2, Layers, Cpu, BarChart2 } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0d10] border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{project.category} CASE STUDY</span>
          </div>

          {/* Modal Header Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 pr-8">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mb-6">
            {project.subtitle}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-neutral-800">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all"
            >
              <GithubIcon className="w-4 h-4 text-neutral-400" />
              <span>View Source Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-yellow-400 hover:bg-yellow-300 rounded-lg transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 mb-8">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <span className="block text-lg sm:text-xl font-bold font-mono text-yellow-400">{m.value}</span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Detailed Content */}
          <div className="space-y-8 text-neutral-300">
            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-yellow-400" />
                <span>Overview & Context</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-yellow-400" />
                <span>Engineering Challenge</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-yellow-400" />
                <span>Architectural Highlights</span>
              </h3>
              <ul className="space-y-2.5">
                {project.caseStudy.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.caseStudy.codeSnippet && (
              <div>
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-yellow-400" />
                  <span>Core Implementation Snippet</span>
                </h3>
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-neutral-300 overflow-x-auto">
                  <pre><code>{project.caseStudy.codeSnippet}</code></pre>
                </div>
              </div>
            )}

            <div>
              <h3 className="text-base font-bold text-white mb-3">Key Results & Impact</h3>
              <ul className="space-y-2">
                {project.caseStudy.results.map((res, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
