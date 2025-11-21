// components/PlayerExplainer.tsx
export default function PlayerExplainer({ locale = "es" }: { locale?: "es" | "en" | "de" }) {
  const copy = {
    es: {
      title: "¿Cómo se siente para el jugador?",
      blocks: [
        {
          h: "1) El casco BCI: pone un “monitor” a tu cerebro",
          bullets: [
            "Lee en tiempo real cómo se encienden tus circuitos cuando reaccionás, decidís o definís.",
            "Muestra cuándo estás fino y cuándo tu foco o timing se caen.",
            "Entrenás con juegos mentales donde el “joystick” es tu cerebro: si activás bien, el juego avanza; si no, se frena.",
          ],
        },
        {
          h: "2) rTMS: un empujón suave donde hace falta",
          bullets: [
            "Pulsos magnéticos cortos, desde fuera de la cabeza, sin agujas ni medicación.",
            "No “te duerme” el cerebro: despierta zonas para atención, control motor y manejo del dolor.",
            "Es como subirle un punto al ‘volumen’ de un circuito que está trabajando bajo.",
          ],
        },
        {
          h: "3) Juntos: primero medir, después empujar, después entrenar",
          bullets: [
            "Primero medimos con el casco qué circuitos están flojos (reacción, decisión, contacto, etc.).",
            "Luego la rTMS da un boost justo sobre esas zonas para que respondan mejor durante la sesión.",
            "Y enseguida entrenás con BCI/práctica mental repitiendo situaciones de juego mientras el circuito está “encendido”.",
            "El cerebro aprende más rápido porque recibe estímulo + práctica al mismo tiempo.",
          ],
        },
        {
          h: "4) Qué nota el jugador",
          bullets: [
            "Llegás antes a la pelota y decidís más rápido en el último segundo.",
            "Menos “ruido en la cabeza” cuando el partido está caliente.",
            "Volvés de la lesión con más confianza: cuerpo y cabeza responden juntos.",
          ],
        },
        {
          h: "5) Para qué NO es",
          bullets: [
            "No es magia, ni doping, ni te convierte en otro jugador de un día para el otro.",
            "Es un método para que tu talento y tu entrenamiento rindan más: misma persona, mejor versión.",
          ],
        },
        {
          h: "Rehabilitación • Prevención • Práctica mental",
          bullets: [
            "Rehab: volver al 100% con datos (EEG, fuerza, EMG, reacción). Mientras se cuida el músculo, entrenamos timing/foco/decisión.",
            "Prevención: menos lesiones y más suaves; alertas tempranas (fatiga, asimetrías, cambios de fuerza/reacción).",
            "Práctica mental: simulaciones de juego (decisión rápida, foco, calma bajo presión). Ideal cuando el cuerpo está cargado.",
          ],
        },
      ],
    },

    en: {
      title: "What it feels like for the player",
      blocks: [
        {
          h: "1) BCI headset: a live “monitor” for your brain",
          bullets: [
            "Reads circuits in real time while you react, decide, or finish.",
            "Shows when focus/timing is sharp vs. dropping.",
            "You train with mental games where your brain is the controller: good activation = progress.",
          ],
        },
        {
          h: "2) rTMS: a gentle boost where needed",
          bullets: [
            "Short magnetic pulses outside the head—no needles, no meds.",
            "It doesn’t “turn off” your brain—activates attention, motor control, and pain-modulation networks.",
            "Like turning up the volume on a low-working circuit.",
          ],
        },
        {
          h: "3) Together: measure → boost → train",
          bullets: [
            "First we measure which circuits are weak (reaction, decision, contact confidence, etc.).",
            "Then rTMS boosts those areas so they respond better during the session.",
            "Immediately you train with BCI/mental practice while the circuit is “on”.",
            "Faster learning: stimulus + practice at the same time.",
          ],
        },
        {
          h: "4) What players feel",
          bullets: [
            "Earlier to the ball; faster last-second decisions.",
            "Less head-noise under pressure.",
            "Return from injury with greater confidence—body and brain together.",
          ],
        },
        {
          h: "5) What it is NOT",
          bullets: [
            "Not magic or doping; no overnight transformation.",
            "A method to make your training and talent deliver more—same player, better version.",
          ],
        },
        {
          h: "Rehab • Prevention • Mental practice",
          bullets: [
            "Rehab: return to 100% with data (EEG, strength, EMG, reaction). While protecting muscle, we train timing/focus/decision.",
            "Prevention: fewer and milder injuries; early alerts (fatigue, asymmetry, strength/reaction changes).",
            "Mental: game simulations (fast decision, focus, composure). Ideal when the body needs rest.",
          ],
        },
      ],
    },

    de: {
      title: "So fühlt es sich für die Spieler:innen an",
      blocks: [
        {
          h: "1) BCI-Headset: ein Live-„Monitor“ fürs Gehirn",
          bullets: [
            "Liest Schaltkreise in Echtzeit bei Reaktion, Entscheidung oder Abschluss.",
            "Zeigt, wann Fokus/Timing scharf ist – und wann es abfällt.",
            "Training mit mentalen Spielen, bei denen dein Gehirn der Controller ist.",
          ],
        },
        {
          h: "2) rTMS: sanfter Schub, wo er fehlt",
          bullets: [
            "Kurze Magnetimpulse außerhalb des Kopfes – keine Nadeln, keine Medikamente.",
            "Schaltet das Gehirn nicht ab: aktiviert Netzwerke für Aufmerksamkeit, Motorik, Schmerzmodulation.",
            "Wie die Lautstärke eines zu leise arbeitenden Netzwerks anheben.",
          ],
        },
        {
          h: "3) Zusammen: messen → anheben → trainieren",
          bullets: [
            "Zuerst messen wir schwächere Netzwerke (Reaktion, Entscheidung, Kontaktvertrauen etc.).",
            "Dann rTMS-Boost, damit sie in der Session besser reagieren.",
            "Direkt danach Training mit BCI/mentaler Praxis, solange das Netzwerk „an“ ist.",
            "Schnelleres Lernen: Stimulus + Übung gleichzeitig.",
          ],
        },
        {
          h: "4) Was man spürt",
          bullets: [
            "Früher am Ball; schnellere Entscheidungen in der letzten Sekunde.",
            "Weniger Kopf-Rauschen unter Druck.",
            "Sicherere Rückkehr nach Verletzung: Körper und Kopf zusammen.",
          ],
        },
        {
          h: "5) Was es nicht ist",
          bullets: [
            "Kein Zauber, kein Doping, keine Wunder über Nacht.",
            "Eine Methode, damit Training und Talent mehr liefern – gleiche Person, bessere Version.",
          ],
        },
        {
          h: "Reha • Prävention • Mentales Training",
          bullets: [
            "Reha: Rückkehr zu 100 % mit Daten (EEG, Kraft, EMG, Reaktion) – Timing/Fokus/Entscheidung werden mittrainiert.",
            "Prävention: weniger und mildere Verletzungen; Frühwarnungen (Fatigue, Asymmetrien, Kraft/Reaktion).",
            "Mental: Spielsimulationen (schnelle Entscheidung, Fokus, Ruhe). Ideal, wenn der Körper Belastungspause braucht.",
          ],
        },
      ],
    },
  }[locale];

  return (
    <section className="mx-auto max-w-6xl space-y-6 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">{copy.title}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {copy.blocks.map((b, i) => (
          <div key={i} className="rounded-xl border border-slate-200 p-4">
            <h3 className="mb-2 font-semibold">{b.h}</h3>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {b.bullets.map((li, j) => (
                <li key={j}>{li}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}