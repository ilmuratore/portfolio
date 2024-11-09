import nodemailer from 'nodemailer';

// Named export per il metodo POST
export async function POST(req) {
  const { email, subject, message } = await req.json(); // Usa req.json() per il parsing dei dati del corpo della richiesta
  
  // Configura il trasportatore SMTP per Gmail
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,  // La tua email Gmail
      pass: process.env.GMAIL_PASSWORD,  // La tua password o password per le app
    },
  });

  // Imposta i dettagli dell'email
  let mailOptions = {
    from: email, // Usa l'email dell'utente come mittente
    to: process.env.GMAIL_USER, // Il destinatario è sempre il tuo indirizzo
    subject: subject, // Oggetto dell'email
    text: `
      Hai ricevuto un messaggio da ${email}:

      Messaggio: 
      ${message}

      Puoi rispondere a questo indirizzo email: ${email}
    `, // Corpo dell'email con l'email del mittente inclusa
  };

  try {
    // Invia l'email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true, message: 'Email inviata con successo!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Errore durante l\'invio dell\'email' }), { status: 500 });
  }
}
