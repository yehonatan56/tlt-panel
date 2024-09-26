const userModel = require("../../models/users");
module.exports.getAllUsers = async (req, res) => {
  const users = await userModel.find({}, "username");
  res.json(users);
};
