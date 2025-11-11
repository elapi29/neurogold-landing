// components/NeuroPerformance.tsx
import Image from "next/image";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""; // "" (local) o "/neurogold-landing" (Pages)

export default function NeuroPerformance() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 mb-6">
        Neuro-performance
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          <Image
            src={`${prefix}/pipeline/neuro-performance.jpg`}
            alt="Pipeline neuro-performance"
            width={1600}
            height={1600}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          <Image
            src={`${prefix}/pipeline/salida-freno.png`}
            alt="Entrenamiento mental guiado: salida y freno"
            width={1600}
            height={1200}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="w-full h-auto object-cover bg-white"
            priority
          />
        </div>
      </div>
    </section>
  );
}