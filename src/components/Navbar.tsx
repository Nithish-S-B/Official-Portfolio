'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Bot, FileText, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenAskAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAskAI }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Journey', href: '#journey' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#09090b]/80 backdrop-blur-xl border-b border-neutral-800/60 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-wider text-white"
        >
          <div className="w-8 h-8 rounded-lg bg-yellow-400 text-black flex items-center justify-center font-mono font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform">
            N
          </div>
          <span className="font-mono text-neutral-200 tracking-tight group-hover:text-yellow-400 transition-colors">
            NITHISH <span className="text-yellow-400 text-xs tracking-normal ml-1 px-1.5 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">AI/ML</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-neutral-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/80 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Ask AI Pill */}
          <button
            onClick={onOpenAskAI}
            className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-neutral-900 text-neutral-200 border border-yellow-400/30 hover:border-yellow-400 hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(250,204,21,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            <Bot className="w-3.5 h-3.5 text-yellow-400 group-hover:rotate-12 transition-transform" />
            <span>Ask Nithish AI</span>
          </button>

          {/* Resume CTA */}
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-black bg-yellow-400 hover:bg-yellow-300 rounded-full transition-all duration-200 shadow-md hover:shadow-yellow-400/20 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenAskAI}
            className="p-2 rounded-lg bg-yellow-400/10 border border-yellow-400/30 text-yellow-400"
            aria-label="Ask AI"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#09090b]/95 backdrop-blur-2xl border-b border-neutral-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-300 hover:text-yellow-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAskAI();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-lg bg-neutral-900 text-yellow-400 border border-yellow-400/40"
            >
              <Bot className="w-4 h-4" />
              Ask Nithish AI Assistant
            </button>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-black bg-yellow-400 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
