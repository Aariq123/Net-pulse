
import React from 'react';
import Hero from './Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* 1. HEADER COMPONENT */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-800">
          
          {/* Logo and Pulse Status Indicator */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              NetPulse <span className="text-xs font-mono font-normal text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-850">v1.0</span>
            </h1>
          </div>

          {/* Network Meta Data Badges */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="text-emerald-400 bg-emerald-950/30 px-3 py-1.5 rounded-lg border border-emerald-900/50">
              System: <span className="font-bold">ONLINE</span>
            </div>
            <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-400">
              IP: <span className="text-white">103.102.x.x</span> (Dhaka)
            </div>
          </div>

        </header>
        <Hero/>
      </div>
    </div>
  );
}
