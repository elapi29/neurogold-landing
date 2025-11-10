// components/TopBar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

type Locale = 'es' | 'en' | 'de';

// IMPORTANTES para GitHub Pages / basePath
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''; // "" en local, "/neurogold-landing" en Pages

export default function TopBar({ locale = 'es' }: { locale?: Locale }) {
  // Usá trailing slash porque tu build tiene `trailingSlash: true`
  const home = `/${locale}/`;

  const nav = [
    { href: home, label: locale === 'de' ? 'Start' : locale === 'en' ? 'Home' : 'Inicio' },
    { href: `${home}#lead`, label: locale === 'de' ? 'Kontakt' : locale === 'en' ? 'Contact' : 'Contacto' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-sm shadow-black/20">
          <div className="flex items-center justify-between px-4 py-2">
            {/* LOGO + marca */}
            <Link href={home} className="flex items-center gap-3" prefetch={false}>
              <Image
                src={`${prefix}/partners/NDAAWordmark.png`}
                alt="ND·AA — Neurociencias Deportivas Argentinas"
                width={120}
                height={28}
                priority
                className="h-7 w-auto"
              />
              <span className="hidden sm:block text-slate-100/90 font-medium tracking-tight">
                Neurogold Training
              </span>
            </Link>

            {/* NAV */}
            <nav className="flex items-center gap-4">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  prefetch={false}
                  className="text-slate-200/80 hover:text-white text-sm font-medium"
                >
                  {i.label}
                </Link>
              ))}
              {/* Switcher simple de idioma */}
              <div className="ml-2 hidden sm:flex items-center gap-1">
                {(['es','en','de'] as Locale[]).map(code => {
                  const href = `/${code}/`;
                  const active = code === locale;
                  return (
                    <Link
                      key={code}
                      href={href}
                      prefetch={false}
                      className={`rounded-md px-2 py-1 text-xs ${
                        active ? 'bg-slate-100 text-slate-900' : 'text-slate-200/80 hover:text-white hover:bg-white/10'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {code.toUpperCase()}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}