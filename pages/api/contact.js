import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;
  console.log(req.body);

  console.log(email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  const mailerOptions = {
    from: `${name} ----- <${req.body.email}>`,
    to: process.env.MAIL_USER,
    subject: subject,
    text: ` ${message} - ${email}`,
  };

  transporter.sendMail(mailerOptions, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
    console.log(info);
    return res.status(200).json({
      message: "Your message has been sent successfully",
    });
  });
}
