const userModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.loginServiceHandler = async ({ username, password }) => {
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
