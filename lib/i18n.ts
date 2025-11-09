export type Locale = 'es' | 'en' | 'de';

const messages = {
  es: {
    hero: {
      title: "Neurogold Training",
      subtitle: "Rendimiento sustentable con neurociencia aplicada. Entrenamientos breves y medibles para equipos y atletas."
    },
    cta: { primary: "Quiero saber más" }
  },
  en: {
    hero: {
      title: "Neurogold Training",
      subtitle: "Sustainable performance powered by applied neuroscience. Short, measurable training blocks for teams and athletes."
    },
    cta: { primary: "Keep me posted" }
  },
  de: {
    hero: {
      title: "Neurogold Training",
      subtitle: "Nachhaltige Leistung mit angewandter Neurowissenschaft. Kurze, messbare Trainingsblöcke für Teams und Athlet:innen."
    },
    cta: { primary: "Mehr erfahren" }
  }
} as const;

export function dict(locale: Locale) {
  return messages[locale] ?? messages.en;
}
