import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email, subject, message } = await req.json();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  
  let mailOptions = {
    from: process.env.GMAIL_USER, // Mittente autenticato
    replyTo: email,               // Risposta inviata all'utente
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
    console.log("GMAIL_USER:", process.env.GMAIL_USER ? "✅ Presente" : "❌ Non trovata");
    console.log("GMAIL_PASSWORD:", process.env.GMAIL_PASSWORD ? "✅ Presente" : "❌ Non trovata");
    return new Response(JSON.stringify({ success: true, message: 'Email inviata con successo!' }), { status: 200 });
    
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error);
    console.log("GMAIL_USER:", process.env.GMAIL_USER ? "✅ Presente" : "❌ Non trovata");
    console.log("GMAIL_PASSWORD:", process.env.GMAIL_PASSWORD ? "✅ Presente" : "❌ Non trovata");
    return new Response(JSON.stringify({ error: 'Errore durante l\'invio dell\'email' }), { status: 500 });
  }
}
