import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home";

const PagesIndex = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default PagesIndex;
