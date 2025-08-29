// app/components/ProjectsSection.tsx
import Link from 'next/link';
import ShinyButton from '../ui/ShinyButton';

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative w-full bg-black text-white
        pt-[var(--nav-offset,0px)]
        min-h-[calc(100dvh-var(--nav-offset,0px))]
        flex items-center
      "
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Projects
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Here are my projects—side projects, learning exercises, and
            real-world work—where I use React, TypeScript, and Next.js to build
            fast, polished interfaces.
          </p>
          <div className="mt-8">
            <div className="mt-8">
              <ShinyButton
                href="/projects"
                variant="white"
              >
                My Projects
              </ShinyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
