const express = require("express");

const { register } = require("../services/users/register");
const { isAuthenticatedMW } = require("../config/passport");
const { getAllUsers } = require("../services/users/getAllUsers");

const router = express.Router();
// i not know why the isAuthenticatedMW not working in client side
router.get("/", getAllUsers);

//i want only authenticated admin to be able to register new users
router.post("/", register);

module.exports = router;
