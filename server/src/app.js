const express = require("express");
const app = express();
const configExpress = require("./config/express");
const sendMail = require("./config/mail");

configExpress(app);
console.table({ email: process.env.EMAIL, password: process.env.PASSWORD });
app.post("/send-email", (req, res) => {
  res.json(sendMail(req.body.text));
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
