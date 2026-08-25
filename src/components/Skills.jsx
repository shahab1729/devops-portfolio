import React, { useState } from 'react';
import { 
  Terminal, 
  Server, 
  Cloud, 
  Network, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Boxes,
  Globe,
  FileCode,
  HardDrive
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const skillCategories = portfolioData.skillCategories;

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'os': return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'devops': return <Boxes className="w-5 h-5 text-emerald-400" />;
      case 'cloud': return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'networking': return <Network className="w-5 h-5 text-indigo-400" />;
      case 'programming': return <Code2 className="w-5 h-5 text-rose-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getTechIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'linux': return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'ubuntu': return <Server className="w-4 h-4 text-orange-400" />;
      case 'bash': return <FileCode className="w-4 h-4 text-emerald-400" />;
      case 'docker': return <Boxes className="w-4 h-4 text-blue-400" />;
      case 'docker compose': return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'git': return <Code2 className="w-4 h-4 text-red-400" />;
      case 'github': return <Code2 className="w-4 h-4 text-slate-200" />;
      case 'ci/cd': return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'aws': return <Cloud className="w-4 h-4 text-amber-400" />;
      case 'ec2': return <Server className="w-4 h-4 text-amber-500" />;
      case 'ebs': return <HardDrive className="w-4 h-4 text-amber-300" />;
      case 'security groups': return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'tcp/ip': return <Network className="w-4 h-4 text-blue-400" />;
      case 'dns': return <Globe className="w-4 h-4 text-indigo-400" />;
      case 'http/https': return <Globe className="w-4 h-4 text-teal-400" />;
      case 'ssh': return <ShieldCheck className="w-4 h-4 text-green-400" />;
      case 'ports & firewalls': return <ShieldCheck className="w-4 h-4 text-amber-400" />;
      case 'python': return <Code2 className="w-4 h-4 text-yellow-400" />;
      case 'javascript': return <Code2 className="w-4 h-4 text-amber-300" />;
      default: return <Cpu className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>02. SKILL_MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            DevOps Technical <span className="text-emerald-400">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Categorized skills with practical context and real project usage instead of arbitrary percentages.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedCategory === 'all'
                ? 'bg-slate-200 text-slate-900 font-bold shadow'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            ALL CATEGORIES
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-950'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#0b0f1a] border border-slate-800/90 hover:border-slate-700 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-100 font-sans">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-mono">
                        {category.skills.length} core tools
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="bg-[#080c14] border border-slate-800/60 rounded-lg p-3 hover:border-cyan-800/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {getTechIcon(skill.name)}
                          <span className="font-mono font-semibold text-sm text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/70 border border-cyan-800/60 text-cyan-300">
                          {skill.level}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed font-sans">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
