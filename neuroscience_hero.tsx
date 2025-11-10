import React, { useState, useEffect } from 'react';

export default function NeuroscienceHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const neurons = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 20 + (i % 4) * 20,
    y: 20 + Math.floor(i / 4) * 30,
    size: 60 + Math.random() * 40,
    delay: i * 0.15,
    duration: 6 + Math.random() * 4 // Duración más larga para movimiento más lento
  }));

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)`
        }}
      />

      {/* Neural network visualization */}
      <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'screen' }}>
        <defs>
          <radialGradient id="neuronGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(167, 139, 250, 0.8)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {neurons.map((neuron, i) => 
          neurons.slice(i + 1).map((target, j) => {
            const distance = Math.sqrt(
              Math.pow(target.x - neuron.x, 2) + 
              Math.pow(target.y - neuron.y, 2)
            );
            return distance < 40 ? (
              <line
                key={`${i}-${j}`}
                x1={`${neuron.x}%`}
                y1={`${neuron.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="rgba(167, 139, 250, 0.2)"
                strokeWidth="1"
                className="transition-all duration-700"
                style={{
                  animation: `pulse ${2 + Math.random()}s ease-in-out infinite`,
                  animationDelay: `${neuron.delay}s`
                }}
              />
            ) : null;
          })
        )}

        {/* Neurons */}
        {neurons.map((neuron) => (
          <g key={neuron.id}>
            <circle
              cx={`${neuron.x}%`}
              cy={`${neuron.y}%`}
              r={neuron.size / 2}
              fill="url(#neuronGlow)"
              filter="url(#glow)"
              className="transition-all duration-500"
              style={{
                animation: `breathe ${neuron.duration}s ease-in-out infinite`,
                animationDelay: `${neuron.delay}s`
              }}
            />
            <circle
              cx={`${neuron.x}%`}
              cy={`${neuron.y}%`}
              r={neuron.size / 4}
              fill="rgba(196, 181, 253, 0.6)"
              className="transition-all duration-300"
            />
          </g>
        ))}
      </svg>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div 
          className="text-center space-y-8 max-w-5xl"
        >
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-violet-300 to-purple-200 animate-pulse">
              Neural
            </span>
            <br />
            <span className="text-slate-100">
              Component Analysis
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-purple-200/80 font-light max-w-3xl mx-auto leading-relaxed">
            Exploring the frontiers of computational neuroscience through 
            advanced signal processing and multivariate analysis
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Explore Research</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </button>
            
            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-purple-400/30 rounded-full font-semibold text-purple-200 hover:bg-slate-800/70 hover:border-purple-400/50 transition-all duration-300">
              View Documentation
            </button>
          </div>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-3 justify-center pt-8">
            {['Independent Component Analysis', 'EEG Decomposition', 'Signal Processing', 'Neural Networks'].map((tag, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-full text-sm text-purple-200 hover:bg-purple-900/50 hover:border-purple-500/40 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-purple-300/60 animate-bounce">
            <span className="text-sm font-light tracking-wide">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes breathe {
          0%, 100% { 
            opacity: 0.4;
            filter: brightness(0.8);
          }
          50% { 
            opacity: 1;
            filter: brightness(1.3);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}