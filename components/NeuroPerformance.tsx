// components/NeuroPerformance.tsx
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""; // "" (local) o "/neurogold-landing" (Pages)

export default function NeuroPerformance() {
  return (
    <section className="mx-auto max-w-6xl px-4 space-y-6">
      <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
        Rehabilitación · Prevención de lesiones · Práctica mental
      </h2>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm">
        {/* Usamos <img> nativo para evitar problemas de basePath/assetPrefix */}
        <img
          src={`${prefix}/pipeline/FLYER_1.png`}
          alt="Rehabilitación, prevención de lesiones y práctica mental — Neurogold"
          className="mx-auto block h-auto w-full max-w-5xl rounded-xl"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}