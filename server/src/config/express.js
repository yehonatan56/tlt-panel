const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const routes = require("../routes/index");
const { PUBLIC_PATH } = require("../paths");

dotenv.config();

module.exports = (app) => {
  app.use(cookieParser());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(PUBLIC_PATH));
  app.use(morgan("dev"));

  routes(app);
};
