import Image from "next/image";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function NeuroPerformance({ locale = "es" }: { locale?: "es" | "en" | "de" }) {
  const copy = {
    es: {
      title: "Del entrenamiento mental al rendimiento medible",
      text: "Cadena completa: práctica guiada de Imaginería Motora (MI), mejora de rendimiento, neuromodulación (BCI + rTMS) y prevención de lesiones.",
      alt: "MI guiada, mejora de rendimiento, neuromodulación y prevención de lesiones"
    },
    en: {
      title: "From mental practice to measurable performance",
      text: "Full chain: guided Motor Imagery (MI), performance improvement, neuromodulation (BCI + rTMS), and injury prevention.",
      alt: "Guided MI, performance improvement, neuromodulation and injury prevention"
    },
    de: {
      title: "Von mentalem Training zur messbaren Leistung",
      text: "Komplette Kette: geführte Motor Imagery (MI), Leistungssteigerung, Neuromodulation (BCI + rTMS) und Verletzungsprävention.",
      alt: "Geführte MI, Leistungssteigerung, Neuromodulation und Verletzungsprävention"
    }
  }[locale];

  return (
    <section className="mx-auto max-w-6xl px-4 space-y-4">
      <h2 className="text-2xl font-bold">{copy.title}</h2>
      <p className="text-slate-700">{copy.text}</p>

      <div className="rounded-2xl overflow-hidden border shadow-sm bg-black">
        <Image
          src={`${prefix}/pipeline/neuro-performance.jpg`}
          alt={copy.alt}
          width={1600}
          height={1600}
          className="w-full h-auto object-cover"
          priority={false}
        />
      </div>
    </section>
  );
}
