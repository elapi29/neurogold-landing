// components/EmailCapture.tsx
"use client";
import { useRouter } from "next/navigation";

export default function EmailCapture() {
  const router = useRouter();
  const endpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xxxxxxx";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(endpoint, { method: "POST", body: data });
      if (res.ok) router.push("/thanks/");
      else form.submit(); // fallback HTML
    } catch {
      form.submit();      // fallback si hay error de red
    }
  }

  return (
    <form onSubmit={onSubmit} action={endpoint} method="POST" className="w-full max-w-md mx-auto flex gap-2" noValidate>
      <label htmlFor="email" className="sr-only">Tu email</label>
      <input id="email" type="email" name="email" required autoComplete="email"
        placeholder="Dejá tu email"
        className="flex-1 rounded-xl border border-slate-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent" />
      <button type="submit" className="rounded-xl px-5 py-3 bg-primary text-white font-semibold shadow hover:opacity-90">
        Quiero saber más
      </button>
      <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
      <input type="hidden" name="_subject" value="Nuevo lead — Neurogold" />
      <input type="hidden" name="_language" value="es" />
    </form>
  );
}
