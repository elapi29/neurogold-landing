// lib/i18n.ts
export type Locale = 'es' | 'en' | 'de';

type Dict = {
  hero: { title: string; subtitle: string; cta: string };
  how: { title: string; bullets: string[] };
  measure: { title: string; bullets: string[] };
  kpi: { title: string; bullets: string[]; note: string };
  pricing: { title: string; items: { name: string; desc: string; cta: string }[]; foot?: string };
  faq: { title: string; qa: { q: string; a: string }[] };
  players: {
    title: string;
    rehab: { title: string; bullets: string[] };
    prevent: { title: string; bullets: string[] };
    mental: { title: string; bullets: string[] };
  };
};

const messages: Record<Locale, Dict> = {
  es: {
    hero: {
      title: "Neurogold Training",
      subtitle: "Rendimiento sustentable con neurociencia aplicada. Entrenamientos breves y medibles para equipos y atletas.",
      cta: "Quiero saber más",
    },
    how: {
      title: "¿Cómo funciona?",
      bullets: [
        "Sesiones de 25–40 min, 2× por semana.",
        "Screening breve y objetivos por posición/rol.",
        "Neuronavegación rTMS con parámetros seguros.",
        "Bloques guiados enfocados en foco, control y consistencia.",
        "Plan de avance y registro simple del progreso."
      ],
    },
    measure: {
      title: "¿Qué medimos?",
      bullets: [
        "Conectividad cerebral: coordinación y equilibrio funcional entre áreas.",
        "Ejecución en cancha/gimnasio: consistencia, precisión y tiempos simples.",
        "Panel bioquímico deportivo (opcional) para energía, recuperación e inflamación."
      ],
    },
    kpi: {
      title: "KPIs que seguimos",
      bullets: [
        "Rendimiento: consistencia de ejecución, precisión en drills, tiempos de respuesta.",
        "Fatiga/recuperación: percepción de esfuerzo y recuperación entre prácticas/partidos.",
        "Disponibilidad: días disponibles por mes y retorno progresivo tras microlesiones."
      ],
      note: "Indicadores comparados contra la línea de base de cada atleta/equipo.",
    },
    pricing: {
      title: "Packs",
      items: [
        { name: "Intro (1 visita)", desc: "Screening + primera sesión.", cta: "Pedir precio" },
        { name: "Sprint (4–6 semanas)", desc: "2 sesiones/semana + seguimiento.", cta: "Pedir propuesta" },
        { name: "Club Pack", desc: "Grupos (10–20 atletas), reportes ejecutivos y coordinación on-site.", cta: "Propuesta para tu equipo" },
        { name: "Opcionales", desc: "Panel bioquímico, workshops, días on-site.", cta: "Presupuesto a medida" }
      ]
    },
    faq: {
      title: "FAQ",
      qa: [
        { q: "¿Quién puede participar?", a: "Mayores de 16 años. Requiere screening previo." },
        { q: "¿Duele?", a: "No. Puede sentirse hormigueo o 'taps' suaves en la cabeza." },
        { q: "¿Cuánto dura?", a: "25–40 minutos por visita." },
        { q: "¿Impacta la agenda?", a: "Sí, es compatible: sesiones breves y sin tiempos de baja." },
        { q: "¿Privacidad de datos?", a: "Datos protegidos y uso restringido al objetivo del programa." }
      ]
    },
    players: {
      title: "Rehabilitación · Prevención de lesiones · Práctica mental",
      rehab: {
        title: "🩺 Rehabilitación",
        bullets: [
          "Volver bien, no “a medias”: objetivo = jugar al 100 %, no sólo sin dolor.",
          "Recuperación con datos: EEG, fuerza, EMG, reacción para saber cuándo estás listo.",
          "Mientras se cuida el músculo, también entrenamos timing, foco y decisiones."
        ]
      },
      prevent: {
        title: "🛡️ Prevención de lesiones",
        bullets: [
          "No es “no lesionarse”: es menos lesiones.",
          "Vemos alertas tempranas: fatiga, asimetrías, cambios en fuerza y reacción.",
          "Mejor control al acelerar, frenar y cambiar de dirección."
        ]
      },
      mental: {
        title: "🧠 Práctica mental",
        bullets: [
          "Entrenar la cabeza = entrenar el segundo que define el partido.",
          "Simulamos situaciones de juego: decisión rápida, foco, calma bajo presión.",
          "Ideal cuando el cuerpo está cargado: el cuerpo descansa, el cerebro sigue mejorando."
        ]
      }
    }
  },

  en: {
    hero: {
      title: "Neurogold Training",
      subtitle: "Sustainable performance powered by applied neuroscience. Short, measurable training blocks for teams and athletes.",
      cta: "Keep me posted",
    },
    how: {
      title: "How it works",
      bullets: [
        "25–40 min sessions, 2× per week.",
        "Brief screening and role/position goals.",
        "rTMS neuronavigation with safe parameters.",
        "Guided blocks focused on focus, control and consistency.",
        "Progress plan and simple tracking."
      ],
    },
    measure: {
      title: "What we measure",
      bullets: [
        "Brain connectivity: coordination and functional balance across areas.",
        "On-field/gym execution: consistency, accuracy and simple timing.",
        "Optional sports blood panel for energy, recovery and inflammation."
      ],
    },
    kpi: {
      title: "KPIs we track",
      bullets: [
        "Performance: execution consistency, drill accuracy, response times.",
        "Fatigue/recovery: perceived effort and recovery between sessions/games.",
        "Availability: days available per month; progressive return after micro-injuries."
      ],
      note: "Indicators are compared to each athlete/team baseline.",
    },
    pricing: {
      title: "Packs",
      items: [
        { name: "Intro (1 visit)", desc: "Assessment + first session.", cta: "Request pricing" },
        { name: "Sprint (4–6 weeks)", desc: "2 sessions/week + follow-up.", cta: "Request a quote" },
        { name: "Club Pack", desc: "Groups (10–20 athletes), executive reports, on-site coordination.", cta: "Request a team quote" },
        { name: "Add-ons", desc: "Sports blood panel, workshops, extra on-site days.", cta: "Custom estimate" }
      ]
    },
    faq: {
      title: "FAQ",
      qa: [
        { q: "Who is eligible?", a: "16+ with a brief screening." },
        { q: "Does it hurt?", a: "No. You may feel tingling or gentle taps." },
        { q: "Session duration?", a: "25–40 minutes per visit." },
        { q: "Schedule friendly?", a: "Yes — short sessions, no downtime." },
        { q: "Data privacy?", a: "Protected data, used only for program goals." }
      ]
    },
    players: {
      title: "Rehabilitation · Injury prevention · Mental practice",
      rehab: {
        title: "🩺 Rehabilitation",
        bullets: [
          "Come back fully, not “halfway”: aim to play at 100 %, not just pain-free.",
          "Data-driven recovery: EEG, strength, EMG, reaction to know when you’re ready.",
          "While the muscle heals, we also train timing, focus and decision-making."
        ]
      },
      prevent: {
        title: "🛡️ Injury prevention",
        bullets: [
          "It’s not “no injuries”: it’s fewer and milder injuries.",
          "Early alerts: fatigue, asymmetries, changes in strength and reaction.",
          "Better control when accelerating, braking and changing direction."
        ]
      },
      mental: {
        title: "🧠 Mental practice",
        bullets: [
          "Training the head = training the decisive second.",
          "We simulate game situations: fast decisions, focus, calm under pressure.",
          "Ideal when the body is loaded: the body rests, the brain keeps improving."
        ]
      }
    }
  },

  de: {
    hero: {
      title: "Neurogold Training",
      subtitle: "Nachhaltige Leistung mit angewandter Neurowissenschaft. Kurze, messbare Trainingsblöcke für Teams und Athlet:innen.",
      cta: "Mehr erfahren",
    },
    how: {
      title: "So funktioniert es",
      bullets: [
        "25–40 Min pro Session, 2× pro Woche.",
        "Kurzes Screening und Zielsetzung nach Rolle/Position.",
        "rTMS-Neuronavigation mit sicheren Parametern.",
        "Geführte Blöcke mit Fokus auf Fokus, Kontrolle, Konstanz.",
        "Fortschrittsplan und einfache Verlaufsdokumentation."
      ],
    },
    measure: {
      title: "Was wir messen",
      bullets: [
        "Gehirn-Konnektivität: Koordination und funktionelles Gleichgewicht.",
        "Ausführung auf Feld/Gym: Konstanz, Präzision, einfache Zeiten.",
        "Optionales Sport-Laborpanel für Energie, Regeneration und Entzündung."
      ],
    },
    kpi: {
      title: "KPIs",
      bullets: [
        "Leistung: Ausführungskonstanz, Drill-Präzision, Reaktionszeiten.",
        "Fatigue/Erholung: subjektive Belastung und Erholung zwischen Einheiten/Spielen.",
        "Verfügbarkeit: verfügbare Tage/Monat; stufenweise Rückkehr nach Mikroverletzungen."
      ],
      note: "Indikatoren werden mit der individuellen Baseline verglichen.",
    },
    pricing: {
      title: "Pakete",
      items: [
        { name: "Intro (1 Termin)", desc: "Assessment + erste Session.", cta: "Preis anfragen" },
        { name: "Sprint (4–6 Wochen)", desc: "2 Sessions/Woche + Follow-up.", cta: "Angebot anfordern" },
        { name: "Club Pack", desc: "Gruppen (10–20 Athlet:innen), Executive Report, On-Site-Koordination.", cta: "Team-Angebot anfordern" },
        { name: "Optionen", desc: "Sport-Laborpanel, Workshops, zusätzliche On-Site-Tage.", cta: "Individuelles Angebot" }
      ]
    },
    faq: {
      title: "FAQ",
      qa: [
        { q: "Wer ist geeignet?", a: "Ab 16 Jahren mit kurzem Screening." },
        { q: "Tut es weh?", a: "Nein. Ein Kribbeln oder sanfte Klopf-Impulse sind möglich." },
        { q: "Dauer pro Termin?", a: "25–40 Minuten." },
        { q: "Kalender-freundlich?", a: "Ja — kurze Sessions, keine Ausfallzeiten." },
        { q: "Datenschutz?", a: "Geschützte Daten, Nutzung nur für Programmziele." }
      ]
    },
    players: {
      title: "Rehabilitation · Verletzungsprävention · Mentales Training",
      rehab: {
        title: "🩺 Rehabilitation",
        bullets: [
          "Vollständig zurückkommen, nicht „halb“: Ziel = 100 %, nicht nur schmerzfrei.",
          "Datenbasierte Rückkehr: EEG, Kraft, EMG, Reaktion — wissen, wann du bereit bist.",
          "Während der Muskel heilt, trainieren wir Timing, Fokus und Entscheidungen."
        ]
      },
      prevent: {
        title: "🛡️ Verletzungsprävention",
        bullets: [
          "Nicht „keine Verletzungen“: weniger und mildere Verletzungen.",
          "Frühwarnungen: Fatigue, Asymmetrien, Veränderungen in Kraft und Reaktion.",
          "Besseres Handling bei Beschleunigen, Bremsen und Richtungswechsel."
        ]
      },
      mental: {
        title: "🧠 Mentales Training",
        bullets: [
          "Den Kopf trainieren = die entscheidende Sekunde trainieren.",
          "Wir simulieren Spielsituationen: schnelle Entscheidung, Fokus, Ruhe unter Druck.",
          "Ideal bei hoher körperlicher Belastung: Körper ruht, Gehirn verbessert weiter."
        ]
      }
    }
  }
};

export function dict(locale: Locale): Dict {
  return messages[locale] ?? messages.es;
}