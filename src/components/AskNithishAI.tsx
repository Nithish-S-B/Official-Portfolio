'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Bot, Send, Sparkles, RefreshCw, Terminal, User, Zap, CornerDownLeft, Volume2, VolumeX, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  source?: string;
  isStreaming?: boolean;
}

export const AskNithishAI: React.FC = () => {
  const { aiAssistant } = PORTFOLIO_DATA;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'assistant',
      text: "Hello! I am **Ask Nithish AI**, an interactive intelligence trained on Nithish's engineering background, projects, and architecture decisions. How can I assist you today?",
      timestamp: 'ONLINE',
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      const replyText = data.reply || aiAssistant.defaultResponse;

      // Simulated streaming typewriter effect
      const botMessageId = (Date.now() + 1).toString();
      setMessages((prev) => [
        ...prev,
        {
          id: botMessageId,
          sender: 'assistant',
          text: '',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          source: data.source || 'local-rag',
          isStreaming: true,
        },
      ]);

      let currentLength = 0;
      const interval = setInterval(() => {
        currentLength += 4;
        if (currentLength >= replyText.length) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId
                ? { ...msg, text: replyText, isStreaming: false }
                : msg
            )
          );
          clearInterval(interval);
          setIsLoading(false);
        } else {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId
                ? { ...msg, text: replyText.slice(0, currentLength) }
                : msg
            )
          );
        }
      }, 15);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'assistant',
          text: "I experienced a temporary connection issue. Please try again or reach Nithish directly at nithish.ai.eng@gmail.com.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'assistant',
        text: "Conversation reset. Feel free to ask another question about Nithish's experience, RAG architecture, or project case studies!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <section id="ask-ai" className="py-24 bg-[#09090b] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-xs font-mono text-yellow-400 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIGNATURE FEATURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Ask Nithish AI Assistant
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
            An interactive RAG-powered intelligence agent designed to answer recruiter, engineering lead, and visitor queries about Nithish's projects, technical skills, and software philosophy.
          </p>
        </div>

        {/* AI Product Interface Terminal */}
        <div className="relative w-full max-w-5xl mx-auto bg-neutral-950/90 border border-yellow-400/30 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-neutral-900/90 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-yellow-400 text-black flex items-center justify-center font-mono font-bold text-xs shadow-md">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold font-mono text-white flex items-center gap-2">
                  Ask Nithish AI <span className="text-[10px] text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/30">RAG v1.2</span>
                </h3>
                <span className="text-[11px] text-neutral-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Model Ready • Sub-25ms Index Search
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700 text-neutral-400 hover:text-white transition-all"
                title={soundEnabled ? "Mute audio cues" : "Unmute audio cues"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-yellow-400" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <button
                onClick={handleReset}
                className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700 text-neutral-400 hover:text-white transition-all"
                title="Reset conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Scroll Container */}
          <div ref={chatContainerRef} className="p-6 sm:p-8 h-[440px] overflow-y-auto space-y-6 bg-grid-pattern">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 sm:gap-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/40 text-yellow-400 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`relative max-w-2xl rounded-2xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-yellow-400 text-black font-medium shadow-md'
                    : 'bg-neutral-900/90 border border-neutral-800 text-neutral-200 shadow-xl'
                }`}>
                  <div className="whitespace-pre-wrap font-sans">
                    {msg.text}
                    {msg.isStreaming && <span className="inline-block w-2 h-4 bg-yellow-400 ml-1 animate-pulse" />}
                  </div>

                  {/* Message Meta Footer */}
                  <div className="flex items-center justify-between gap-4 mt-3 pt-2 border-t border-neutral-800/40 text-[10px] opacity-70">
                    <span className="font-mono" suppressHydrationWarning>{msg.timestamp}</span>
                    {msg.sender === 'assistant' && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="hover:opacity-100 transition-opacity flex items-center gap-1 font-mono"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-300 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-3 text-xs font-mono text-yellow-400">
                <div className="w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                </div>
                <span>Synthesizing response from Nithish's profile knowledge graph...</span>
              </div>
            )}
          </div>

          {/* Quick Sample Prompts Bar */}
          <div className="px-6 py-3 bg-neutral-900/60 border-t border-neutral-800 flex items-center gap-2 overflow-x-auto">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-tight shrink-0 flex items-center gap-1">
              <Zap className="w-3 h-3 text-yellow-400" /> Suggestions:
            </span>
            {aiAssistant.samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="px-3 py-1 rounded-full bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700/60 text-[11px] font-medium text-neutral-300 hover:text-white shrink-0 transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Box */}
          <div className="p-4 bg-neutral-900 border-t border-neutral-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask anything about Nithish (e.g. 'What RAG architecture did he use in NexusRAG?')..."
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-yellow-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-all pr-10"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none hidden sm:flex items-center gap-1 text-[10px] font-mono border border-neutral-800 px-1.5 py-0.5 rounded">
                  <CornerDownLeft className="w-3 h-3" />
                  <span>Enter</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="px-5 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-black font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md active:scale-95 shrink-0"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
