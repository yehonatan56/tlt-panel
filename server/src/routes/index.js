const users = require("./users");
const links = require("./links");
const routes = (app) => {
  app.use("/users", users);
  app.use("/links", links);
};
module.exports = routes;
