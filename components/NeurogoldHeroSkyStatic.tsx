"use client";
import React from "react";

type Locale = "es" | "en" | "de";

const content: Record<Locale, { title: string; desc: string; cta: string }> = {
  es: {
    title: "Neurogold",
    desc:
      "Evaluamos mediante señales de alta calidad cómo se conectan las redes que provocan los movimientos del cuerpo. Esas señales nos permiten ver la disponibilidad, la recuperación y el rendimiento de cada jugador. Nosotros te ayudamos a entender las necesidades de tu entrenamiento con Neurogold®",
    cta: "Comienza ahora",
  },
  en: {
    title: "Neurogold",
    desc:
      "We assess, using high-quality signals, how the networks that drive body movements connect. These signals let us see each player’s availability, recovery, and performance. We help you understand your training needs with Neurogold®.",
    cta: "Begin now",
  },
  de: {
    title: "Neurogold",
    desc:
      "Wir bewerten mit hochwertigen Signalen, wie die Netzwerke, die Bewegungen steuern, miteinander verbunden sind. Diese Signale zeigen uns Verfügbarkeit, Regeneration und Leistung jedes Spielers. Mit Neurogold® helfen wir Ihnen, den Trainingsbedarf zu verstehen.",
    cta: "Jetzt erfahren",
  },
};

// 4 neuronas estáticas
const NEURONS = [
  { x: 18, y: 30, r: 26 },
  { x: 82, y: 24, r: 24 },
  { x: 22, y: 70, r: 22 },
  { x: 80, y: 66, r: 24 },
];

export default function NeurogoldHeroSkyStatic({ locale = "es" }: { locale?: Locale }) {
  const t = content[locale];

  const dendrites = (x: number, y: number) => {
    const pieces = 6, len = 12, bend = 0.35;
    const paths: JSX.Element[] = [];
    for (let i = 0; i < pieces; i++) {
      const a = (i / pieces) * Math.PI * 2;
      const ex = x + Math.cos(a) * len * 0.9;
      const ey = y + Math.sin(a) * len * 0.9;
      const cx1 = x + Math.cos(a - Math.PI / 2) * len * bend;
      const cy1 = y + Math.sin(a - Math.PI / 2) * len * bend;
      const cx2 = x + Math.cos(a + Math.PI / 2) * len * bend;
      const cy2 = y + Math.sin(a + Math.PI / 2) * len * bend;
      paths.push(
        <path
          key={`${x}-${y}-${i}`}
          d={`M ${x}% ${y}% C ${cx1}% ${cy1}%, ${cx2}% ${cy2}%, ${ex}% ${ey}%`}
          stroke="url(#axon)"
          strokeWidth={1.2}
          fill="none"
          opacity={0.55}
          filter="url(#softGlow)"
        />
      );
    }
    return paths;
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-sky-900 to-slate-900">
      <svg className="absolute inset-0 h-full w-full" style={{ mixBlendMode: "screen" }}>
        <defs>
          <radialGradient id="soma" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(186,230,253,.95)" />
            <stop offset="55%" stopColor="rgba(56,189,248,.55)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0)" />
          </radialGradient>
          <linearGradient id="axon">
            <stop offset="0%" stopColor="rgba(56,189,248,.65)" />
            <stop offset="100%" stopColor="rgba(186,230,253,.12)" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {NEURONS.map((n, idx) => (
          <g key={idx}>
            {dendrites(n.x, n.y)}
            <circle cx={`${n.x}%`} cy={`${n.y}%`} r={n.r} fill="url(#soma)" filter="url(#softGlow)" opacity={0.95} />
            <circle cx={`${n.x}%`} cy={`${n.y}%`} r={Math.max(2, n.r * 0.35)} fill="rgba(186,230,253,.9)" />
          </g>
        ))}
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-sky-100 md:text-6xl">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-sky-100/85">{t.desc}</p>

        <a
          href="#lead"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 px-7 py-3 font-semibold text-white shadow-lg shadow-sky-500/40 hover:brightness-110"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}