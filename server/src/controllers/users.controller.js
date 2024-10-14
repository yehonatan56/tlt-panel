const { getUsernamesServiceHandler } = require("../services/users.service");

module.exports.getUsernamesCtrl = async (req, res, next) => {
  try {
    const users = await getUsernamesServiceHandler();
    res.send(users);
  } catch (e) {
    next(e);
  }
};
