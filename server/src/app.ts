import express from "express";
import configExpress from "./config/express";
import db from "./config/db";

db().then(() => {
  const app = express();
  configExpress(app);

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
