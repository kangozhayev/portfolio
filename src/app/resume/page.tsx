// app/resume/page.tsx
'use client';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <main className="bg-white text-slate-900">
      <section
        className="
          mx-auto max-w-3xl
          px-6 sm:px-8 md:px-10
          pt-[var(--nav-offset,72px)] pb-16
          min-h-[calc(100dvh-var(--nav-offset,72px))]
          print:pt-6 print:pb-0
        "
      >
        {/* Top Back link */}
        <div className="pt-4 pb-6 print:hidden">
          <Link
            href="/"
            className="
              inline-flex items-center gap-2 rounded-full
              border border-slate-200 bg-white
              px-4 py-2 text-sm font-medium text-slate-700
              shadow-sm hover:bg-slate-50 transition-colors
            "
            aria-label="Back"
          >
            <span aria-hidden>←</span>
            <span>Back</span>
          </Link>
        </div>

        {/* Header */}
        <header>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Daniyar Kangozhayev
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Frontend Developer — React, TypeScript, Next.js
          </p>

          {/* Contacts (no location/citizenship line) */}
          <ul className="mt-4 flex flex-wrap  gap-x-4 gap-y-2 text-slate-700">
            <li>
              <a
                href="tel:+77777710011"
                className="hover:underline"
              >
                +77777710011
              </a>
            </li>
            <li className="text-slate-300"></li>
            <li>
              <a
                href="mailto:kangozhayev@gmail.com"
                className="hover:underline"
              >
                kangozhayev@gmail.com
              </a>
            </li>
            <li className="text-slate-300"></li>
            <li>
              <Link
                href="https://t.me/kangozhayev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                t.me/kangozhayev
              </Link>
            </li>
          </ul>
        </header>

        {/* Summary */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold ">Summary</h2>
          <p className="mt-3 max-w-[68ch] mx-auto text-slate-700 leading-relaxed text-justify">
            I’m a frontend developer who turns ideas into fast, polished web
            applications. I work with React, TypeScript, and Next.js, and I
            value clean architecture, intuitive UIs, and measurable performance.
            Core stack: React, TypeScript, Next.js, Redux Toolkit, Node.js,
            Tailwind CSS.
          </p>
        </section>

        {/* Experience */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold ">Experience</h2>

          <div className="mt-6 space-y-10">
            {/* Web Solutions Lab */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <div className="min-w-0">
                  <h3 className="font-semibold">
                    Frontend Developer | React / TypeScript / Next.js
                  </h3>
                  <span className="text-slate-500">Web Solutions Lab</span>
                </div>
                <p className="text-slate-500 whitespace-nowrap">
                  July 2024 — Present
                </p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1.5 text-slate-700 max-w-[68ch] mx-auto">
                <li>
                  Developed and maintained SPA and SSR applications with React
                  and Next.js using TypeScript.
                </li>
                <li>
                  Integrated REST APIs; implemented JWT-based authentication;
                  managed state with Redux Toolkit and Zustand.
                </li>
                <li>
                  Built responsive, cross-browser layouts (HTML5, CSS3/SCSS,
                  Flexbox, Grid) and Tailwind CSS.
                </li>
                <li>Configured routing, forms and validation.</li>
                <li>Deployed to Vercel.</li>
                <li>Implemented Supabase Auth (email/password, OAuth).</li>
                <li>
                  Built server logic for email delivery with Nodemailer (contact
                  form, SMTP config, error handling).
                </li>
              </ul>
              <p className="mt-2 text-slate-600 max-w-[68ch] mx-auto">
                Stack: React, Next.js, TypeScript, JavaScript (ES6+), Redux
                Toolkit, Zustand, REST API, HTML5, CSS3/SCSS, Git, Webpack,
                Vite, Figma.
              </p>
            </div>

            {/* EPAM Kazakhstan — Internship (Tech Orda) */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <div className="min-w-0">
                  <h3 className="font-semibold">
                    Frontend Developer — Internship
                  </h3>
                  <span className="text-slate-500">EPAM Kazakhstan</span>
                </div>
                <p className="text-slate-500 whitespace-nowrap">
                  November 2024 — June 2025
                </p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1.5 text-slate-700 max-w-[68ch] mx-auto">
                <li>Built and shipped product web applications.</li>
                <li>Created responsive UIs from Figma designs.</li>
                <li>
                  Integrated third-party APIs and configured data exchange.
                </li>
                <li>Optimized loading speed and basic SEO metrics.</li>
              </ul>
              <p className="mt-2 text-slate-600 max-w-[68ch] mx-auto">
                Stack: React, TypeScript, Redux, HTML5, CSS3/SCSS, GitHub,
                Axios, REST API.
              </p>
            </div>

            {/* Epiic */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <div className="min-w-0">
                  <h3 className="font-semibold">QA Engineer</h3>
                  <span className="text-slate-500">Epiic (USA)</span>
                </div>
                <p className="text-slate-500 whitespace-nowrap">
                  January 2022 — April 2024
                </p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1.5 text-slate-700 max-w-[68ch] mx-auto">
                <li>API testing with Postman and Swagger (REST).</li>
                <li>Worked with Jira and TestRail; experience with GitLab.</li>
                <li>
                  Agile/Scrum; created and maintained test documentation (test
                  cases, checklists).
                </li>
                <li>
                  Manual, functional, regression, usability and UI/markup
                  testing.
                </li>
                <li>
                  Collaborated with developers to prevent and resolve defects.
                </li>
                <li>MySQL; understanding of basic SQL queries.</li>
              </ul>
            </div>

            {/* JTI */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <div className="min-w-0">
                  <h3 className="font-semibold">HoReCa Manager</h3>
                  <span className="text-slate-500">
                    Japan Tobacco International (JTI)
                  </span>
                </div>
                <p className="text-slate-500 whitespace-nowrap">
                  May 2017 — June 2021
                </p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1.5 text-slate-700 max-w-[68ch] mx-auto">
                <li>
                  Closed contracts with key clients and developed alternative
                  sales channels.
                </li>
                <li>
                  Held daily meetings with partners; ran trainings for partner
                  staff and managers.
                </li>
                <li>Organized HoReCa events and supervised promo teams.</li>
              </ul>
            </div>

            {/* Publicis Groupe */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <div className="min-w-0">
                  <h3 className="font-semibold">Project Manager</h3>
                  <span className="text-slate-500">Publicis Groupe</span>
                </div>
                <p className="text-slate-500 whitespace-nowrap">
                  October 2014 — March 2017
                </p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1.5 text-slate-700 max-w-[68ch] mx-auto">
                <li>
                  Project promotion and placement of outdoor/indoor
                  advertisements.
                </li>
                <li>
                  Market analysis; prepared commercial proposals and closed
                  contracts.
                </li>
                <li>Conducted presentations and negotiations with clients.</li>
              </ul>
            </div>

            {/* Coca-Cola Almaty Bottlers */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <div className="min-w-0">
                  <h3 className="font-semibold">Marketing Specialist</h3>
                  <span className="text-slate-500">
                    Coca-Cola Almaty Bottlers
                  </span>
                </div>
                <p className="text-slate-500 whitespace-nowrap">
                  March 2013 — August 2014
                </p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1.5 text-slate-700 max-w-[68ch] mx-auto">
                <li>Conducted marketing research and sales market analysis.</li>
                <li>
                  Performed competitive analysis by region and territory
                  monitoring.
                </li>
                <li>Monitored performance of sales representatives.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold ">Education</h2>
          <ul className="mt-3 space-y-2 text-slate-700 max-w-[68ch] mx-auto">
            <li>
              <strong>Cardiff Metropolitan University (UK)</strong> — Master of
              Business Administration (MBA)
            </li>
            <li>
              <strong>
                IMI International Management Institute Switzerland
              </strong>{' '}
              — BSc in International Hospitality &amp; Event Management
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold ">Skills</h2>
          <p className="mt-3 text-slate-700 max-w-[68ch] mx-auto text-justify leading-relaxed">
            React, TypeScript, Next.js, Redux Toolkit, Zustand, REST API, HTML5,
            CSS3/SCSS, Tailwind CSS, Git, Webpack, Vite, Axios, Figma, Node.js.
          </p>
        </section>

        {/* Languages */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold ">Languages</h2>
          <p className="mt-3 text-slate-700 max-w-[68ch] mx-auto text-justify leading-relaxed">
            Kazakh — Native; Russian — Fluent; English — C1; French — A1.
          </p>
        </section>

        {/* Footer / print hint */}
        <div className="mt-12 flex  gap-4 print:hidden">
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-slate-900 text-white font-semibold px-5 py-2 hover:bg-slate-800 transition-colors"
          >
            Contact me
          </Link>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2 font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Print
          </button>
        </div>

        {/* Updated timestamp */}
        <p className="mt-6 text-xs text-slate-400 text-center print:hidden">
          Resume updated 29 August 2025
        </p>
      </section>
    </main>
  );
}
