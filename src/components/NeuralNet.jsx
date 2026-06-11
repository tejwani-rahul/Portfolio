import React from 'react';

export default function NeuralNet() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      {/* Nodes */}
      <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] animate-neural-pulse"></div>
      <div className="absolute top-[70%] left-[30%] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-neural-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-[40%] left-[60%] w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.5)] animate-neural-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[80%] left-[80%] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] animate-neural-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-[15%] left-[75%] w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.5)] animate-neural-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Connection lines */}
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
            <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <line x1="20" y1="20" x2="60" y2="40" stroke="url(#neural-grad)" strokeWidth="0.75" />
        <line x1="30" y1="70" x2="60" y2="40" stroke="url(#neural-grad)" strokeWidth="0.75" />
        <line x1="60" y1="40" x2="80" y2="80" stroke="url(#neural-grad)" strokeWidth="0.75" />
        <line x1="60" y1="40" x2="75" y2="15" stroke="url(#neural-grad)" strokeWidth="0.75" />
        <line x1="20" y1="20" x2="30" y2="70" stroke="url(#neural-grad)" strokeWidth="0.75" />
      </svg>
    </div>
  );
}
