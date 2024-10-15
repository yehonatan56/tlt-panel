const express = require("express");
const { isAdminUserMW, isAuthorizedUserMW } = require("../middlewars/auth");
const { getUsernamesCtrl , registerCtrl } = require("../controllers/users.controller");

const router = express.Router();

// i not know why the isAuthenticatedMW not working in client side
router.get("/", isAuthorizedUserMW, getUsernamesCtrl);

//i want only authenticated admin to be able to register new uses
router.post("/", isAuthorizedUserMW, isAdminUserMW, registerCtrl);

module.exports = router;
