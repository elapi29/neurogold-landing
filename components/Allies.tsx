import Image from "next/image";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""; // "" o "/neurogold-landing"

export default function Allies({ locale = "es" }: { locale?: "es" | "en" | "de" }) {
  const title = locale === "de" ? "Partner" : locale === "en" ? "Allies" : "Aliados";

  return (
    <section className="mx-auto max-w-6xl px-4">
      <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 mb-6">
        {title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* neurocare APOLLO */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-center">
            <Image
              src={`${prefix}/partners/neurocare.webp`}
              alt="neurocare APOLLO"
              width={220}
              height={56}
              sizes="220px"
              className="h-14 w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* g.tec BCI */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-center">
            <Image
              src={`${prefix}/partners/gtec.svg`}
              alt="g.tec BCI"
              width={220}
              height={56}
              sizes="220px"
              className="h-14 w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center">
        <img
          src={(process.env.NEXT_PUBLIC_BASE_PATH || "") + "/partners/NDAAWordmark.png"}
          alt="ND·AA — Neurociencias Deportivas Argentinas"
          className="h-10 md:h-12 w-auto object-contain"
          loading="eager"
          decoding="async"
        />
      </div>

    </section>
  );
}