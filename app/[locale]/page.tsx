import EmailCapture from "../../components/EmailCapture";

export default function Page({ params: { locale } }: any) {
  const t = dict(locale); // función simple con textos ES/EN/DE
  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">{t.hero.title}</h1>
      <p className="text-lg text-slate-600 mb-6">{t.hero.subtitle}</p>
      <EmailCapture />
      {/* secciones: Para quién, Cómo te ayudamos, Formatos, Casos, Confianza, FAQ, CTA */}
    </main>
  );
}