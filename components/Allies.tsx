import Image from "next/image";

export default function Allies({ locale = "es" }: { locale?: "es" | "en" | "de" }) {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Aliados</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* neurocare APOLLO */}
        <div className="rounded-2xl border p-6 shadow-sm bg-white/70">
          <div className="relative mx-auto h-10 w-[180px]">
            <Image
              src="/partners/neurocare.webp"
              alt="neurocare APOLLO"
              fill
              className="object-contain"
              sizes="180px"
            />
          </div>
        </div>

        {/* g.tec BCI */}
        <div className="rounded-2xl border p-6 shadow-sm bg-white/70">
          <div className="relative mx-auto h-10 w-[180px]">
            <Image
              src="/partners/gtec.svg"
              alt="g.tec BCI"
              fill
              className="object-contain"
              sizes="180px"
            />
          </div>
        </div>

        {/* ND°AA */}
        <div className="rounded-2xl border p-6 shadow-sm bg-white/70">
          <div className="relative mx-auto h-10 w-[200px]">
            <Image
              src="/partners/NDAAWordmark.png"
              alt="ND°AA — Neurociencias Deportivas Argentinas"
              fill
              className="object-contain"
              sizes="200px"
            />
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-slate-500">
        Activos en <code>/public/partners/</code> (neurocare.webp, gtec.svg, NDAAWordmark.png).
      </p>
    </section>
  );
}