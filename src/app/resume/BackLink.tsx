'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BackLink() {
  const router = useRouter();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
    // иначе пойдём по href="/"
  };

  return (
    <Link
      href="/"
      onClick={onClick}
      className="
        group relative inline-flex items-center gap-2 rounded-full
        border border-white/20 bg-white/5 text-white/90
        px-4 py-2 text-sm font-semibold
        ring-1 ring-white/20
        shadow-[0_6px_18px_rgba(255,255,255,0.10)]
        transition-all duration-200
        hover:-translate-y-0.5 hover:bg-white hover:text-slate-900
        active:translate-y-0 active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
        overflow-hidden cursor-pointer
      "
      aria-label="Back"
    >
      <span aria-hidden>←</span>
      <span>Back</span>

      {/* мягкое свечение */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-full
          bg-[radial-gradient(120%_180%_at_50%_-40%,rgba(0,0,0,0.08),transparent)]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
        "
      />
      {/* sheen-блик */}
      <span className="pointer-events-none absolute -inset-px overflow-hidden rounded-full">
        <span
          className="
            absolute top-0 left-[-150%] h-full w-[140%] skew-x-[-20deg]
            bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.75),transparent)]
            transition-transform duration-700
            group-hover:translate-x-[180%]
          "
        />
      </span>
    </Link>
  );
}
