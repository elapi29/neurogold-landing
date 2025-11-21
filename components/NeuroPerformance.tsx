import Image from "next/image";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""; // "" (local) o "/neurogold-landing" (Pages)

export default function NeuroPerformance() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <h2 className="mb-4 text-center text-2xl font-bold tracking-tight text-slate-900">
        Rehabilitación · Prevención de lesiones · Práctica mental
      </h2>

      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <Image
          src={`${prefix}/pipeline/FLYER_1.png`}
          alt="Rehabilitación, prevención de lesiones y práctica mental — Neurogold"
          width={1600}
          height={1600}
          className="w-full h-auto"
          priority
        />
      </div>

      <p className="mt-2 text-center text-sm text-slate-500">
        Imagen servida desde <code>/public/pipeline/FLYER_1.png</code>.
      </p>
    </section>
  );
}