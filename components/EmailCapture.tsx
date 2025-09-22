"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"error">("idle");
  const router = useRouter();

  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORMSPREE_ID";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const body = new FormData(e.currentTarget);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body,
        mode: "cors",
      });
      if (res.ok) {
        setStatus("ok");
        setEmail("");
        router.push("/thanks/");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto flex gap-2" noValidate>
      <label htmlFor="email" className="sr-only">Tu email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Dejá tu email"
        className="flex-1 rounded-xl border border-slate-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        required
        autoComplete="email"
        aria-invalid={status==="error" && !email ? "true" : "false"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl px-5 py-3 bg-primary text-white font-semibold shadow hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Quiero saber más"}
      </button>
      {/* anti-spam */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />
      <input type="hidden" name="_subject" value="Nuevo lead — Neurogold" />
      <input type="hidden" name="_language" value="es" />
    </form>
  );
}
