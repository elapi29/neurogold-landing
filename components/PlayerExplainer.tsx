// components/PlayerExplainer.tsx
import { dict, type Locale } from "../lib/i18n";

export default function PlayerExplainer({ locale = "es" }: { locale?: Locale }) {
  const t = dict(locale).players;

  return (
    <section className="mx-auto max-w-6xl px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
        {t.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6 shadow-sm bg-white">
          <h3 className="text-lg font-semibold mb-3">{t.rehab.title}</h3>
          <ul className="space-y-2 text-slate-700">
            {t.rehab.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm bg-white">
          <h3 className="text-lg font-semibold mb-3">{t.prevent.title}</h3>
          <ul className="space-y-2 text-slate-700">
            {t.prevent.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm bg-white">
          <h3 className="text-lg font-semibold mb-3">{t.mental.title}</h3>
          <ul className="space-y-2 text-slate-700">
            {t.mental.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
