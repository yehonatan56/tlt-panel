const userModel = require("../models/users.model");

module.exports.getUsernamesServiceHandler = async () => {
  const users = await userModel.find({}, "username");
  return users;
};

module.exports.registerServiceHandler = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = new userModel({ username, password, role });
    await user.save();
    return user;
  } catch (err) {
    res.status(400).json(err);
  }
};