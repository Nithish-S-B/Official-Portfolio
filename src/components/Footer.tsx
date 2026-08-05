'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#060608] border-t border-neutral-900 text-neutral-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright & System Tag */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-yellow-400 text-black flex items-center justify-center font-bold text-xs">
            N
          </div>
          <div>
            <p className="text-white font-semibold">© {new Date().getFullYear()} Nithish. All rights reserved.</p>
            <p className="text-neutral-400 text-[11px]">Crafted with Next.js 15, TypeScript & Tailwind CSS</p>
          </div>
        </div>

        {/* Middle: Live Time & Status */}
        <div className="flex flex-wrap items-center gap-4 bg-neutral-900/80 px-4 py-2 rounded-full border border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-300">STATUS: OPERATIONAL</span>
          </div>
          <span className="text-neutral-400">|</span>
          <div className="text-neutral-300">
            <span>TIME: </span>
            <span className="text-yellow-400" suppressHydrationWarning>{timeString || '09:42:00'}</span>
          </div>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-yellow-400/50 text-neutral-300 hover:text-white transition-all shadow-sm"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-yellow-400" />
        </button>

      </div>
    </footer>
  );
};
