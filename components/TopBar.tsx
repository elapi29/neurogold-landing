// components/TopBar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

type Locale = "es" | "en" | "de";

export default function TopBar({ locale = "es" }: { locale?: Locale }) {
  const nav = [
    { href: `/${locale}`, label: locale === "de" ? "Start" : locale === "en" ? "Home" : "Inicio" },
    { href: `/${locale}#lead`, label: locale === "de" ? "Kontakt" : locale === "en" ? "Contact" : "Contacto" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-sm shadow-black/20">
          <div className="flex items-center justify-between px-4 py-2">
            <Link href={`/${locale}`} className="flex items-center gap-3">
              {/* OJO: ruta absoluta desde /public. Next le agrega basePath automáticamente */}
              <Image
                src="/partners/NDAAWordmark.png"
                alt="ND·AA"
                width={120}
                height={28}
                priority
                className="h-7 w-auto"
              />
              <span className="hidden sm:block text-slate-100/90 font-medium tracking-tight">
                Neurogold Training
              </span>
            </Link>

            <nav className="flex items-center gap-4">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="text-slate-200/80 hover:text-white text-sm font-medium"
                >
                  {i.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}