import nodemailer from 'nodemailer';

const rateLimitMap = new Map();

export async function POST(req) {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; 
  const maxRequests = 3;

  const record = rateLimitMap.get(ip) || { count: 0, start: now };
  
  if (now - record.start > windowMs) {
    rateLimitMap.set(ip, { count: 1, start: now });
  } else if (record.count >= maxRequests) {
    return new Response(
      JSON.stringify({ error: 'Troppi tentativi. Riprova tra un minuto.' }), 
      { status: 429 }
    );
  } else {
    rateLimitMap.set(ip, { count: record.count + 1, start: record.start });
  }

  if (rateLimitMap.size > 1000) {
    const fiveMinutesAgo = now - (5 * 60 * 1000);
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.start < fiveMinutesAgo) {
        rateLimitMap.delete(key);
      }
    }
  }
  const { email, subject, message } = await req.json();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.GMAIL_USER,
    replyTo: email,
    to: process.env.GMAIL_USER,
    subject: subject,
    text: `
      Hai ricevuto un messaggio da ${email}:

      Messaggio: 
      ${message}

      Puoi rispondere a questo indirizzo email: ${email}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true, message: 'Email inviata con successo!' }), { status: 200 });
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error);
    return new Response(JSON.stringify({ error: 'Errore durante l\'invio dell\'email' }), { status: 500 });
  }
}