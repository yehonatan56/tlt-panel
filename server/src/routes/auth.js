const express = require("express");
const { login } = require("../services/auth/login");
const router = express.Router();

router.post("/login", login);

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

module.exports = router;
``;
