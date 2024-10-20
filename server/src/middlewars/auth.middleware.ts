import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/users.model";

export const isAuthorizedUserMW = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  const token = req.headers.authorization || req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const jwtString = token.startsWith("Bearer")
    ? token.replace("Bearer ", "")
    : token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(jwtString, process.env.SECRET);
    // @ts-ignore
    req.userId = decoded?.id;
    req.user = await userModel.findById(req.userId);

    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export const isAdminUserMW = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.user.role !== "admin") {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  next();
};