const users = require("./users");
const links = require("./links");
const auth = require("./auth");
const routes = (app) => {
  app.use("/users", users);
  app.use("/links", links);
  app.use("/auth", auth);
};
module.exports = routes;
