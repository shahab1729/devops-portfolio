import React from 'react';
import { X, Terminal, CheckCircle2, Code2 } from 'lucide-react';
import { Github } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0b0f1a] border border-slate-700/80 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#080c14] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-400 font-mono text-xs">
              {project.badge}
            </span>
            <h3 className="text-lg font-bold text-slate-100 font-sans">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">
              // PROJECT OVERVIEW
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-3">
              // KEY ARCHITECTURE IMPLEMENTATIONS
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture / Configuration Code Snippet */}
          {project.architectureCode && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-mono uppercase text-cyan-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>// CONFIGURATION & ARCHITECTURE SNIPPET</span>
                </h4>
              </div>
              <div className="bg-[#050810] border border-slate-800 rounded-xl p-4 overflow-x-auto font-code text-xs text-emerald-300">
                <pre>{project.architectureCode}</pre>
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">
              // TECHNOLOGIES USED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#080c14] border-t border-slate-800 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Github className="w-4 h-4 text-slate-400" />
            <span>Repository on GitHub</span>
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-semibold transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
