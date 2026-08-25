import React from 'react';
import { ShieldCheck, Server, Cpu, Terminal, CheckCircle2, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { summary, corePillars, focusAreas } = portfolioData.about;

  return (
    <section id="about" className="py-20 bg-[#060911] border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>01. ABOUT_ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Building Infrastructure Through <span className="text-cyan-400">Practical Labs</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {summary}
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#0b0f19] border border-slate-800 hover:border-slate-700 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-colors mb-4">
                {idx === 0 && <Server className="w-6 h-6" />}
                {idx === 1 && <Cpu className="w-6 h-6" />}
                {idx === 2 && <Layers className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-sans mb-2">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Core Technical Focus Areas Tags */}
        <div className="mt-12 bg-[#0a0e1a] border border-slate-800/90 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-mono font-bold text-slate-200">
              Primary Technical Focus Areas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-[#0d1222] border border-slate-800/80 hover:border-cyan-800/50 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm font-mono text-slate-300">{area}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
