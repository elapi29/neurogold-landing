"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function TopBar({ locale }: { locale: "es"|"en"|"de" }) {
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
        <Link href={`/${locale}/`} className="font-bold">Neurogold</Link>
        <div className="flex items-center gap-3">
          <LangSwitcher locale={locale} />
        </div>
      </nav>
    </header>
  );
}

function LangSwitcher({ locale }: { locale: "es"|"en"|"de" }) {
  const items = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
  ];
  return (
    <div className="rounded-xl bg-white/60 px-2 py-1 shadow-sm">
      {items.map((it) => (
        <Link key={it.code}
          className={`px-2 py-1 text-sm ${locale===it.code ? "font-semibold" : "opacity-60"}`}
          href={`/${it.code}/`}
        >
          {it.label}
        </Link>
      ))}
    </div>
  );
}
