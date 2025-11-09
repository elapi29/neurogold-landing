import { dict } from "../../lib/i18n";
import EmailCapture from "../../components/EmailCapture";

export default function Page({ params: { locale } }: { params: { locale: 'es'|'en'|'de' } }) {
  const t = dict(locale);
  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">{t.hero.title}</h1>
      <p className="text-lg text-slate-600 mb-6">{t.hero.subtitle}</p>
      <EmailCapture />
    </main>
  );
}
