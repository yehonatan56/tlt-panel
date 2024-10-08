const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  // port: 465,
  // secure: true\=
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD, // Use the generated App Password here
  },
  // tls: {
  //   ciphers: "SSLv3",
  // },
});

const sendMail = async (text) => {
  const mailOptions = {
    from: {
      name: "יהונתן כהן",
      address: process.env.EMAIL,
    },
    to: process.env.EMAIL_EYAL,
    subject: "מעקב האוצרות האבודים",
    text,
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return { message: "Email not sent", error };
    }

    console.log("Email sent: " + info.response);
    return { message: "Email sent" };
  });
};

module.exports = sendMail;
