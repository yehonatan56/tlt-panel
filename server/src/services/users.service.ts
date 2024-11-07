import userModel from "../models/users.model";
import { IUser } from "../interfaces/user.interface";

export const getUsernamesServiceHandler = async () => {
  const users = await userModel.find({}, "username");
  return users as IUser[];
};

export const registerServiceHandler = async (body) => {
  const { username, password, role } = body;
  try {
    const user = new userModel({ username, password, role });
    await user.save();
    return user as IUser;
  } catch (err) {
    return { message: err.message, status: 400 };
  }
};
