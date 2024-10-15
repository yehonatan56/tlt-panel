const { getUsernamesServiceHandler , registerServiceHandler} = require("../services/users.service");

module.exports.getUsernamesCtrl = async (req, res, next) => {
  try {
    const users = await getUsernamesServiceHandler();
    res.send(users);
  } catch (e) {
    next(e);
  }
};

module.exports.registerCtrl = async (req, res, next) => {
    try {
        const users = await registerServiceHandler();
        res.send(users);
    } catch (e) {
        next(e);
    }
}