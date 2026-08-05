'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Star, GitFork, Flame, GitCommit, ExternalLink, Calendar } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { motion } from 'framer-motion';

export const GithubSection: React.FC = () => {
  const { github } = PORTFOLIO_DATA;
  const [hoveredCell, setHoveredCell] = useState<{ day: number; count: number } | null>(null);

  const daysPerWeek = 7;

  const getCellColor = (level: number) => {
    switch (level) {
      case 3:
        return 'bg-yellow-300 border-yellow-300 shadow-[0_0_8px_rgba(253,224,71,0.8)]';

      case 2:
        return 'bg-yellow-500 border-yellow-500';

      case 1:
        return 'bg-yellow-700/40 border-yellow-700/50';

      default:
        return 'bg-neutral-900 border-neutral-800';
    }
  };

  // Pixel font: each letter = array of columns, each column = 7 bits top→bottom (1=lit)
  const FONT: Record<string, number[][]> = {
    N: [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1],
    ],

    I: [
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
    ],

    T: [
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0],
    ],

    H: [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1],
    ],

    S: [
      [0, 1, 1, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1, 1, 0],
    ],
  };

  const GAP: number[][] = [[0, 0, 0, 0, 0, 0, 0]];
  const TEXT = 'NITHISH';

  const allColumns: number[][] = [];
  for (let i = 0; i < TEXT.length; i++) {
    const ch = TEXT[i];
    if (i > 0) allColumns.push(...GAP);
    const letterCols = FONT[ch];
    if (letterCols) allColumns.push(...letterCols);
  }

  const weeks = allColumns.length;

  // Row-based commit level: center rows = bright, edges = dull — creates visual depth
  const getLitLevel = (row: number): number => {
    switch (row) {
      case 3:
        return 3; // brightest center

      case 2:
      case 4:
        return 2; // medium

      case 1:
      case 5:
        return 1; // dull

      case 0:
      case 6:
      default:
        return 1; // very top & bottom
    }
  };

  const gridPattern = allColumns.flatMap((col, colIdx) =>
    col.map((lit, row) => ({
      day: colIdx * daysPerWeek + row + 1,
      level: lit ? getLitLevel(row) : 0,
      count: lit,
    }))
  );

  return (
    <section id="github" className="py-24 bg-[#09090b] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-yellow-400 mb-4">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>OPEN SOURCE & ACTIVITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              GitHub Contributions & Repositories
            </h2>
          </div>

          <a
            href={`https://github.com/${github.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 border border-neutral-800 hover:border-yellow-400/50 rounded-xl transition-all"
          >
            <span>Follow @{github.username}</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>

        {/* Contribution Matrix Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-neutral-800/90 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-mono text-white">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <span>NITHISH • Contribution Art</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded border border-yellow-400/30">
                <Flame className="w-3.5 h-3.5" />
                <span>Signature Grid</span>
              </div>
            </div>

            <div className="text-xs font-mono text-neutral-400 h-5">
              {hoveredCell && hoveredCell.count ? (
                <span>✦ <strong className="text-yellow-400">&apos;NITHISH&apos;</strong> — a pixel says hi!</span>
              ) : (
                <span className="text-yellow-400/60">✦ &apos;NITHISH&apos; in pixel art · hover to explore</span>
              )}
            </div>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-max">
              {gridPattern.map((cell) => (
                <div
                  key={cell.day}
                  onMouseEnter={() => setHoveredCell({ day: cell.day, count: cell.count })}
                  onMouseLeave={() => setHoveredCell(null)}
                  className={`w-3.5 h-3.5 rounded-sm border ${getCellColor(cell.level)} transition-transform hover:scale-125 cursor-pointer`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 text-[11px] font-mono text-neutral-500 mt-4">
            <span>Less</span>
            <div className="w-3 h-3 rounded-sm bg-neutral-900 border border-neutral-800" />
            <div className="w-3 h-3 rounded-sm bg-yellow-600/30 border border-yellow-600/50" />
            <div className="w-3 h-3 rounded-sm bg-yellow-500/60 border border-yellow-500/80" />
            <div className="w-3 h-3 rounded-sm bg-yellow-400 border border-yellow-400" />
            <span>More</span>
          </div>
        </div>

        {/* Top Repositories Grid & Recent Commit Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Top Starred Repositories</span>
            </h3>

            {github.topRepos.map((repo) => (
              <a
                key={repo.name}
                href={(repo as { name: string; stars: number; forks: number; language: string; description: string; url?: string }).url ?? `https://github.com/${github.username}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-6 rounded-xl border border-neutral-800/80 hover:border-yellow-400/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white font-mono flex items-center gap-2">
                    <span className="text-yellow-400 group-hover:underline">/{repo.name}</span>
                  </h4>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400" />
                  </div>
                </div>

                <p className="text-xs text-neutral-400 mb-4">{repo.description}</p>

                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-3 border-t border-neutral-800/60">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    {repo.language}
                  </span>
                  <span>Public Repo</span>
                </div>
              </a>
            ))}
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-neutral-800/80 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <GitCommit className="w-4 h-4 text-yellow-400" />
                <span>Live Commit Feed</span>
              </h3>

              <div className="space-y-5">
                {github.recentCommits.map((commit, idx) => (
                  <div key={idx} className="border-b border-neutral-800/80 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between text-xs font-mono text-yellow-400 mb-1">
                      <span>{commit.repo}</span>
                      <span className="text-neutral-500 text-[10px]">{commit.time}</span>
                    </div>
                    <p className="text-xs text-neutral-300 font-mono leading-relaxed">
                      {commit.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-500 text-center">
              <span>Ready for live GitHub GraphQL API sync</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
