import express from "express";
import configExpress from "./config/express";
import connectDB from "./config/db";

connectDB()
  .then(() => {
    const app = express();
    configExpress(app);

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
