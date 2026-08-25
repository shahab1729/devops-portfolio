import React, { useState } from 'react';
import { ExternalLink, Terminal, Boxes, Code2, Layers, CheckCircle2, Eye } from 'lucide-react';
import { Github } from './SocialIcons';
import { portfolioData } from '../data/portfolio';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-20 bg-[#060911] border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <Boxes className="w-3.5 h-3.5" />
            <span>03. DEVOPS_LABS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Hands-on DevOps <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical infrastructure labs built with Docker, AWS, Git, and CI/CD pipelines.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0b0f19] border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-xl"
            >
              {/* Card Top */}
              <div className="p-6 sm:p-7 space-y-4 text-left">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-950/80 border border-cyan-800/70 text-cyan-300">
                    {project.badge}
                  </span>
                  <span className="text-slate-600 font-mono text-xs">
                    Lab Artifact
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 font-sans group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-1">
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs font-mono text-slate-300">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[#080c14] border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-[#080c14] border-t border-slate-800/90 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub Code</span>
                </a>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="px-4 py-2 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Architecture</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
