const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const routes = require("../routes/index");
const { public } = require("../paths");
require("./passport");

dotenv.config();

module.exports = (app) => {
  app.use(cookieParser());
  app.use(cors());
  app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session({ secret: process.env.SECRET }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(public));
  app.use(morgan("dev"));

  routes(app);
};
