import React, { useState, useEffect } from 'react';
import { GitCommit, GitPullRequest, Flame, Calendar, ExternalLink, RefreshCw } from 'lucide-react';
import { Github } from './SocialIcons';
import { portfolioData } from '../data/portfolio';

export default function GitHubActivity() {
  const [loading, setLoading] = useState(false);
  const [useLiveApi, setUseLiveApi] = useState(false);
  const { totalContributions, streak, recentCommits } = portfolioData.githubActivity;

  // Generate 52 weeks x 7 days contribution grid matrix simulation
  const generateContributionMatrix = () => {
    const matrix = [];
    const intensityLevels = ['bg-slate-900', 'bg-emerald-950', 'bg-emerald-800', 'bg-emerald-600', 'bg-emerald-400'];
    
    // Seed pseudo-random commit activity pattern
    for (let w = 0; w < 48; w++) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        // High density activity in recent weeks
        const val = Math.floor(Math.sin(w * 0.4 + d * 0.7) * 2.5 + Math.random() * 2.5);
        const levelIndex = Math.max(0, Math.min(4, val));
        week.push(intensityLevels[levelIndex]);
      }
      matrix.push(week);
    }
    return matrix;
  };

  const [heatmap] = useState(generateContributionMatrix);

  // Extensible GitHub API fetch stub
  const handleToggleLiveApi = async () => {
    setLoading(true);
    // Simulated API call latency
    setTimeout(() => {
      setLoading(false);
      setUseLiveApi(!useLiveApi);
    }, 600);
  };

  return (
    <section id="github-activity" className="py-20 bg-[#060911] border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono">
            <Github className="w-3.5 h-3.5" />
            <span>05. GITHUB_ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Open Source & <span className="text-emerald-400">DevOps Commit Log</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Track record of continuous code commits, shell scripts, and infrastructure configuration files.
          </p>
        </div>

        {/* Heatmap & Stats Container Card */}
        <div className="mt-12 bg-[#0b0f19] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          
          {/* Top Bar Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#080c14] border border-slate-800">
              <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400">
                <GitCommit className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-slate-100 font-mono">482</div>
                <div className="text-xs text-slate-400 font-mono">Commits in Last Year</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#080c14] border border-slate-800">
              <div className="p-2.5 rounded-lg bg-amber-950/80 border border-amber-800 text-amber-400">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-slate-100 font-mono">14 Days</div>
                <div className="text-xs text-slate-400 font-mono">Active Commit Streak</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#080c14] border border-slate-800">
              <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-400">
                <GitPullRequest className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-slate-100 font-mono">100%</div>
                <div className="text-xs text-slate-400 font-mono">PR Code Reviews</div>
              </div>
            </div>
          </div>

          {/* GitHub Contribution Heatmap Grid */}
          <div className="mt-6 text-left">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-300">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Contribution Activity Matrix</span>
              </div>
              <button
                onClick={handleToggleLiveApi}
                className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                title="Toggle GitHub API Mode"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                <span>{useLiveApi ? 'Live API Mode' : 'Simulated Grid'}</span>
              </button>
            </div>

            {/* Matrix Visualizer */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1.5 min-w-[700px]">
                {heatmap.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.map((colorClass, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3 h-3 rounded-sm ${colorClass} border border-black/30 hover:border-white/50 transition-colors`}
                        title={`Day ${dIdx + 1}, Week ${wIdx + 1}`}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Heatmap Legend */}
            <div className="mt-4 flex items-center justify-end space-x-2 text-[11px] font-mono text-slate-500">
              <span>Less</span>
              <div className="w-3 h-3 rounded-sm bg-slate-900 border border-slate-800"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-950"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-800"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-600"></div>
              <div className="w-3 h-3 rounded-sm bg-emerald-400"></div>
              <span>More</span>
            </div>
          </div>

          {/* Recent DevOps Commit Activity Stream */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-left">
            <h3 className="text-sm font-mono uppercase text-slate-300 font-bold mb-4 flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-cyan-400" />
              <span>Recent Commit Activity Log</span>
            </h3>

            <div className="space-y-3">
              {recentCommits.map((commit, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-[#080c14] border border-slate-800/80 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 font-mono text-xs font-bold mt-0.5">
                      {commit.sha}
                    </div>
                    <div>
                      <div className="font-mono text-sm text-slate-200 font-semibold">
                        {commit.message}
                      </div>
                      <div className="text-xs font-mono text-slate-500 mt-0.5">
                        Repo: <span className="text-slate-400">{commit.repo}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-500 self-end sm:self-center">
                    {commit.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
