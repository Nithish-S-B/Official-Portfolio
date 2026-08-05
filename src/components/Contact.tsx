'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Mail, FileText, Copy, Check, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#09090b] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-yellow-400 mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Let's Build Something Extraordinary.
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 max-w-lg">
              Whether you are hiring for an **AI Engineer / ML Engineer** role, looking to collaborate on high-performance LLM infrastructure, or exploring technical partnerships—my inbox is always open.
            </p>

            {/* Email Copy Card */}
            <div className="w-full p-4 sm:p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between gap-4 mb-8 shadow-xl">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="block text-[11px] font-mono text-neutral-400">Direct Email</span>
                  <span className="text-sm font-bold font-mono text-white truncate">{personal.email}</span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-yellow-400 text-black hover:bg-yellow-300 transition-all shrink-0 flex items-center gap-1.5 shadow-md"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-yellow-400/50 rounded-xl transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-yellow-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-yellow-400/50 rounded-xl transition-all"
              >
                <GithubIcon className="w-4 h-4 text-neutral-400" />
                <span>GitHub</span>
              </a>

              <a
                href={personal.resumeUrl}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 hover:border-yellow-400/50 rounded-xl transition-all"
              >
                <FileText className="w-4 h-4 text-neutral-400" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-neutral-800/90 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-neutral-400 mb-6 font-mono">Fast responses guaranteed within 24 hours.</p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-yellow-400/10 border border-yellow-400/40 text-center space-y-2">
                  <Sparkles className="w-8 h-8 text-yellow-400 mx-auto animate-bounce" />
                  <h4 className="text-sm font-bold text-white">Message Received!</h4>
                  <p className="text-xs text-neutral-300">Thank you for reaching out. Nithish will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-yellow-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-yellow-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">Message / Opportunity Details</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your role, project, or inquiry..."
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-yellow-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-xs font-semibold rounded-xl bg-yellow-400 text-black hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
