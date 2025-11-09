"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Locale } from "../lib/i18n";

export default function TopBar({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      ref.current.dataset.scrolled = window.scrollY > 24 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 transition
                 data-[scrolled=false]:bg-transparent
                 data-[scrolled=true]:backdrop-blur data-[scrolled=true]:bg-white/70"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo → dentro del mismo idioma */}
        <Link href="." className="font-bold text-slate-900">Neurogold</Link>
        <LangSwitcher locale={locale} />
      </nav>
    </header>
  );
}

function LangSwitcher({ locale }: { locale: Locale }) {
  const items: { code: Locale; label: string }[] = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
  ];
  return (
    <div className="rounded-xl bg-white/70 px-2 py-1 shadow-sm backdrop-blur">
      {items.map((it) => (
        <Link
          key={it.code}
          // desde /<basePath>/<locale>/ ir a ../<otro>/
          href={`../${it.code}/`}
          className={`px-2 py-1 text-sm ${locale === it.code ? "font-semibold" : "opacity-60"}`}
        >
          {it.label}
        </Link>
      ))}
    </div>
  );
}