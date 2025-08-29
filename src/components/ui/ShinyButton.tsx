// app/components/ui/ShinyButton.tsx
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

type Props = LinkProps & {
  children: ReactNode;
  href: string;
  /** white = белая кнопка; ghost = полупрозрачная с инверсией на hover */
  variant?: 'white' | 'ghost';
  className?: string;
};

export default function ShinyButton({
  href,
  children,
  variant = 'white',
  className = '',
  ...rest
}: Props) {
  const base =
    'group relative inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold ' +
    'ring-1 overflow-hidden transition-all duration-200 ' +
    'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ' +
    'focus-visible:outline-none focus-visible:ring-2';

  const white =
    'bg-white text-slate-900 ring-white/40 hover:bg-white/90 ' +
    'shadow-[0_6px_18px_rgba(255,255,255,0.15)]';

  const ghost =
    'border border-white/20 bg-white/5 text-white/90 ' +
    'hover:bg-white hover:text-slate-900 ring-white/20 ' +
    'shadow-[0_6px_18px_rgba(255,255,255,0.10)]';

  return (
    <Link
      href={href}
      {...rest}
      className={`${base} ${variant === 'white' ? white : ghost} ${className}`}
    >
      {children}

      {/* мягкое свечение на hover */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-full
          bg-[radial-gradient(120%_180%_at_50%_-40%,rgba(0,0,0,0.08),transparent)]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
        "
      />

      {/* «sheen»-блик, проезжающий по кнопке */}
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
