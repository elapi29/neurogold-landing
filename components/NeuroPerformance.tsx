// components/NeuroPerformance.tsx
import Image from "next/image";
// ✅ import estático desde /public: Next maneja basePath/assetPrefix solo
import Collage from "@/public/pipeline/neuro-performance.jpg";

export default function NeuroPerformance() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
        Rehabilitación · Prevención de lesiones · Práctica mental
      </h2>

      {/* Collage visual */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative w-full">
          <Image
            src={Collage}
            alt="Rehabilitación, prevención de lesiones y práctica mental — Neurogold"
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* Texto descriptivo (separado de la imagen) */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold mb-2">🩺 Rehabilitación</h3>
          <ul className="text-slate-700 space-y-1">
            <li>Volver bien, no “a medias”: jugar al 100 %, no sólo sin dolor.</li>
            <li>Recuperación con datos: EEG, fuerza, EMG, reacción.</li>
            <li>Además del músculo, entrenamos timing, foco y decisiones.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold mb-2">🛡️ Prevención de lesiones</h3>
          <ul className="text-slate-700 space-y-1">
            <li>No es “no lesionarse”: es menos lesiones.</li>
            <li>Alertas tempranas: fatiga, asimetrías, cambios de fuerza/reacción.</li>
            <li>Mejor control al acelerar, frenar y cambiar de dirección.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold mb-2">🧠 Práctica mental</h3>
          <ul className="text-slate-700 space-y-1">
            <li>Entrenar la cabeza = entrenar el segundo que define el partido.</li>
            <li>Simulaciones de juego: decisión rápida, foco y calma bajo presión.</li>
            <li>Ideal con carga física: el cuerpo descansa y el cerebro mejora.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}