import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, subject, message } = body ?? {};

    // validação simples
    if (!name || !email || !subject || !message) {
      return Response.json(
        { ok: false, error: "Campos obrigatórios faltando." },
        { status: 400 },
      );
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return Response.json(
        { ok: false, error: "Configuração de e-mail ausente no servidor." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // ✅ senha de app
      },
    });

    const to = process.env.CONTACT_TO || process.env.GMAIL_USER;

    await transporter.sendMail({
      from: `"Site - Frigorífico MFB" <${process.env.GMAIL_USER}>`,
      to,
      replyTo: email,
      subject: `Contato (${subject}) - ${name}`,
      text: [
        `Nome: ${name}`,
        `Email: ${email}`,
        `Telefone: ${phone || "-"}`,
        `Empresa: ${company || "-"}`,
        `Assunto: ${subject}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json(
      { ok: false, error: "Erro ao enviar e-mail." },
      { status: 500 },
    );
  }
}
