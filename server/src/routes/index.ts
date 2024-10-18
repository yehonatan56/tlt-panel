import usersRoute from "./users.route";
import linksRoute from "./links.route";
import authRoute from "./auth.route";

const routes = (app) => {
  app.use("/users", usersRoute);
  app.use("/links", linksRoute);
  app.use("/auth", authRoute);
};

export default routes;
