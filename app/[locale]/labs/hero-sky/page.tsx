import type { Locale } from "../../../../lib/i18n";
import NeurogoldHeroSky from "../../../../components/NeurogoldHeroSky";
import Allies from "../../../../components/Allies";
import NDAAWordmark from "../../../../components/NDAAWordmark";

export default function Page({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <NeurogoldHeroSky locale={locale} />
      <Allies locale={locale} />
      <section className="rounded-3xl bg-slate-50 p-6">
        <NDAAWordmark />
      </section>
      <div id="lead" />
    </main>
  );
}
