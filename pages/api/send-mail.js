import nodemailer from "nodemailer";

export default async function handler(req, res) {
  res.status(200);

  if (req.method === "POST") {
    const { name, mail, phone, message } = req.body;
    const contentHTML = `
    <h1>User information</h1>
    <ul>
      <li>Username: ${name}</li>
      <li>Correo: ${mail}</li>
      <li>Telefono: ${phone}</li>
    </ul>
    <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp.nauta.cu",
      port: "25",
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  
    const info = await transporter.sendMail({
      from: `My server <${process.env.SENDER}>`,
      to: process.env.MAIL,
      subject: "Work Contact",
      html: contentHTML,
    });
  
    console.log("Message sent", info.messageId);

    res.status(200).send('recived')
  }
}
