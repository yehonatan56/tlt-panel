const mongoose = require("mongoose");

// todo: significant names - connectDB
const db = async () => {
  // todo: check url connection first
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
