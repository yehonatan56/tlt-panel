const express = require("express");
const router = express.Router();
const userModel = require("../models/users");
const tty = require("node:tty");
router.get("/", (req, res) => {
  res.send("Hello from users route");
});
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new userModel({ username, password });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
