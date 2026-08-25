import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, Trash2, HelpCircle, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Terminal() {
  const commandOutputs = portfolioData.interactiveTerminalCommands;
  
  const [history, setHistory] = useState([
    {
      command: 'docker ps',
      output: commandOutputs['docker ps']
    }
  ]);
  
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef(null);

  const presetCommands = [
    'docker ps',
    'kubectl get pods',
    'git status',
    'systemctl status nginx',
    'aws s3 ls',
    'uname -a',
    'help'
  ];

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = commandOutputs[trimmed] || `bash: command not found: ${trimmed}. Type 'help' to see list of valid commands.`;

    setHistory((prev) => [
      ...prev,
      { command: cmdStr, output }
    ]);
    setInputVal('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleCopyTerminal = () => {
    const text = history.map(h => `$ ${h.command}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="py-20 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>06. INTERACTIVE_SHELL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            DevOps <span className="text-cyan-400">Interactive Terminal</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Click preset commands or type directly in the shell to inspect Docker containers, Kubernetes pods, and system status.
          </p>
        </div>

        {/* Preset Command Quick Bar */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-slate-500 self-center mr-2 hidden sm:inline">
            PRESETS:
          </span>
          {presetCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-3 py-1 rounded bg-[#0b0f19] hover:bg-cyan-950/80 border border-slate-800 hover:border-cyan-800 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all flex items-center gap-1.5"
            >
              <Play className="w-3 h-3 text-cyan-400" />
              <span>{cmd}</span>
            </button>
          ))}
          <button
            onClick={() => setHistory([])}
            className="px-3 py-1 rounded bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/60 text-xs font-mono text-rose-300 transition-all flex items-center gap-1.5"
            title="Clear Terminal Output"
          >
            <Trash2 className="w-3 h-3" />
            <span>clear</span>
          </button>
        </div>

        {/* Main Interactive Terminal Window */}
        <div className="mt-6 max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-[#070b14] shadow-2xl overflow-hidden dev-glow-cyan text-left">
          
          {/* Header Bar */}
          <div className="bg-[#05080f] px-4 py-3 border-b border-slate-800/90 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>bash - shahab@node-01:~#</span>
            </div>
            <button
              onClick={handleCopyTerminal}
              className="text-slate-400 hover:text-slate-200 text-xs font-mono p-1 rounded flex items-center gap-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Terminal Console Output Window */}
          <div className="p-6 font-code text-xs sm:text-sm h-[380px] overflow-y-auto space-y-4">
            
            {/* Initial Welcome Banner */}
            <div className="text-slate-500 text-xs pb-2 border-b border-slate-900">
              DevOps Environment Shell v2.4 (Ubuntu 22.04 LTS x86_64)
              <br />
              Type <span className="text-cyan-400">'help'</span> for available commands or click any preset button above.
            </div>

            {/* Render Output History */}
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">shahab@node-01:~$</span>
                  <span className="text-cyan-300 font-semibold">{item.command}</span>
                </div>
                <div className="bg-[#04060c] p-3 rounded-lg border border-slate-900 text-slate-300 whitespace-pre-wrap overflow-x-auto leading-relaxed">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Live Command Form Input Line */}
            <form onSubmit={handleFormSubmit} className="pt-2 flex items-center gap-2">
              <span className="text-emerald-400 flex-shrink-0">shahab@node-01:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command here (e.g. docker ps, git status, help)..."
                className="w-full bg-transparent text-slate-100 font-mono text-xs sm:text-sm focus:outline-none placeholder-slate-600"
              />
            </form>
            <div ref={terminalEndRef} />
          </div>

        </div>

      </div>
    </section>
  );
}
