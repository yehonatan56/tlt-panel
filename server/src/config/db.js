const mongoose = require("mongoose");

const db = async () => {
  await mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = db;
