'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contacts() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>(
    'idle'
  );
  const [errMsg, setErrMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      message: String(fd.get('message') || ''),
      botcheck: String(fd.get('website') || ''), // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data?.error || 'Failed to send');
      setStatus('ok');
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus('err');
      setErrMsg(err.message || 'Something went wrong');
    }
  }

  return (
    <section
      id="contact"
      className="
        relative w-full bg-black text-white
        pt-[var(--nav-offset,0px)]
        min-h-[calc(100dvh-var(--nav-offset,0px))]
      "
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* LEFT: Title + contacts */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Contact me
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Want to discuss a project or have a quick question? Drop me a line
              — I usually reply within a day.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {/* Email */}
              <a
                href="mailto:mail@mail.com" /* ← поставь свой e-mail */
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2-.5h16c.28 0 .5.22.5.5v.22l-8.36 6.27a2 2 0 0 1-2.28 0L3.5 6.22V6c0-.28.22-.5.5-.5zM20 19H4a1 1 0 0 1-1-1V7.78l7.55 5.66a3.5 3.5 0 0 0 3.9 0L21 7.78V18a1 1 0 0 1-1 1z" />
                </svg>
                <span>kangozhayev@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/kangozhayev/" /* ← твой профиль */
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden
                  fill="currentColor"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM3.5 9h3V21h-3V9zm7 0h2.878v1.64h.041c.401-.76 1.381-1.561 2.843-1.561C19.54 9.079 21 10.56 21 13.338V21h-3v-6.587c0-1.57-.562-2.64-1.968-2.64-1.073 0-1.712.723-1.993 1.422-.103.251-.129.6-.129.95V21h-3V9z" />
                </svg>
                <span>LinkedIn</span>
              </Link>

              {/* Phone */}
              <a
                href="tel:+77777710011" /* ← твой номер */
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.4 22 2 13.6 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.2 2.47.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
                <span>+77777710011</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-2xl font-semibold">Send me a message</h3>
            <form
              onSubmit={onSubmit}
              className="mt-6 space-y-4"
            >
              {/* honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-white/70"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-white/40"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-white/70"
                >
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-white/40"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-white/70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={5}
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-white/40"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="
                  group relative inline-flex items-center justify-center rounded-full
                  bg-white text-slate-900 text-sm font-semibold
                  px-6 py-3
                  ring-1 ring-white/40
                  shadow-[0_6px_18px_rgba(255,255,255,0.15)]
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(255,255,255,0.22)]
                  active:translate-y-0 active:scale-[0.98]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                  overflow-hidden cursor-pointer
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === 'loading' ? 'Sending...' : 'Send'}

                  {/* мягкое свечение на hover */}
                  <span
                    className="
                   pointer-events-none absolute inset-0 rounded-full
                   bg-[radial-gradient(120%_180%_at_50%_-40%,rgba(0,0,0,0.08),transparent)]
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* sheen-блик, который проезжает по кнопке на hover */}
                  <span className="pointer-events-none absolute -inset-px overflow-hidden rounded-full">
                    <span
                      className="
                  absolute top-0 left-[-150%] h-full w-[140%] skew-x-[-20deg]
                  bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.75),transparent)]
                  transition-transform duration-700
                  group-hover:translate-x-[180%]"
                    />
                  </span>
                </button>

                {status === 'ok' && (
                  <span className="text-emerald-400 text-sm">
                    Message sent — thank you!
                  </span>
                )}
                {status === 'err' && (
                  <span className="text-red-400 text-sm">Error: {errMsg}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
