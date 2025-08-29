'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* ЛЕВО: копирайт */}
          <p className="text-white/60">
            © {year} Daniyar Kangozhayev. All rights reserved.
          </p>

          {/* ПРАВО: контакты (flex) */}
          <div className="flex items-center gap-6">
            {/* Email */}
            <a
              href="mailto:kangozhayev@gmail.com"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              aria-label="Email: kangozhayev@gmail.com"
              title="Email"
            >
              {/* Иконка конверта */}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2-.5h16c.28 0 .5.22.5.5v.22l-8.36 6.27a2 2 0 0 1-2.28 0L3.5 6.22V6c0-.28.22-.5.5-.5zm16 13H4a.5.5 0 0 1-.5-.5V7.78l7.55 5.66a3.5 3.5 0 0 0 3.9 0L20.5 7.78V18.5a.5.5 0 0 1-.5.5z" />
              </svg>
              <span>Email</span>
            </a>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/kangozhayev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              {/* Бренд-иконка LinkedIn */}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M20.45 3H3.55A1.55 1.55 0 0 0 2 4.55v14.9C2 20.95 3.05 22 4.55 22h15c1.5 0 2.45-1.05 2.45-2.55V4.55C22 3.05 20.95 2 19.45 2h1ZM8.34 18.5H5.9V9.75h2.44V18.5ZM7.12 8.53a1.42 1.42 0 1 1 0-2.84 1.42 1.42 0 0 1 0 2.84ZM18.1 18.5h-2.44v-4.45c0-1.06-.02-2.43-1.48-2.43-1.48 0-1.71 1.15-1.71 2.35v4.53h-2.44V9.75h2.34v1.2h.03c.33-.62 1.14-1.27 2.36-1.27 2.52 0 3.34 1.66 3.34 3.82v5Z" />
              </svg>
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
