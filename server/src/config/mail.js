const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD, // Use the generated App Password here
  },
  tls: {
    ciphers: "SSLv3",
  },
});

const sendMail = (text) => {
  const mailOptions = {
    from: {
      name: "Yehonatan Cohen",
      address: process.env.EMAIL,
    },
    to: process.env.EMAIL_EYAL,
    subject: "Sending Email using Node.js",
    text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return { message: "Email not sent", error };
    } else {
      console.log("Email sent: " + info.response);
      return { message: "Email sent" };
    }
  });
};

module.exports = sendMail;
