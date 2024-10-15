const { loginServiceHandler } = require("../services/auth.service");
module.exports.loginCtrl = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const { message, status, token } = await loginServiceHandler({
      username,
      password,
    });
    res.cookie("token", token, { httpOnly: true });
    res.status(status).json({ message, token });
  } catch (e) {
    next(e);
  }
};
