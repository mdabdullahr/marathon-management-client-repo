import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Marathons from "../Pages/Marathons/Marathons";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: ErrorPage,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: "/marathons",
            Component : Marathons
        },
        {
            path: "/login",
            Component: Login
        },
        {
            path: "/register",
            Component: Register
        }
    ]
  },
]);
