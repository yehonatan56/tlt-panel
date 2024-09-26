const express = require("express");

const { register } = require("../services/users/register");
const { isAuthenticatedMW } = require("../config/passport");
const { getAllUsers } = require("../services/users/getAllUsers");

const router = express.Router();

router.get("/", isAuthenticatedMW, getAllUsers);

//i want only authenticated admin to be able to register new users
router.post("/", isAuthenticatedMW, register);

module.exports = router;
