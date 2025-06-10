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
import PrivateRoutes from "../Provider/PrivateRoutes.jsx";
import MarathonDetails from "../Pages/MarathonDetails/MarathonDetails.jsx";
import AddMarathon from "../Pages/AddMarathon/AddMarathon.jsx";
import MyMarathonList from "../Pages/MyMarathonList/MyMarathonList.jsx";
import MyApplyList from "../Pages/MyApplyList/MyApplyList.jsx";
import WelcomeDashboard from "../components/WelcomeDashboard.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: "/marathons",
            loader: ()=> fetch('http://localhost:3000/all-marathons'),
            element: <PrivateRoutes><Marathons></Marathons></PrivateRoutes>
        },
        {
            path: "/dashboard",
            element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
            children:[
                {
                    index: true,
                    Component: WelcomeDashboard
                },
                {
                    path: "addMarathon",
                    element: <PrivateRoutes><AddMarathon></AddMarathon></PrivateRoutes>
                },
                {
                    path: "myMarathonList",
                    element: <PrivateRoutes><MyMarathonList></MyMarathonList></PrivateRoutes>
                },
                {
                    path: "myApplyList",
                    element: <PrivateRoutes><MyApplyList></MyApplyList></PrivateRoutes>
                }
            ]
        },
        {
            path: "/marathon-details/:id",
            element: <PrivateRoutes><MarathonDetails></MarathonDetails></PrivateRoutes>
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
