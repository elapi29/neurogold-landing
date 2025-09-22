"use client";
import { useRouter } from "next/navigation";

export default function EmailCapture() {
  const router = useRouter();
  // ⚠️ usa tu endpoint real de Formspree aquí
  const endpoint = "https://formspree.io/f/xdkwnwwn";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      // POST simple (multipart/form-data) sin headers extras
      const res = await fetch(endpoint, { method: "POST", body: data });
      if (res.ok) {
        router.push("/thanks/");
      } else {
        // fallback: si Formspree devuelve 4xx/5xx, hacemos POST HTML nativo
        form.submit();
      }
    } catch {
      // fallback por si hay error de red
      form.submit();
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      action={endpoint}   // fallback sin JS
      method="POST"       // MUY importante
      className="w-full max-w-md mx-auto flex gap-2"
      noValidate
    >
      <label htmlFor="email" className="sr-only">Tu email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Dejá tu email"
        className="flex-1 rounded-xl border border-slate-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        required
        autoComplete="email"
      />
      <button type="submit" className="rounded-xl px-5 py-3 bg-primary text-white font-semibold shadow hover:opacity-90">
        Quiero saber más
      </button>

      {/* anti-spam y metadata */}
      <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
      <input type="hidden" name="_subject" value="Nuevo lead — Neurogold" />
      <input type="hidden" name="_language" value="es" />
    </form>
  );
}
