import React from 'react';
import { Terminal, Shield, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04070d] border-t border-slate-800/80 py-10 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Status */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-slate-200 text-sm">
                SHAHAB SHAIKH // DEVOPS PORTFOLIO
              </span>
            </div>
            <div className="flex items-center space-x-2 text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Status: All Infrastructure Operational • Uptime 99.9%</span>
            </div>
          </div>

          {/* Center Info */}
          <div className="text-center text-slate-500">
            Designed for Linux, Docker, AWS & Infrastructure Automation
            <br />
            © {new Date().getFullYear()} Shahab Shaikh. Built with React & Tailwind CSS.
          </div>

          {/* Right Action */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
}
