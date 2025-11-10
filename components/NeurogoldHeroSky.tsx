"use client";
import React, { useEffect, useMemo, useState } from "react";

type Locale = "es" | "en" | "de";

const heroContent: Record<
  Locale,
  { title: string; subtitle: string; cta: string; tags: string[] }
> = {
  es: {
    title: "Neurogold Training",
    subtitle:
      "Rendimiento sustentable con neurociencia aplicada. Entrenamientos breves y medibles para equipos y atletas.",
    cta: "Comienza ahora",
    tags: ["Interactivo", "Neural-glow", "Exportación"],
  },
  en: {
    title: "Neurogold Training",
    subtitle:
      "Sustainable performance powered by applied neuroscience. Short, measurable training blocks for teams and athletes.",
    cta: "Start now",
    tags: ["Interactive", "Neural glow", "Static export"],
  },
  de: {
    title: "Neurogold Training",
    subtitle:
      "Nachhaltige Leistung mit angewandter Neurowissenschaft. Kurze, messbare Trainingsblöcke für Teams und Athlet:innen.",
    cta: "Jetzt starten",
    tags: ["Interaktiv", "Neural-Glow", "Export"],
  },
};

type Neuron = {
  id: number;
  x: number; // 0..100 (%)
  y: number; // 0..100 (%)
  soma: number; // px
  delay: number;
  duration: number;
  dendrites: { angle: number; len: number; curl: number }[];
};

export default function NeurogoldHeroSky({ locale = "es" }: { locale?: Locale }) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const t = heroContent[locale];

  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setMouse({ x: (e.clientX / innerWidth) * 100, y: (e.clientY / innerHeight) * 100 });
    addEventListener("mousemove", onMove, { passive: true });
    return () => removeEventListener("mousemove", onMove);
  }, []);

  // Neuronas “más reales”: soma + dendritas curvas (bezier) + glow
  const neurons = useMemo<Neuron[]>(() => {
    const seeds = [
      { x: 18, y: 30 },
      { x: 37, y: 15 },
      { x: 72, y: 22 },
      { x: 28, y: 68 },
      { x: 51, y: 50 },
      { x: 82, y: 64 },
      { x: 58, y: 80 },
      { x: 12, y: 55 },
    ];
    return seeds.map((p, i) => ({
      id: i,
      x: p.x + (Math.random() * 4 - 2),
      y: p.y + (Math.random() * 4 - 2),
      soma: 44 + Math.random() * 20,
      delay: i * 0.2,
      duration: 6 + Math.random() * 4,
      dendrites: Array.from({ length: 8 }, () => ({
        angle: Math.random() * Math.PI * 2,
        len: 10 + Math.random() * 18, // en vh aprox
        curl: 0.3 + Math.random() * 0.8,
      })),
    }));
  }, []);

  return (
    <div className="relative w-full min-h-[72svh] overflow-hidden rounded-3xl bg-gradient-to-b from-sky-900 to-slate-900 shadow-xl">
      {/* halo que sigue al puntero */}
      <div
        className="absolute inset-0 opacity-30 transition-[background-position]"
        style={{
          background: `radial-gradient(32rem 32rem at ${mouse.x}% ${mouse.y}%, rgba(56,189,248,.25) 0%, transparent 55%)`,
        }}
      />

      <svg className="absolute inset-0 h-full w-full" style={{ mixBlendMode: "screen" }}>
        <defs>
          <radialGradient id="soma" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(186,230,253, .95)" />
            <stop offset="55%" stopColor="rgba(56,189,248, .55)" />
            <stop offset="100%" stopColor="rgba(14,165,233, 0)" />
          </radialGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="axon">
            <stop offset="0%" stopColor="rgba(56,189,248,.6)" />
            <stop offset="100%" stopColor="rgba(186,230,253,.1)" />
          </linearGradient>
        </defs>

        {/* axones/dendritas curvos */}
        {neurons.map((n) =>
          n.dendrites.map((d, j) => {
            const r = n.soma / 2 / 10; // escala para evitar cortar el soma
            const x1 = n.x;
            const y1 = n.y;
            // endpoint a partir de ángulo/longitud
            const ex = x1 + (Math.cos(d.angle) * d.len) / 1.3;
            const ey = y1 + (Math.sin(d.angle) * d.len) / 1.3;
            // control points para curva (curl = “ondita”)
            const cx1 = x1 + Math.cos(d.angle - Math.PI / 2) * d.len * d.curl * 0.25;
            const cy1 = y1 + Math.sin(d.angle - Math.PI / 2) * d.len * d.curl * 0.25;
            const cx2 = x1 + Math.cos(d.angle + Math.PI / 2) * d.len * d.curl * 0.25;
            const cy2 = y1 + Math.sin(d.angle + Math.PI / 2) * d.len * d.curl * 0.25;

            return (
              <path
                key={`${n.id}-${j}`}
                d={`M ${x1}% ${y1}% C ${cx1}% ${cy1}%, ${cx2}% ${cy2}%, ${ex}% ${ey}%`}
                stroke="url(#axon)"
                strokeWidth={1.4}
                fill="none"
                style={{
                  opacity: 0.55,
                  filter: "url(#softGlow)",
                  animation: `twinkle ${2 + (j % 3)}s ease-in-out ${n.delay}s infinite`,
                }}
              />
            );
          })
        )}

        {/* somas con glow */}
        {neurons.map((n) => (
          <g key={n.id} filter="url(#softGlow)">
            <circle
              cx={`${n.x}%`}
              cy={`${n.y}%`}
              r={n.soma / 2}
              fill="url(#soma)"
              style={{
                animation: `breathe ${n.duration}s ease-in-out ${n.delay}s infinite`,
              }}
            />
            <circle
              cx={`${n.x}%`}
              cy={`${n.y}%`}
              r={Math.max(2, n.soma / 10)}
              fill="rgba(186,230,253,.85)"
            />
          </g>
        ))}
      </svg>

      {/* contenido */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-16 text-center">
        <h1 className="mb-2 text-5xl font-extrabold tracking-tight text-sky-100 md:text-6xl">
          Neurogold
        </h1>
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-sky-200/90 md:text-5xl">
          Generative Hero
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-sky-100/80">{t.subtitle}</p>

        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {t.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full border border-sky-400/20 bg-sky-900/30 px-3 py-1 text-sm text-sky-100/90 backdrop-blur"
            >
              • {tag}
            </span>
          ))}
        </div>

        <a
          href="#lead"
          className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/40"
        >
          <span className="relative z-10">{t.cta}</span>
          <span className="absolute inset-0 -z-0 rounded-xl bg-cyan-400/30 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
        </a>
      </div>

      <style jsx>{`
        @keyframes breathe {
          0%,
          100% {
            opacity: 0.55;
            filter: brightness(0.9);
          }
          50% {
            opacity: 1;
            filter: brightness(1.25);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.65;
          }
        }
      `}</style>
    </div>
  );
}