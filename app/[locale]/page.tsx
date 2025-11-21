import { dict, type Locale } from "../../lib/i18n";
import EmailCapture from "../../components/EmailCapture";
import NeurogoldHeroSkyStatic from "../../components/NeurogoldHeroSkyStatic";
import Allies from "../../components/Allies";
import NeuroPerformance from "../../components/NeuroPerformance";

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = dict(locale);

  return (
    <main className="mx-auto max-w-6xl px-4 py-20 space-y-16">
      {/* Hero visual (cyan) */}
      <NeurogoldHeroSkyStatic locale={locale} />

      {/* Aliados */}
      <Allies locale={locale} />

      {/* Imágenes / pipeline (flyer & pipeline) */}
      <NeuroPerformance />

      {/* Bloque de texto + formulario */}
      <section>
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight">
          {t.hero.title}
        </h1>
        <p className="mb-6 text-lg text-slate-600">{t.hero.subtitle}</p>
        <EmailCapture />
      </section>

      {/* Cómo funciona */}
      <section>
        <h2 className="mb-3 text-2xl font-bold">{t.how.title}</h2>
        <ul className="space-y-2 text-slate-700">
          {t.how.bullets.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
      </section>

      {/* Qué medimos */}
      <section>
        <h2 className="mb-3 text-2xl font-bold">{t.measure.title}</h2>
        <ul className="space-y-2 text-slate-700">
          {t.measure.bullets.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
      </section>

      {/* KPIs */}
      <section>
        <h2 className="mb-3 text-2xl font-bold">{t.kpi.title}</h2>
        <ul className="space-y-2 text-slate-700">
          {t.kpi.bullets.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
        <p className="mt-2 text-sm text-slate-500">{t.kpi.note}</p>
      </section>

      {/* Packs / Pricing */}
      <section>
        <h2 className="mb-3 text-2xl font-bold">{t.pricing.title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {t.pricing.items.map((p, i) => (
            <div key={i} className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-slate-600">{p.desc}</p>
              <a href="#lead" className="mt-3 inline-block text-primary underline">
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section id="lead" className="rounded-2xl bg-slate-50 p-6">
        <h3 className="mb-2 text-xl font-semibold">{t.hero.title}</h3>
        <p className="mb-4 text-slate-600">{t.hero.subtitle}</p>
        <EmailCapture />
      </section>
    </main>
  );
}