const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isAuthenticatedMW } = require("../config/passport");
const { error } = require("../services/auth/error");
const { ok } = require("../services/auth/ok");

router.post("/login", passport.authenticate("local"));

router.get("/ok", isAuthenticatedMW, ok);

router.get("/err", error);

module.exports = router;
