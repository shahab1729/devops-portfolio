import React, { useState } from 'react';
import { Compass, CheckCircle2, Clock, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Journey() {
  const [activeStep, setActiveStep] = useState(4); // Default selected node (Docker/AWS)
  const timeline = portfolioData.devopsJourney;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Mastered Basics':
        return <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-semibold">✓ Mastered Basics</span>;
      case 'Active Learning':
        return <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-amber-950/80 border border-amber-800 text-amber-300 font-semibold animate-pulse">★ Active Focus</span>;
      case 'Upcoming Focus':
        return <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-700 text-slate-400">⚡ Upcoming</span>;
      default:
        return null;
    }
  };

  return (
    <section id="journey" className="py-20 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>04. LEARNING_ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            DevOps <span className="text-indigo-400">Journey & Growth</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A realistic roadmap highlighting foundational skills mastered, active learning goals, and future milestones.
          </p>
        </div>

        {/* Timeline Path Flow (Horizontal on desktop / Vertical on mobile) */}
        <div className="mt-14 bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6 sm:p-8">
          
          {/* Node Selector Bar */}
          <div className="overflow-x-auto pb-4 pt-2">
            <div className="flex items-center justify-between min-w-[700px] relative px-4">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-800 -translate-y-1/2 z-0"></div>

              {timeline.map((item, index) => {
                const isSelected = activeStep === index;
                const isCompleted = item.status === 'Mastered Basics';
                const isCurrent = item.status === 'Active Learning';

                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className="relative z-10 flex flex-col items-center group focus:outline-none"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 ${
                        isSelected
                          ? 'bg-cyan-400 text-slate-950 ring-4 ring-cyan-500/20 scale-110'
                          : isCurrent
                          ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-500/20 animate-bounce'
                          : isCompleted
                          ? 'bg-emerald-950 border-2 border-emerald-500 text-emerald-300'
                          : 'bg-slate-900 border-2 border-slate-700 text-slate-500'
                      }`}
                    >
                      {index + 1}
                    </div>

                    <span className={`mt-2 font-mono text-xs whitespace-nowrap font-medium transition-colors ${
                      isSelected ? 'text-cyan-400 font-bold' : isCurrent ? 'text-amber-300' : 'text-slate-400'
                    }`}>
                      {item.stage}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Selected Step Display Card */}
          <div className="mt-8 bg-[#070a12] border border-slate-800 rounded-xl p-6 sm:p-8 text-left transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-mono text-sm font-bold">
                    STEP 0{activeStep + 1} OF 09
                  </span>
                  {getStatusBadge(timeline[activeStep].status)}
                </div>
                <h3 className="mt-1 text-2xl font-bold text-slate-100 font-sans">
                  {timeline[activeStep].title}
                </h3>
              </div>

              <div className="font-mono text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                Stage: <span className="text-slate-200">{timeline[activeStep].stage}</span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <p className="text-slate-300 text-base leading-relaxed">
                {timeline[activeStep].description}
              </p>
            </div>

            {/* Stage Quick Navigation Prev / Next */}
            <div className="mt-6 pt-4 border-t border-slate-900 flex justify-between items-center text-xs font-mono">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Previous Stage
              </button>

              <span className="text-slate-500 hidden sm:inline">
                Click any step node above to jump
              </span>

              <button
                disabled={activeStep === timeline.length - 1}
                onClick={() => setActiveStep(prev => Math.min(timeline.length - 1, prev + 1))}
                className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next Stage →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
