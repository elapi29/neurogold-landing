import type { Locale } from "../../../../lib/i18n";
import NeurogoldHeroSky from "../../../../components/NeurogoldHeroSky";

export default function Page({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-8">
      <h2 className="text-2xl font-semibold">Preview — Generative Hero (Sky/Cyan)</h2>
      <NeurogoldHeroSky locale={locale} />
      <p className="text-slate-600">Esto es un preview. La home actual no se modifica.</p>
    </main>
  );
}
