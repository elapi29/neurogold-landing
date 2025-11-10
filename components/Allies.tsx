"use client";
import Image from "next/image";
import React from "react";

type Locale = "es" | "en" | "de";

const txt: Record<Locale, { title: string; note: string }> = {
  es: { title: "Aliados", note: "Activos en /public/partners/ (neurocare.webp y gtec.svg)." },
  en: { title: "Allies", note: "Assets in /public/partners/ (neurocare.webp and gtec.svg)." },
  de: { title: "Partner", note: "Assets unter /public/partners/ (neurocare.webp und gtec.svg)." },
};

export default function Allies({ locale = "es" }: { locale?: Locale }) {
  const t = txt[locale];
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-4xl font-bold text-slate-900 text-center mb-8">{t.title}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* neurocare APOLLO */}
        <div className="rounded-2xl border p-8 shadow-sm flex items-center justify-center bg-white/60">
          {/* WEBP (Next/Image optimiza correctamente) */}
          <Image
            src={`${prefix}/partners/neurocare.webp`}
            alt="neurocare APOLLO"
            width={420}
            height={120}
            className="h-14 w-auto"
            priority
          />
        </div>

        {/* g.tec BCI */}
        <div className="rounded-2xl border p-8 shadow-sm flex items-center justify-center bg-white/60">
          {/* Para SVG Next/Image no optimiza, pero lo sirve bien igual */}
          <Image
            src={`${prefix}/partners/gtec.svg`}
            alt="g.tec BCI"
            width={420}
            height={120}
            className="h-14 w-auto"
            priority
          />
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 mt-6">{t.note}</p>
    </section>
  );
}