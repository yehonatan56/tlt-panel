const usersRoute = require("./users.route");
// todo: postfixNames Route
const links = require("./links.route");
const auth = require("./auth.route");

const routes = (app) => {
  app.use("/users", usersRoute);
  app.use("/links", links);
  app.use("/auth", auth);
};

module.exports = routes;
