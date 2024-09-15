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
    to: process.env.EMAIL, // "eyalcohen51@gmail.com",
    subject: "Sending Email using Node.js",
    text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
module.exports = sendMail;
