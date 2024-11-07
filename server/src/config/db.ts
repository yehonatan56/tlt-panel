import mongoose from "mongoose";
import logger from "../utils/logger";

// todo: significant names - connectDB
const connectDB = async () => {
  // todo:check url connection first

  const url = process.env.CONNECTION_STRING;
  if (!url) {
    logger.error("", "No connection string provided");
    return;
  }
  await mongoose
    .connect(url)
    .then(() => {
      logger.info("", "Connected to the database");
    })
    .catch((err) => {
      logger.error("", "Failed to connect to the database", { error: err });
    });
};

export default connectDB;
