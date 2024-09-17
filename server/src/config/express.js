const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const routes = require("../routes/index");
const db = require("./db");
dotenv.config();
const { public } = require("../paths");
module.exports = async (app) => {
  app.use(cors());
  await db();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(public));
  app.use(morgan("dev"));
  routes(app);
};
