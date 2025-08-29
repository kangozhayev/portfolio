import ShinyButton from '../ui/ShinyButton';

export default function About() {
  return (
    <section
      id="about"
      className="
        relative w-full bg-black text-white
        pt-[var(--nav-offset,0px)]
        min-h-[calc(100dvh-var(--nav-offset,0px))]  /* высота = экран - высота хедера */
        flex items-center
      "
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About me
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            I’m a frontend developer who turns ideas into fast, polished web
            applications. I work with React, TypeScript, and Next.js, and I
            value clean architecture, intuitive UIs, and measurable performance.
            <br />
            Core stack: React, TypeScript, Next.js, Redux Toolkit, Node.js,
            Tailwind CSS.
            <br />
            Here’s my resume.
          </p>

          <div className="mt-8 flex gap-4">
            <div className="mt-8 flex gap-4">
              <ShinyButton
                href="/resume"
                variant="ghost"
              >
                Resume
              </ShinyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
