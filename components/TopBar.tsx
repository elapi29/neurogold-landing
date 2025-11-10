"use client";
import Image from "next/image";
import Link from "next/link";

export default function TopBar({ locale = "es" }: { locale?: "es" | "en" | "de" }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 shadow-sm">
          <div className="flex items-center justify-between px-4 py-2">
            {/* Brand */}
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <div className="relative h-8 w-[110px] md:h-9 md:w-[140px]">
                {/* Tu PNG exacto */}
                <Image
                  src="/partners/NDAAWordmark.png"
                  alt="ND°AA — Neurociencias Deportivas Argentinas"
                  fill
                  sizes="(max-width: 768px) 110px, 140px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="hidden sm:block text-sm font-medium text-white/80">
                Neurogold Training
              </span>
            </Link>

            {/* Idiomas simples (si ya tienes i18n, puedes mantener esto o quitarlo) */}
            <nav className="flex items-center gap-2 text-xs">
              {["es", "en", "de"].map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`rounded-md px-2 py-1 ${
                    l === locale ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}