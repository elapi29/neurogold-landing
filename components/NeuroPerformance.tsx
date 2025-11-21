// components/NeuroPerformance.tsx
import Image from "next/image";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""; // "" local, "/neurogold-landing" en Pages

export default function NeuroPerformance() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
        Rehabilitación · Prevención de lesiones · Práctica mental
      </h2>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <Image
          src={`${prefix}/pipeline/neuro-performance.jpg`}
          alt="Rehabilitación, prevención de lesiones y práctica mental — Neurogold"
          width={1920}
          height={1920}
          className="w-full h-auto object-cover"
          priority
          unoptimized
        />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-white/60 p-5">
          <h3 className="font-semibold mb-2">🩺 Rehabilitación</h3>
          <ul className="space-y-1 text-slate-700">
            <li>Volver bien, no “a medias”: 100 %, no sólo sin dolor.</li>
            <li>EEG, fuerza, EMG y reacción para saber cuándo estás listo.</li>
            <li>Mientras se cuida el músculo, entrenamos timing, foco y decisiones.</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-white/60 p-5">
          <h3 className="font-semibold mb-2">🛡️ Prevención de lesiones</h3>
          <ul className="space-y-1 text-slate-700">
            <li>No es “no lesionarse”: es menos lesiones.</li>
            <li>Alertas tempranas: fatiga, asimetrías, cambios en fuerza y reacción.</li>
            <li>Mejor control al acelerar, frenar y cambiar de dirección.</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-white/60 p-5">
          <h3 className="font-semibold mb-2">🧠 Práctica mental</h3>
          <ul className="space-y-1 text-slate-700">
            <li>Entrenar la cabeza = entrenar el segundo que define el partido.</li>
            <li>Simulamos situaciones de juego: decisión rápida, foco y calma.</li>
            <li>Ideal con el cuerpo cargado: el cerebro sigue mejorando.</li>
          </ul>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-slate-500">
        (Imágenes desde <code>/public/pipeline/</code> · archivo: <code>neuro-performance.jpg</code>)
      </p>
    </section>
  );
}