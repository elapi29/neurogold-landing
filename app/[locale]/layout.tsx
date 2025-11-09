import "../../app/globals.css";
import TopBar from "../../components/TopBar";
import type { Locale } from "../../lib/i18n";

export const dynamic = "error"; // asegura export estático

export default function LocaleLayout({
  children, params: { locale },
}: { children: React.ReactNode; params: { locale: Locale } }) {
  return (
    <html lang={locale}>
      <body className="min-h-dvh">
        <TopBar locale={locale} />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "de" }];
}
TS

cat > "app/[locale]/page.tsx" <<'TS'
import { dict, type Locale } from "../../lib/i18n";
import EmailCapture from "../../components/EmailCapture";

export default function Page({ params: { locale } }: { params: { locale: Locale } }) {
  const t = dict(locale);

  return (
    <main className="mx-auto max-w-6xl px-4 py-20 space-y-16">
      {/* Hero */}
      <section>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">{t.hero.title}</h1>
        <p className="text-lg text-slate-600 mb-6">{t.hero.subtitle}</p>
        <EmailCapture />
      </section>

      {/* Cómo funciona */}
      <section>
        <h2 className="text-2xl font-bold mb-3">{t.how.title}</h2>
        <ul className="space-y-2 text-slate-700">
          {t.how.bullets.map((b, i) => <li key={i}>• {b}</li>)}
        </ul>
      </section>

      {/* Qué medimos */}
      <section>
        <h2 className="text-2xl font-bold mb-3">{t.measure.title}</h2>
        <ul className="space-y-2 text-slate-700">
          {t.measure.bullets.map((b, i) => <li key={i}>• {b}</li>)}
        </ul>
      </section>

      {/* KPIs */}
      <section>
        <h2 className="text-2xl font-bold mb-3">{t.kpi.title}</h2>
        <ul className="space-y-2 text-slate-700">
          {t.kpi.bullets.map((b, i) => <li key={i}>• {b}</li>)}
        </ul>
        <p className="mt-2 text-sm text-slate-500">{t.kpi.note}</p>
      </section>

      {/* Packs */}
      <section>
        <h2 className="text-2xl font-bold mb-3">{t.pricing.title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {t.pricing.items.map((p, i) => (
            <div key={i} className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-slate-600">{p.desc}</p>
              <a href="#lead" className="mt-3 inline-block text-primary underline">{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold mb-3">{t.faq.title}</h2>
        <div className="space-y-4">
          {t.faq.qa.map((qa, i) => (
            <details key={i} className="rounded-xl border p-4">
              <summary className="font-medium">{qa.q}</summary>
              <p className="mt-2 text-slate-600">{qa.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section id="lead" className="rounded-2xl bg-slate-50 p-6">
        <h3 className="text-xl font-semibold mb-2">{t.hero.title}</h3>
        <p className="text-slate-600 mb-4">{t.hero.subtitle}</p>
        <EmailCapture />
      </section>
    </main>
  );
}
