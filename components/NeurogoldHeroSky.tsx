// components/NeurogoldHeroSky.tsx
import { type Locale, dict } from "../lib/i18n";

export default function NeurogoldHeroSky({ locale = "es" }: { locale?: Locale }) {
  const t = dict(locale);
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900">
      {/* Fondo decorativo (si tenés SVG/visual, va aquí) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40" />

      {/* Copy por encima */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          {t.hero.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-sky-100/90">
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
}