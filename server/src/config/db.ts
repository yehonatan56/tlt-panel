import mongoose from "mongoose";

// todo: significant names - connectDB
const connectDB = async () => {
  // todo:check url connection first

  const url = process.env.CONNECTION_STRING;
  console.log(url);
  if (!url) {
    console.log("No connection string provided");
    return;
  }
  debugger;
  await mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
