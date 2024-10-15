const jwt = require("jsonwebtoken");
const userModel = require("../models/users.model");



module.exports.isAuthorizedUserMW = async (req, res, next) => {
  const token = req.headers.authorization || req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const jwtString = token.startsWith("Bearer")
    ? token.replace("Bearer ", "")
    : token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(jwtString, process.env.SECRET);
    req.userId = decoded?.id;
    req.user = await userModel.findById(req.userId);

    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.isAdminUserMW = (req, res, next) => {
  if (req.user.role !== "admin") {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  next();
};
