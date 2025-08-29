// app/components/header/Header.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const items = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

/** Простой scroll-spy: активна секция, чья верхняя граница уже прошла под шапкой */
function useScrollSpy(sectionIds: string[], offset = 80) {
  const [active, setActive] = useState(sectionIds[0] ?? '');
  useEffect(() => {
    const handler = () => {
      let current = sectionIds[0] ?? '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = id;
        else break;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [sectionIds, offset]);
  return active;
}

export default function Header() {
  const active = useScrollSpy(
    items.map((i) => i.id),
    80
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase =
    'px-3 py-2 text-sm font-medium transition-colors rounded-full';
  const linkIdle = 'text-white/70 hover:text-white hover:bg-white/10';
  const linkActive = 'text-white';

  return (
    <nav className="fixed top-3 inset-x-0 z-[9999]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* DESKTOP (md+) — твоя капсула со всем контентом */}
        <div
          className={[
            'hidden md:grid grid-cols-[1fr_auto_1fr] items-center',
            'rounded-[999px]',
            scrolled ? 'bg-zinc-950/90' : 'bg-zinc-950/80',
            'ring-1 ring-black/70',
            'shadow-[0_8px_24px_rgba(0,0,0,0.35)]',
            'backdrop-blur supports-[backdrop-filter]:backdrop-saturate-150',
            'px-3 py-2',
          ].join(' ')}
        >
          {/* LEFT: пункты */}
          <ul className="flex items-center gap-2">
            {items.map((it) => (
              <li key={it.id}>
                <Link
                  href={it.href}
                  className={`${linkBase} ${
                    active === it.id ? linkActive : linkIdle
                  }`}
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CENTER: бренд */}
          <Link
            href="#home"
            className="justify-self-center select-none no-underline"
          >
            <span className="text-white font-semibold tracking-wide">
              DANIYAR KANGOZHAYEV
            </span>
          </Link>

          {/* RIGHT: текст-линк + CTA */}
          <div className="justify-self-end flex items-center gap-3">
            <Link
              href="/resume"
              className="px-3 py-2 text-sm font-medium rounded-full text-white hover:bg-white/10 transition-colors"
            >
              Resume
            </Link>
            <Link
              href="#contact"
              className="
                group relative inline-flex items-center rounded-full
                bg-white text-slate-900 text-sm font-semibold
                px-4 py-2 ring-1 ring-white/40
                shadow-[0_6px_18px_rgba(255,255,255,0.15)]
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(255,255,255,0.22)]
                active:translate-y-0 active:scale-[0.98]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                overflow-hidden
              "
            >
              Contact
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(120%_180%_at_50%_-40%,rgba(0,0,0,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="pointer-events-none absolute -inset-px overflow-hidden rounded-full">
                <span className="absolute top-0 left-[-150%] h-full w-[140%] skew-x-[-20deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.75),transparent)] transition-transform duration-700 group-hover:translate-x-[180%]" />
              </span>
            </Link>
          </div>
        </div>

        {/* MOBILE (<md) — только пункты меню, без бренда и кнопок */}
        <div
          className={[
            'md:hidden flex items-center justify-center',
            'rounded-[999px]',
            scrolled ? 'bg-zinc-950/90' : 'bg-zinc-950/80',
            'ring-1 ring-black/70',
            'shadow-[0_8px_24px_rgba(0,0,0,0.35)]',
            'backdrop-blur supports-[backdrop-filter]:backdrop-saturate-150',
            'px-2 py-2',
          ].join(' ')}
        >
          <ul className="flex items-center gap-1">
            {items.map((it) => (
              <li key={it.id}>
                <Link
                  href={it.href}
                  className={`${linkBase} ${
                    active === it.id ? linkActive : linkIdle
                  }`}
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
