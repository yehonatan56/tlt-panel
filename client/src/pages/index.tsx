import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home";
import Control from "../components/control";

const PagesIndex = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/control",
      element: <Control />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default PagesIndex;
