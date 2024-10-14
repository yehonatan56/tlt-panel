const userModel = require("../../models/users.model");

module.exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = new userModel({ username, password, role });
    await user.save();

    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
