const userModel = require("../../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.SECRET);
  res.cookie("token", token, { httpOnly: true });
  res.json({ message: "Logged in", token });
};
