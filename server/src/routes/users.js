const express = require("express");

const { register } = require("../services/users/register");
// todo: remove all services from routes - use controllers
const { getAllUsers } = require("../services/users/getAllUsers");
const { isAdminUserMW, isAuthorizedUserMW } = require("../middlewars/auth");
const { getUsernamesCtrl } = require("../controllers/users.controller");

const router = express.Router();

// i not know why the isAuthenticatedMW not working in client side
router.get("/", isAuthorizedUserMW, getUsernamesCtrl);

//i want only authenticated admin to be able to register new uses
router.post("/", isAuthorizedUserMW, isAdminUserMW, register);

module.exports = router;
