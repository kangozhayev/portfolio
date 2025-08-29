'use client';

import Image from 'next/image';
import Aurora from '../aurora/Aurora';
import Link from 'next/link';
import ShinyButton from '../ui/ShinyButton';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={['#FF7A00', '#FF3D81', '#7B2EFF']}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(255,122,0,0.25)_0%,transparent_60%),radial-gradient(120%_80%_at_100%_0%,rgba(0,180,255,0.25)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 pt-[var(--nav-offset,0px)] min-h-[calc(100dvh-var(--nav-offset,0px))] flex items-center">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          <div className="text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
              Hey,{` `}
              <br className="hidden sm:block" />
              <span className="whitespace-nowrap">this is Daniyar</span>
            </h1>

            <p className="mt-4 text-lg text-white/80">
              Professional Web Developer
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <div className="mt-10 flex flex-wrap items-center gap-4 justify-center md:justify-start">
                <ShinyButton
                  href="/about"
                  variant="white"
                >
                  About Me
                </ShinyButton>
                <ShinyButton
                  href="/resume"
                  variant="ghost"
                >
                  Resume
                </ShinyButton>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative h-[260px] w-[260px] md:h-[360px] md:w-[360px] rounded-full overflow-hidden  shadow-2xl shadow-black/40 ">
              <Image
                src="/222.jpg"
                alt="Daniyar avatar"
                fill
                priority
                className="object-cover scale-[1.18]"
                sizes="(max-width: 768px) 260px, 360px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
