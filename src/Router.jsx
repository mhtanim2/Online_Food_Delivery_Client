import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import { getLocation } from "./helper/SessionHelper";
import Home from "./pages/Home";
import Main from "./pages/Main";
import SingleMenuItemPage from "./pages/SingleMenuItemPage";
const location = getLocation();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: location !== null ? <Main /> : <Home />,
      },
      {
        path: "/home/:menuItemId",
        element: <SingleMenuItemPage />,
      },
    ],
  },
]);

export default router;
