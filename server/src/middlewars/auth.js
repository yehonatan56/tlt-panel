const jwt = require("jsonwebtoken");
const userModel = require("../models/users");
module.exports.isAuthorized = (isRequiredAdmin = false) => {
  return async (req, res, next) => {
    const token = req.headers.authorization || req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const decoded = jwt.verify(
        token.startsWith("Bearer") ? token.replace("Bearer ", "") : token,
        process.env.SECRET,
      );
      req.userId = decoded.id;
      const user = await userModel.findById(req.userId);
      if (isRequiredAdmin && user.role !== "admin") {
        return res.status(401).json({ message: "Unauthorized" });
      }
      next();
    } catch (err) {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
};
