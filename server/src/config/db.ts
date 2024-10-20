import mongoose from "mongoose";

// todo: significant names - connectDB
const connectDB = async () => {
  // todo: check url connection first
  if (!process.env.CONNECTION_STRING) {
    console.log("No connection string provided");
    return;
  }
  await mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
