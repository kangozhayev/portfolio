// app/api/contact/route.ts
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Payload = {
  name: string;
  email: string;
  message: string;
  botcheck?: string;
};

function bad(status: number = 400, msg = 'Bad request') {
  return Response.json({ ok: false, error: msg }, { status });
}
function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
function errMsg(e: unknown, fallback = 'Internal error') {
  if (e instanceof Error) return e.message;
  if (typeof e === 'string') return e;
  return fallback;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    // Honeypot
    if (body.botcheck) return Response.json({ ok: true });

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();

    if (name.length < 2) return bad(400, 'Name is too short');
    if (!isValidEmail(email)) return bad(400, 'Invalid email');
    if (message.length < 10) return bad(400, 'Message is too short');

    // ENV
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = String(process.env.SMTP_FROM || user || '');
    const to = String(process.env.SMTP_TO || user || '');

    if (!host || !user || !pass) return bad(500, 'SMTP is not configured');
    if (!from) return bad(500, 'SMTP_FROM is not set');
    if (!to) return bad(500, 'SMTP_TO is not set');

    const secure = port === 465;
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    try {
      await transporter.verify();
    } catch (e: unknown) {
      const m = errMsg(e);
      if (m.includes('EAUTH'))
        return bad(500, 'SMTP auth failed (check SMTP_USER/SMTP_PASS)');
      return bad(500, m || 'SMTP verify failed');
    }

    const subject = `New message from ${name} — Portfolio Contact Form`;
    const text = `From: ${name} <${email}>\n\n${message}`;
    const html = `
      <div style="font:14px/1.6 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial;">
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    try {
      await transporter.sendMail({
        from,
        to,
        subject,
        text,
        html,
        replyTo: email,
      });
    } catch (e: unknown) {
      const m = errMsg(e);
      if (m.includes('550')) {
        return bad(
          500,
          'SMTP rejected sender (FROM must match authenticated user / domain not verified)'
        );
      }
      return bad(500, m || 'Failed to send e-mail');
    }

    return Response.json({ ok: true });
  } catch (e: unknown) {
    console.error('contact error:', e);
    return bad(500, errMsg(e));
  }
}
