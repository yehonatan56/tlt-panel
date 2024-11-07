import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "../routes/index";
import { PUBLIC_PATH } from "../paths";
import logger from "../utils/logger";

export default (app: Application) => {
  app.use(cookieParser());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(PUBLIC_PATH));

  app.use("*", (req: Request, res: Response, next: NextFunction) => {
    logger.info("", `${req.method} ${req.originalUrl}`);
    next();
  });

  routes(app);
};
