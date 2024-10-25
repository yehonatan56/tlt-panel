import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import routes from "../routes/index";
import { PUBLIC_PATH, ENV_PATH } from "../paths";
dotenv.config({ path: ENV_PATH });

export default (app: Application) => {
  app.use(cookieParser());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(PUBLIC_PATH));
  app.use(morgan("dev"));

  routes(app);
};
