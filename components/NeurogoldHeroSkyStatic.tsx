"use client";
import React from "react";

type Locale = "es" | "en" | "de";

const copy: Record<
  Locale,
  { title: string; desc: string; cta: string }
> = {
  es: {
    title: "Neurogold",
    desc:
      "Evaluamos mediante señales de alta calidad cómo se conectan las redes que provocan los movimientos del cuerpo. " +
      "Esas señales nos permiten ver la disponibilidad, la recuperación y el rendimiento de cada jugador. " +
      "Nosotros te ayudamos a entender las necesidades de tu entrenamiento con Neurogold®.",
    cta: "Comienza ahora",
  },
  en: {
    title: "Neurogold",
    desc:
      "We evaluate with high-quality signals how the networks that drive movement connect. " +
      "These signals reveal availability, recovery and performance for each player. " +
      "We help you understand training needs with Neurogold®.",
    cta: "Begin now",
  },
  de: {
    title: "Neurogold",
    desc:
      "Wir messen mit hochwertigen Signalen, wie die Netzwerke verbunden sind, die Bewegung auslösen. " +
      "Diese Signale zeigen Verfügbarkeit, Erholung und Leistung jeder Spielerin/jedes Spielers. " +
      "Wir unterstützen dein Training mit Neurogold®.",
    cta: "Jetzt erfahren",
  },
};

export default function NeurogoldHeroSkyStatic({
  locale = "es",
}: {
  locale?: Locale;
}) {
  const t = copy[locale];

  return (
    <section className="relative overflow-hidden rounded-3xl border bg-slate-900/70 px-6 py-16 ring-1 ring-black/10 shadow-xl">
      {/* Fondo gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 30%, rgba(56,189,248,.20), transparent 55%)," + // izq sup
            "radial-gradient(900px 500px at 82% 22%, rgba(56,189,248,.18), transparent 60%)," + // der sup
            "radial-gradient(800px 500px at 24% 78%, rgba(56,189,248,.18), transparent 60%)," + // izq inf
            "radial-gradient(1000px 600px at 78% 80%, rgba(56,189,248,.22), transparent 58%)," + // der inf
            "linear-gradient(180deg, #0b2530 0%, #0e2e3a 60%, #0b2530 100%)",
        }}
      />

      {/* Red neuronal “realista” (curvas + somas) */}
      <svg
        viewBox="0 0 1200 680"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {/* Glow general de líneas */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradiente de soma */}
          <radialGradient id="soma" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(125, 249, 255, .95)" />
            <stop offset="35%" stopColor="rgba(56, 189, 248, .65)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
          </radialGradient>

          {/* Trazo cyan translúcido */}
          <linearGradient id="axon" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(125, 249, 255, .6)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, .35)" />
          </linearGradient>
        </defs>

        {/* ===== Neurona 1 (izq–sup) ===== */}
        <g filter="url(#glow)">
          {/* dendritas/axones curvos */}
          <path
            d="M210,170 C300,220 360,180 430,240 S560,310 610,280"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M210,170 C270,120 340,140 380,90"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M210,170 C160,210 120,240 80,260"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          {/* soma */}
          <circle cx="210" cy="170" r="42" fill="url(#soma)" />
          <circle cx="210" cy="170" r="10" fill="rgba(125, 249, 255, .9)" />
        </g>

        {/* ===== Neurona 2 (der–sup) ===== */}
        <g filter="url(#glow)">
          <path
            d="M940,150 C880,220 820,180 760,230 S700,290 650,260"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M940,150 C1000,120 1080,130 1130,90"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M940,150 C980,200 1020,250 1080,280"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="940" cy="150" r="38" fill="url(#soma)" />
          <circle cx="940" cy="150" r="9" fill="rgba(125, 249, 255, .9)" />
        </g>

        {/* ===== Neurona 3 (izq–inf) ===== */}
        <g filter="url(#glow)">
          <path
            d="M250,470 C320,420 380,460 420,420 S520,380 560,420"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M250,470 C190,520 140,520 90,560"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M250,470 C230,400 280,360 260,320"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="250" cy="470" r="40" fill="url(#soma)" />
          <circle cx="250" cy="470" r="9" fill="rgba(125, 249, 255, .9)" />
        </g>

        {/* ===== Neurona 4 (der–inf) ===== */}
        <g filter="url(#glow)">
          <path
            d="M900,510 C840,470 770,460 720,420 S660,360 620,370"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M900,510 C980,500 1030,540 1100,520"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M900,510 C930,560 980,600 1040,620"
            stroke="url(#axon)"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="900" cy="510" r="44" fill="url(#soma)" />
          <circle cx="900" cy="510" r="10" fill="rgba(125, 249, 255, .9)" />
        </g>
      </svg>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-3xl text-center text-slate-100">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
          {t.title}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-sky-100/80 leading-relaxed">
          {t.desc}
        </p>

        <div className="mt-8">
          <a
            href="#lead"
            className="inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition"
          >
            {t.cta}
          </a>
        </div>

        {/* tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sky-100/80">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm">
            BCI & Neurofeedback
          </span>
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm">
            rTMS
          </span>
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm">
            Performance Analytics
          </span>
        </div>
      </div>
    </section>
  );
}