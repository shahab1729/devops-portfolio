import React, { useState } from 'react';
import { Terminal, ArrowRight, ShieldCheck, Cpu, Play, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { name, title, subtitle, github, linkedin } = portfolioData.personalInfo;
  const { whoami, role, currentFocus } = portfolioData.heroTerminal;

  const terminalCommand = `$ whoami\n${whoami}\n\n$ role\n${role}\n\n$ current_focus\n${currentFocus}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Glow Effects Behind Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for Entry / Junior DevOps Roles</span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight font-sans">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  {name}
                </span>
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-mono font-medium text-slate-300 flex items-center gap-2">
                <span className="text-cyan-500">&gt;</span> {title}
              </p>
            </div>

            {/* Subtitle */}
            <blockquote className="text-base sm:text-lg text-slate-400 max-w-2xl border-l-2 border-cyan-500/60 pl-4 py-1 italic bg-slate-900/30 rounded-r-lg">
              "{subtitle}"
            </blockquote>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 items-center">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="px-6 py-3 rounded-lg font-mono text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-950/60 transition-all flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg font-mono text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg font-mono text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Skills Badges */}
            <div className="pt-4 flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="text-slate-500 uppercase tracking-wider">Stack:</span>
              <div className="flex flex-wrap gap-1.5">
                {['Linux', 'Docker', 'AWS', 'Git', 'CI/CD'].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero Terminal Window */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl border border-slate-800 bg-[#0c101c] shadow-2xl overflow-hidden dev-glow-cyan">
              {/* Terminal Title Bar */}
              <div className="bg-[#080c14] px-4 py-3 border-b border-slate-800/90 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>shahab@devops-workstation:~</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="text-slate-500 hover:text-slate-300 p-1 rounded transition-colors"
                  title="Copy Commands"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Terminal Content Box */}
              <div className="p-5 font-mono text-sm space-y-4 text-left">
                {/* Command 1 */}
                <div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-emerald-400">$</span>
                    <span className="font-semibold text-slate-200">whoami</span>
                  </div>
                  <div className="mt-1 text-slate-300 pl-4 border-l border-slate-800">
                    {whoami}
                  </div>
                </div>

                {/* Command 2 */}
                <div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-emerald-400">$</span>
                    <span className="font-semibold text-slate-200">role</span>
                  </div>
                  <div className="mt-1 text-emerald-400 pl-4 border-l border-slate-800 font-semibold">
                    {role}
                  </div>
                </div>

                {/* Command 3 */}
                <div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-emerald-400">$</span>
                    <span className="font-semibold text-slate-200">current_focus</span>
                  </div>
                  <div className="mt-1 text-amber-300 pl-4 border-l border-slate-800">
                    {currentFocus}
                  </div>
                </div>

                {/* Prompt Line */}
                <div className="pt-2 flex items-center gap-2 text-slate-500 text-xs border-t border-slate-900">
                  <span className="text-emerald-500">shahab@node-01:~$</span>
                  <span className="w-2 h-4 bg-cyan-400 inline-block animate-blink"></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
