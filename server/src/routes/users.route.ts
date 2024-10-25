import express from "express";
import {
  isAdminUserMW,
  isAuthorizedUserMW,
} from "../middlewars/auth.middleware";
import {
  getUsernamesCtrl,
  registerCtrl,
} from "../controllers/users.controller";

const router = express.Router();

// i not know why the isAuthenticatedMW not working in client side
router.get("/", isAuthorizedUserMW, getUsernamesCtrl);

//i want only authenticated admin to be able to register new uses
router.post("/", isAuthorizedUserMW, isAdminUserMW, registerCtrl);

export default router;
