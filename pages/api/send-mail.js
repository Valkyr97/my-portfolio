import nodemailer from "nodemailer";

export default async function handler(req, res) {
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
      host: "smtp.gmail.com",
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        type: "login",
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: `Janyel Marrero <${process.env.USER}>`,
        to: process.env.MAIL,
        subject: "Work Contact",
        html: contentHTML,
      });
      console.log("Message sent", info.messageId);
      res.status(200).json({
        alert:
          "Your message was sent succesfuly. I will put in contact with you as soon as I can",
        success: "success",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        alert:
          "I'm sad to say that something went wrong sending the message. If it is not to bad could you contact me through my social networks?",
        success: "danger",
      });
    }
  }
}
