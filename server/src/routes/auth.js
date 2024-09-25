const express = require("express");
const router = express.Router();
const passport = require("passport");
const userModel = require("../models/users");

let user = "";
router.post(
  "/login",
  (req, res, next) => {
    user = req.body.username;
    next();
  },
  passport.authenticate("local", {
    successRedirect: "/auth/ok/",
    failureRedirect: "/auth/err",
  }),
);

router.get("/ok", async (req, res) => {
  res.json({ user: await userModel.findOne({ username: user }) });
});
router.get("/err", (req, res) => res.status(400).send("kkjklk"));

module.exports = router;
