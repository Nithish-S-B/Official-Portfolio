"use client";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Check, Copy, FileText, Mail, Send } from "lucide-react";
import React, { useState } from "react";

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setFeedbackMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send message.");
      }

      setFeedbackMessage({
        type: "success",
        text: "Message sent! I will respond shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFeedbackMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Unable to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#09090b] relative border-t border-neutral-900"
    >
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

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6 max-w-lg">
              Whether you are hiring for an **AI Engineer / ML Engineer** role,
              looking to collaborate on high-performance LLM infrastructure, or
              exploring technical partnerships—my inbox is always open.
            </p>

            <div className="w-full rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-3 mb-6 text-sm text-yellow-100">
              <p className="font-semibold">
                The contact form is currently in progress.
              </p>
              <p className="mt-1 text-xs text-neutral-300">
                For now, please reach out directly using the email below.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="w-full p-4 sm:p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between gap-4 mb-8 shadow-xl">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="block text-[11px] font-mono text-neutral-400">
                    Direct Email
                  </span>
                  <span className="text-sm font-bold font-mono text-white truncate">
                    {personal.email}
                  </span>
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
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-neutral-400 mb-6 font-mono">
                The form is still being prepared; direct email remains the best
                way to reach out right now.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-yellow-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-yellow-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly describe your role, project, or inquiry..."
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-yellow-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 text-xs font-semibold rounded-xl bg-yellow-400 text-black hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                {feedbackMessage && (
                  <div
                    className={`rounded-xl border px-4 py-3 text-center ${
                      feedbackMessage.type === "success"
                        ? "bg-yellow-400/10 border-yellow-400/40"
                        : "bg-red-500/10 border-red-500/40"
                    }`}
                  >
                    <p className="text-xs text-neutral-300">
                      {feedbackMessage.text}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
