"use client";
import React, { useState, useEffect } from "react";

type Locale = "es" | "en" | "de";

const heroContent: Record<
  Locale,
  { title: string; subtitle: string; cta: string; tags: string[] }
> = {
  es: {
    title: "Neurogold Training",
    subtitle:
      "Rendimiento sustentable con neurociencia aplicada. Entrenamientos breves y medibles para equipos y atletas.",
    cta: "Quiero saber más",
    tags: ["BCI & Neurofeedback", "rTMS", "Análisis de Rendimiento", "Entrenamiento Neurológico"],
  },
  en: {
    title: "Neurogold Training",
    subtitle:
      "Sustainable performance powered by applied neuroscience. Short, measurable training blocks for teams and athletes.",
    cta: "Keep me posted",
    tags: ["BCI & Neurofeedback", "rTMS", "Performance Analysis", "Neural Training"],
  },
  de: {
    title: "Neurogold Training",
    subtitle:
      "Nachhaltige Leistung mit angewandter Neurowissenschaft. Kurze, messbare Trainingsblöcke für Teams und Athlet:innen.",
    cta: "Mehr erfahren",
    tags: ["BCI & Neurofeedback", "rTMS", "Leistungsanalyse", "Neurologisches Training"],
  },
};

export default function NeurogoldHeroSky({ locale = "es" }: { locale?: Locale }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const content = heroContent[locale];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const neurons = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 20 + (i % 4) * 20,
    y: 20 + Math.floor(i / 4) * 30,
    size: 60 + Math.random() * 40,
    delay: i * 0.15,
    duration: 6 + Math.random() * 4,
  }));

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 overflow-hidden rounded-3xl">
      {/* Animated gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(0,167,225,.30) 0%, transparent 50%)`,
        }}
      />

      {/* Neural network */}
      <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }}>
        <defs>
          <radialGradient id="neuronGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,167,225,.8)" />
            <stop offset="50%" stopColor="rgba(11,60,93,.4)" />
            <stop offset="100%" stopColor="rgba(11,60,93,0)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {neurons.map((a, i) =>
          neurons.slice(i + 1).map((b, j) => {
            const d = Math.hypot(b.x - a.x, b.y - a.y);
            return d < 40 ? (
              <line
                key={`${i}-${j}`}
                x1={`${a.x}%`} y1={`${a.y}%`} x2={`${b.x}%`} y2={`${b.y}%`}
                stroke="rgba(0,167,225,.2)" strokeWidth="1"
                style={{ animation: `pulse ${2 + Math.random()}s ease-in-out infinite`, animationDelay: `${a.delay}s` }}
              />
            ) : null;
          })
        )}

        {neurons.map((n) => (
          <g key={n.id}>
            <circle cx={`${n.x}%`} cy={`${n.y}%`} r={n.size / 2} fill="url(#neuronGlow)" filter="url(#glow)"
              style={{ animation: `breathe ${n.duration}s ease-in-out infinite`, animationDelay: `${n.delay}s` }} />
            <circle cx={`${n.x}%`} cy={`${n.y}%`} r={n.size / 4} fill="rgba(56,189,248,.6)" />
          </g>
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
        <div className="space-y-8 max-w-5xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-200 animate-pulse">
              Neurogold
            </span>
            <br />
            <span className="text-slate-100">Training</span>
          </h1>

          <p className="text-xl md:text-2xl text-sky-200/80 font-light max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => document.getElementById("email-capture")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-8 py-4 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-xl font-semibold text-white shadow-lg shadow-sky-500/50 hover:shadow-sky-500/70 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">{content.cta}</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center pt-8">
            {content.tags.map((tag, i) => (
              <span key={i}
                className="px-4 py-2 bg-sky-900/30 backdrop-blur-sm border border-sky-500/20 rounded-full text-sm text-sky-200 hover:bg-sky-900/50 hover:border-sky-500/40 transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* dummy anchor for smooth scroll in preview */}
        <div id="email-capture" className="absolute bottom-6" />
      </div>

      <style jsx>{`
        @keyframes breathe { 0%,100%{opacity:.4;filter:brightness(.8)} 50%{opacity:1;filter:brightness(1.3)} }
        @keyframes pulse { 0%,100%{opacity:.2} 50%{opacity:.6} }
      `}</style>
    </div>
  );
}
