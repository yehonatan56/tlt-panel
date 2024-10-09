const express = require("express");

const { register } = require("../services/users/register");
const { getAllUsers } = require("../services/users/getAllUsers");
const { isAuthorized } = require("../middlewars/auth");

const router = express.Router();
// i not know why the isAuthenticatedMW not working in client side
router.get("/", isAuthorized(), getAllUsers);

//i want only authenticated admin to be able to register new users
router.post("/", isAuthorized(true), register);

module.exports = router;
