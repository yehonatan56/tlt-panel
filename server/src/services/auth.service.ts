import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/users.model";

export const loginServiceHandler = async ({ username, password }) => {
  const user = await userModel.findOne({ username });

  if (!user) {
    return { message: "User not found", status: 404 };
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return { message: "Invalid credentials", status: 401 };
  }
  const token = jwt.sign({ id: user._id }, process.env.SECRET);
  return { message: "Logged in", token, status: 200 };
};
