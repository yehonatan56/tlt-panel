const express = require("express");
const configExpress = require("./config/express");
const db = require("./config/db");

db().then(() => {
  const app = express();
  configExpress(app);

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
