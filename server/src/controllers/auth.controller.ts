import { Request, Response, NextFunction } from "express";
import { loginServiceHandler } from "../services/auth.service";

export const loginCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = req.body;
    const { message, status, token } = await loginServiceHandler({
      username,
      password,
    });
    res.cookie("token", token, { httpOnly: true });
    res.status(status).json({ message, token });
  } catch (e) {
    next(e);
  }
};
