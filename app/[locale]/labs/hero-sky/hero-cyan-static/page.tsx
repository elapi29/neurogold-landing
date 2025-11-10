import type { Locale } from "../../../../lib/i18n";
import NeurogoldHeroSkyStatic from "../../../../components/NeurogoldHeroSkyStatic";
import Allies from "../../../../components/Allies";

export default function Page({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-10">
      <NeurogoldHeroSkyStatic locale={locale} />
      <Allies locale={locale} />
      <div id="lead" />
    </main>
  );
}