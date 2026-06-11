import React, { useState, useEffect } from 'react';
import { ArrowRight, FileDown } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('terminal');
  const [terminalLines, setTerminalLines] = useState([]);
  const [epoch, setEpoch] = useState(1);
  const [accuracy, setAccuracy] = useState(72.4);
  const [loss, setLoss] = useState(0.85);

  const logs = [
    'dev@rahul-tejwani:~$ npm run dev',
    '> portfolio-v4@1.0.0 dev',
    '> vite',
    '✓ [vite] local server running at http://localhost:5173',
    '⚙ [mongodb] active connection to Atlas Vector cluster',
    '⚙ [pytorch] gpu core detected: CUDA (GeForce RTX)',
    '⚙ [agent] multi-agent orchestrator initialized',
    '● [status] system fully operational.'
  ];

  // Animate Terminal lines typing out
  useEffect(() => {
    setTerminalLines([]);
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < logs.length) {
        const lineToAdd = logs[currentLine];
        setTerminalLines(prev => [...prev, lineToAdd]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  // Neural Net model training simulation loop
  useEffect(() => {
    const trainInterval = setInterval(() => {
      setEpoch(prev => {
        if (prev >= 100) return 1;

        setAccuracy(acc => {
          const next = acc + (98.4 - acc) * 0.05;
          return parseFloat(next.toFixed(2));
        });
        setLoss(l => {
          const next = l - (l - 0.04) * 0.05;
          return parseFloat(next.toFixed(3));
        });

        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(trainInterval);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderTerminalLine = (line) => {
    if (!line) return null;
    if (line.startsWith('dev@')) {
      return (
        <span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">dev@rahul-tejwani:~$</span>{' '}
          <span className="text-text-primary font-medium">npm run dev</span>
        </span>
      );
    }
    if (line.startsWith('✓ [vite]')) {
      return (
        <span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">✓ [vite]</span>{' '}
          <span className="text-text-secondary">local server running at </span>
          <span className="text-cyan-600 dark:text-cyan-400 underline hover:text-cyan-550 dark:hover:text-cyan-300 transition-colors">http://localhost:5173</span>
        </span>
      );
    }
    if (line.startsWith('⚙ [mongodb]')) {
      return (
        <span>
          <span className="text-emerald-600 dark:text-emerald-500 font-bold">⚙ [mongodb]</span>{' '}
          <span className="text-text-secondary">active connection to </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Atlas Vector cluster</span>
        </span>
      );
    }
    if (line.startsWith('⚙ [pytorch]')) {
      return (
        <span>
          <span className="text-rose-600 dark:text-rose-500 font-bold">⚙ [pytorch]</span>{' '}
          <span className="text-text-secondary">gpu core detected: </span>
          <span className="text-orange-600 dark:text-orange-400 font-medium">CUDA (GeForce RTX)</span>
        </span>
      );
    }
    if (line.startsWith('⚙ [agent]')) {
      return (
        <span>
          <span className="text-purple-600 dark:text-purple-400 font-bold">⚙ [agent]</span>{' '}
          <span className="text-text-secondary">multi-agent orchestrator </span>
          <span className="text-indigo-600 dark:text-indigo-300">initialized</span>
        </span>
      );
    }
    if (line.startsWith('● [status]')) {
      return (
        <span>
          <span className="text-emerald-600 dark:text-emerald-400 inline-block animate-pulse mr-1">●</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">[status]</span>{' '}
          <span className="text-text-primary font-medium">system fully operational.</span>
        </span>
      );
    }
    if (line.startsWith('>')) {
      return <span className="text-text-ghost/60">{line}</span>;
    }
    return <span className="text-text-dim">{line}</span>;
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left: Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium bg-text-primary/[0.03] text-text-dim border border-border-primary mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 dark:bg-emerald-400"></span>
            </span>
            Available for Work
          </div>

          {/* Huge Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 leading-[0.95] text-text-primary uppercase font-heading">
            RAHUL RAJA
          </h1>

          {/* Role line with accent */}
          <div className="flex items-center gap-4 mb-8">
            <div className="section-line"></div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-medium text-text-ghost">
              Full Stack Developer & AI/ML Engineer
            </span>
          </div>

          {/* Short Description */}
          <p className="max-w-lg text-sm sm:text-base text-text-dim mb-10 leading-relaxed font-light">
            I bridge the gap between enterprise-grade Full-Stack architectures and advanced Deep Learning pipelines, transforming complex mathematical models into production-ready software solutions.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="px-8 py-3.5 bg-text-primary text-bg-pure font-semibold rounded-lg hover:bg-text-secondary hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 text-sm tracking-wide"
            >
              View Work <ArrowRight size={14} className="ml-1" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1HSw-zrNUblHInZHOwKa2Au6XCxvcq69J"
              download="Rahul_Raja_Resume.pdf"
              className="px-8 py-3.5 bg-transparent text-text-secondary border border-border-secondary font-medium rounded-lg hover:border-text-ghost/50 hover:bg-text-primary/[0.03] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 text-sm tracking-wide"
            >
              <FileDown size={14} className="text-text-ghost mr-1" /> Resume
            </a>
          </div>
        </div>

        {/* Right: Stateful Cockpit Console */}
        <div className="hidden lg:block lg:col-span-5 w-full">
          <div className="mock-browser flex flex-col h-[380px]">

            {/* Console Control Tabs */}
            <div className="px-4 pt-3 pb-0 bg-bg-deep border-b border-border-primary flex items-center justify-between select-none">
              <div className="flex gap-1.5 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block"></span>
              </div>

              <div className="flex gap-1 text-[9px] font-medium uppercase tracking-[0.15em]">
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors border-b ${activeTab === 'terminal'
                    ? 'text-text-primary border-text-primary bg-bg-card'
                    : 'text-text-faint border-transparent hover:text-text-ghost'
                    }`}
                >
                  Terminal
                </button>
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors border-b ${activeTab === 'metrics'
                    ? 'text-text-primary border-text-primary bg-bg-card'
                    : 'text-text-faint border-transparent hover:text-text-ghost'
                    }`}
                >
                  Model Metrics
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors border-b ${activeTab === 'specs'
                    ? 'text-text-primary border-text-primary bg-bg-card'
                    : 'text-text-faint border-transparent hover:text-text-ghost'
                    }`}
                >
                  System
                </button>
              </div>
            </div>

            {/* Console Content Screen */}
            <div className="p-6 flex-grow font-mono text-xs overflow-y-auto bg-bg-pure text-text-dim flex flex-col justify-between text-left">

              {/* Tab 1: Live Terminal Shell */}
              {activeTab === 'terminal' && (
                <div className="space-y-1.5 flex-grow">
                  {terminalLines.map((line, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {renderTerminalLine(line)}
                    </p>
                  ))}
                  {terminalLines.length < logs.length && (
                    <span className="w-1.5 h-3.5 bg-emerald-550 dark:bg-emerald-400 inline-block animate-pulse ml-0.5"></span>
                  )}
                </div>
              )}

              {/* Tab 2: Live AI Model Training telemetry */}
              {activeTab === 'metrics' && (
                <div className="space-y-4 flex-grow flex flex-col justify-center">
                  <div>
                    <div className="flex justify-between text-[10px] mb-1.5 font-medium uppercase tracking-[0.15em] text-text-ghost">
                      <span>Neural Net Training</span>
                      <span className="text-text-primary font-bold">Epoch {epoch}/100</span>
                    </div>
                    <div className="w-full bg-border-primary rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${epoch}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-bg-deep border border-border-primary rounded-xl hover:border-emerald-500/30 transition-colors duration-300">
                      <span className="text-[9px] text-text-faint block uppercase font-medium tracking-[0.15em]">Accuracy</span>
                      <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{accuracy}%</span>
                    </div>
                    <div className="p-3 bg-bg-deep border border-border-primary rounded-xl hover:border-rose-500/30 transition-colors duration-300">
                      <span className="text-[9px] text-text-faint block uppercase font-medium tracking-[0.15em]">Cross Entropy Loss</span>
                      <span className="text-lg font-bold text-rose-600 dark:text-rose-400">{loss}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-bg-deep border border-border-primary rounded-xl flex justify-between items-center text-[9px] hover:border-cyan-500/30 transition-colors duration-300">
                    <span className="text-text-faint uppercase font-medium tracking-[0.15em]">Orchestration Delay</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">142ms (Avg)</span>
                  </div>
                </div>
              )}

              {/* Tab 3: System Specifications */}
              {activeTab === 'specs' && (
                <div className="space-y-2.5 flex-grow flex flex-col justify-center">
                  <div className="flex justify-between border-b border-border-primary pb-1.5">
                    <span className="text-text-ghost font-medium">User:</span>
                    <span className="text-text-primary font-semibold">Rahul Raja</span>
                  </div>
                  <div className="flex justify-between border-b border-border-primary pb-1.5">
                    <span className="text-text-ghost font-medium">Degree:</span>
                    <span className="text-text-secondary font-semibold">BS Computer Science</span>
                  </div>
                  <div className="flex justify-between border-b border-border-primary pb-1.5">
                    <span className="text-text-ghost font-medium">Alma Mater:</span>
                    <span className="text-text-secondary font-semibold">Sukkur IBA University</span>
                  </div>
                  <div className="flex justify-between border-b border-border-primary pb-1.5">
                    <span className="text-text-ghost font-medium">Full Stack:</span>
                    <span className="text-sky-600 dark:text-sky-400 font-semibold">React, MongoDB, Node, Express</span>
                  </div>
                  <div className="flex justify-between border-b border-border-primary pb-1.5">
                    <span className="text-text-ghost font-medium">AI Engineering:</span>
                    <span className="text-orange-600 dark:text-orange-400 font-semibold">PyTorch, ResNet, ViT, GPT-2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-ghost font-medium">GenAI & Agents:</span>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">LLMs, RAG, Multi-Agent Systems</span>
                  </div>
                </div>
              )}

              {/* Ticker bottom bar */}
              <div className="mt-4 pt-3 border-t border-border-primary flex items-center justify-between text-[9px] text-text-faint uppercase tracking-[0.1em]">
                <span>GPU TEMP: <span className="text-rose-600 dark:text-rose-400 font-semibold">43°C</span></span>
                <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse"></span>
                  CLUSTER SYNCED
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
