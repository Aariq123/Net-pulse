import React from 'react';

export default function Hero() {
  return (
    // 1. CENTERING CONTAINER: flex, flex-col, and items-center centers everything perfectly.
    // relative allows us to position the glow absolute behind it.
    <div className="relative flex flex-col items-center justify-center text-center py-20 overflow-hidden">
      
      {/* 2. THE GLOW EFFECT: An absolute div placed behind everything using z-0.
          bg-emerald-500/10 provides the green base tint.
          blur-[120px] diffuses the circle into that beautiful premium soft mist glow. */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-emerald-500/10 rounded-full blur-[120px] z-0 pointer-events-none" />

      {/* 3. THE TEXT CONTENT: Brought to the front using z-10 so it stays crisp */}
      <div className="z-10 max-w-2xl space-y-4">
        
        {/* Subtle pill badge at the top mimicking the "Open to new opportunities" style */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 text-xs text-slate-400 rounded-full font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          Network Status Engine Active
        </div>

        {/* Huge Main Header Text */}
        <h2 className="text-5xl font-black text-white tracking-tight leading-tight">
          Learn More About <br />
          <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
            Your Network.
          </span>
        </h2>

        {/* Small descriptive subheading text below */}
        <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          Analyze live performance metrics, run deep DNS lookups, check security port layouts, and secure your configuration.
        </p>

      </div>
    </div>
    );
}