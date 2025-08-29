// app/api/contact/route.ts
import nodemailer from 'nodemailer';

export const runtime = 'nodejs'; // нужен Node runtime, не Edge

type Payload = {
  name: string;
  email: string;
  message: string;
  botcheck?: string;
};

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    // honeypot
    if (body.botcheck) {
      return Response.json({ ok: true });
    }

    // валидация
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();

    if (name.length < 2) {
      return Response.json(
        { ok: false, error: 'Name is too short' },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return Response.json(
        { ok: false, error: 'Invalid email' },
        { status: 400 }
      );
    }
    if (message.length < 10) {
      return Response.json(
        { ok: false, error: 'Message is too short' },
        { status: 400 }
      );
    }

    // SMTP из переменных окружения
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;
    const to = process.env.SMTP_TO || user;

    if (!host || !user || !pass) {
      return Response.json(
        { ok: false, error: 'SMTP is not configured' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true для 465, иначе false
      auth: { user, pass },
    });

    const subject = `New message from ${name} — Portfolio Contact Form`;
    const text = `From: ${name} <${email}>\n\n${message}`;
    const html = `
      <div style="font: 14px/1.6 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial;">
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    await transporter.sendMail({
      from, // должен быть авторизованный адрес
      to, // куда получать письма
      subject,
      text,
      html,
      replyTo: email, // чтобы отвечать прямо отправителю
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    console.error('contact error:', err);
    return Response.json(
      { ok: false, error: 'Failed to send e-mail' },
      { status: 500 }
    );
  }
}
