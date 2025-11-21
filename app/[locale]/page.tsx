import { dict, type Locale } from "../../lib/i18n";
import EmailCapture from "../../components/EmailCapture";
import NeurogoldHeroSkyStatic from "../../components/NeurogoldHeroSkyStatic";
import Allies from "../../components/Allies";

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = dict(locale);

  return (
    <main className="mx-auto max-w-6xl px-4 py-20 space-y-16">
      {/* Hero visual (cyan) + aliados */}
      <NeurogoldHeroSkyStatic locale={locale} />
      <Allies locale={locale} />

      {/* Bloque de texto + formulario */}
      <section>
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight">
          {t.hero.title}
        </h1>
        <p className="mb-6 text-lg text-slate-600">{t.hero.subtitle}</p>
        <EmailCapture />
      </section>

      {/* (ES) Rehabilitación · Prevención · Práctica mental (sin imágenes) */}
      {locale === "es" && (
        <section aria-labelledby="rehab-prev-mi" className="space-y-10">
          <h2
            id="rehab-prev-mi"
            className="text-center text-2xl font-bold tracking-tight"
          >
            Rehabilitación · Prevención de lesiones · Práctica mental
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* REHABILITACIÓN */}
            <div className="rounded-2xl border p-6 shadow-sm bg-white">
              <h3 className="text-lg font-semibold mb-3">🩺 Rehabilitación</h3>
              <ul className="space-y-2 text-slate-700">
                <li>Volver bien, no “a medias”: objetivo = jugar al 100 %, no sólo sin dolor.</li>
                <li>Recuperación con datos: EEG, fuerza, EMG, reacción para saber cuándo estás listo.</li>
                <li>Mientras se cuida el músculo, también entrenamos timing, foco y decisiones.</li>
              </ul>
            </div>

            {/* PREVENCIÓN */}
            <div className="rounded-2xl border p-6 shadow-sm bg-white">
              <h3 className="text-lg font-semibold mb-3">🛡️ Prevención de lesiones</h3>
              <ul className="space-y-2 text-slate-700">
                <li>No es “no lesionarse”: es menos lesiones.</li>
                <li>Vemos alertas tempranas: fatiga, asimetrías, cambios en fuerza y reacción.</li>
                <li>Menos tirones tontos: mejor control en acelerar, frenar y cambiar de dirección.</li>
              </ul>
            </div>

            {/* PRÁCTICA MENTAL */}
            <div className="rounded-2xl border p-6 shadow-sm bg-white">
              <h3 className="text-lg font-semibold mb-3">🧠 Práctica mental</h3>
              <ul className="space-y-2 text-slate-700">
                <li>Entrenar la cabeza = entrenar el segundo que define el partido.</li>
                <li>Simulamos situaciones de juego: decisión rápida, foco, calma bajo presión.</li>
                <li>Ideal cuando el cuerpo está cargado: el cuerpo descansa, el cerebro sigue mejorando.</li>
              </ul>
            </div>
          </div>
        </section>
      )}

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
