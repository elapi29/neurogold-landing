import Image from "next/image";
import type { Locale } from "../lib/i18n";

export default function Allies({ locale }: { locale: Locale }) {
  const label = { es: "Aliados", en: "Allies", de: "Partner" }[locale];

  // ¡Rutas iguales a tu tree actual!
  const items = [
    { name: "neurocare APOLLO", img: "/partners/neurocare.webp" },
    { name: "g.tec BCI",        img: "/partners/gtec.svg" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="mb-6 text-center text-3xl font-bold text-slate-800">{label}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
        {items.map((p) => (
          <a
            key={p.name}
            href="#"
            className="group flex items-center justify-center rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow"
            aria-label={p.name}
          >
            <div className="relative h-12 w-52 grayscale group-hover:grayscale-0">
              <Image
                src={p.img}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 208px, 208px"
                className="object-contain"
                priority
              />
            </div>
          </a>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">
        Activos en <code>/public/partners/</code> (<code>neurocare.webp</code> y <code>gtec.svg</code>).
      </p>
    </section>
  );
}