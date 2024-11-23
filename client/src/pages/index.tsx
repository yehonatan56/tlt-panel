import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home";
import Control from "../components/control";
import ViewAll from "./viewAll.tsx";
import Header from "../components/header";
import Register from "../components/auth/register.tsx";
import Auth from "../components/auth/auth.tsx";
import Customers from "./customers.tsx";

const PagesIndex = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Header>
          <Home />
        </Header>
      ),
    },
    {
      path: "/register",
      element: (
        <Header>
          <Auth>
            <Register />
          </Auth>
        </Header>
      ),
    },
    {
      path: "/control",
      element: (
        <Header>
          <Auth>
            <Control />
          </Auth>
        </Header>
      ),
    },
    {
      path: "/viewAll",
      element: (
        <Header>
          <Auth>
            <ViewAll />
          </Auth>
        </Header>
      ),
    },
    {
      path: "/customers",
      element: (
        <Header>
          <Auth>
            <Customers />
          </Auth>
        </Header>
      ),
    },
    {
      path: "/not-allowed",
      element: (
        <Header>
          <h1>Not allowed</h1>
        </Header>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
export default PagesIndex;
