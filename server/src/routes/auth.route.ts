import express, { Request, Response } from "express";
import { loginCtrl } from "../controllers/auth.controller";
const router = express.Router();

router.post("/login", loginCtrl);

router.post("/logout", (req: Request, res: Response) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

module.exports = router;
