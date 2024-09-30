import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home";
import Control from "../components/control";
import ViewAll from "./viewAll.tsx";
import Header from "../components/header";

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
      path: "/control",
      element: (
        <Header>
          <Control />
        </Header>
      ),
    },
    {
      path: "viewAll",
      element: (
        <Header>
          <ViewAll />
        </Header>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
export default PagesIndex;
