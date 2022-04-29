import nodemailer from "nodemailer";
import { google } from "googleapis";

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;
  console.log(req.body);

  console.log(email);

  const oAuath2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
  );

  oAuath2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  try {
    const oAccessToken = await oAuath2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.MAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: oAccessToken,
      },
    });

    const mailerOptions = {
      from: `${name} <${req.body.email}>`,
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
  } catch (error) {
    console.log(error);
  }
}
