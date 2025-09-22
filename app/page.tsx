import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-white to-sky-50">
        <div className="container-lg py-24">
          <p className="text-sm uppercase tracking-wide text-primary/80 font-semibold">BCI • Neurofeedback • MI</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
            Neurogold Training
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl">
            Entrenamiento de alto rendimiento basado en neurociencia: EEG de alta densidad, neurofeedback, <em>motor imagery</em> y protocolos informados por rTMS.
          </p>

          <div className="mt-8">
            <EmailCapture />
            <p className="mt-3 text-sm text-slate-500">Sin spam. Te escribimos con novedades y acceso al piloto.</p>
          </div>

          <ul className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              ["Ciencia aplicada", "Protocolos con evidencia, métricas claras."],
              ["Privacidad primero", "Datos agregados/anonimizados para reportes."],
              ["Listo para clubes", "Onboarding simple, resultados medibles."],
            ].map(([title, desc]) => (
              <li key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="why" className="bg-white">
        <div className="container-lg py-20">
          <h2 id="why" className="text-2xl md:text-3xl font-bold">¿Por qué Neurogold?</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold">De laboratorio al campo</h3>
              <p className="mt-2 text-slate-600">
                Transformamos hallazgos en protocolos prácticos para deportistas y equipos.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold">Medible y accionable</h3>
              <p className="mt-2 text-slate-600">
                Reportes ejecutivos con mejoras de tiempo de reacción, precisión y recuperación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="container-lg py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Neurogold Training</p>
          <nav className="flex gap-4">
            <a className="hover:underline" href="/robots.txt">Robots</a>
            <a className="hover:underline" href="/sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
