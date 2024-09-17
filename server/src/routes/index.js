const users = require("./users");
const routes = (app) => {
  app.use("/users", users);
};
module.exports = routes;
