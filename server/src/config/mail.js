const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  // host: "smtp.gmail.com",
  // port: 587,
  // secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    // type: "OAuth2",
    // client_id:
    //   "1032065480463-098cs8pvfunhacbq4iaqj14kstr40ta3.apps.googleusercontent.com",
    // client_secret: "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",
    // access_token: "",
  },
  //
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
    }
  });

  return { message: "Email sent" };
};
module.exports = sendMail;
