const express = require("express");
const { loginCtrl } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/login", loginCtrl);

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

module.exports = router;
