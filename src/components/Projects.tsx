"use client";

import { GithubIcon } from "@/components/icons";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Layers } from "lucide-react";
import React, { useState } from "react";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "GenAI & LLMs",
    "Computer Vision",
    "MLOps & Systems",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 bg-[#09090b] relative border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-yellow-400 mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured AI & ML Engineering Projects
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-900/90 p-1.5 rounded-xl border border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                  activeCategory === cat
                    ? "bg-yellow-400 text-black font-semibold shadow-md"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-2xl border border-neutral-800/90 overflow-hidden flex flex-col justify-between group hover:border-yellow-400/40 transition-all duration-300 shadow-xl"
            >
              {/* Card Header */}
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border-b border-neutral-800/80">
                <div className="mb-6 overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-950/70">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    loading="lazy"
                    className="aspect-square w-full object-contain p-3 sm:p-4"
                  />
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-[11px] font-mono font-medium">
                    {project.category}
                  </span>
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-neutral-800/80 border border-neutral-700/60 text-neutral-300 text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Performance Metrics Row */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-neutral-800/80">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-sm font-bold font-mono text-yellow-400">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 bg-neutral-900/50 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-yellow-400 transition-colors group/btn"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                    aria-label="GitHub Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
