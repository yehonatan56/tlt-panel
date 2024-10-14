const usersRoute = require("./users.route");
// todo: postfixNames Route
const links = require("./links");
const auth = require("./auth");

const routes = (app) => {
  app.use("/users", usersRoute);
  app.use("/links", links);
  app.use("/auth", auth);
};

module.exports = routes;
