import dotenv from "dotenv";
import connectDB from "../config/db";
import { ENV_PATH } from "../paths";

jest.setTimeout(30000);
dotenv.config({ path: ENV_PATH });

beforeAll(async () => {
  await connectDB();
});
