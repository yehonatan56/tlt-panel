import { Request, Response, NextFunction } from "express";
import {
  getUsernamesServiceHandler,
  registerServiceHandler,
} from "../services/users.service";

const getUsernamesCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await getUsernamesServiceHandler();
    res.send(users);
  } catch (e) {
    next(e);
  }
};

const registerCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await registerServiceHandler();
    res.send(users);
  } catch (e) {
    next(e);
  }
};

export { getUsernamesCtrl, registerCtrl };
