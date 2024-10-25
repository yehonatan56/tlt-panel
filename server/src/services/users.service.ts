import userModel from "../models/users.model";

export const getUsernamesServiceHandler = async () => {
  const users = await userModel.find({}, "username");
  return users;
};

export const registerServiceHandler = async (body) => {
  const { username, password, role } = body;
  try {
    const user = new userModel({ username, password, role });
    await user.save();
    return user;
  } catch (err) {
    return { message: err.message, status: 400 };
  }
};
