import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Marathons from "../Pages/Marathons/Marathons";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition.jsx"
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";

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
            path: "/dashboard",
            Component : Dashboard
        },
        {
            path: "/login",
            Component: Login
        },
        {
            path: "/register",
            Component: Register
        },
        {
            path: "/terms-and-conditions",
            Component: TermsAndCondition
        }, 
        {
            path: "/privacy-policy",
            Component: PrivacyPolicy
        }

    ]
  },
]);
