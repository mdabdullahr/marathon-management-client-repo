import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: ErrorPage,
    children:[
        {
            index: true,
            Component: Home
        }
    ]
  },
]);
