import { createBrowserRouter } from "react-router";
import WelcomeDashboard from "../components/WelcomeDashboard.jsx";
import RootLayouts from "../Layouts/RootLayouts";
import AddMarathon from "../Pages/AddMarathon/AddMarathon.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MarathonDetails from "../Pages/MarathonDetails/MarathonDetails.jsx";
import Marathons from "../Pages/Marathons/Marathons";
import MyApplyList from "../Pages/MyApplyList/MyApplyList.jsx";
import MyMarathonList from "../Pages/MyMarathonList/MyMarathonList.jsx";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy.jsx";
import Register from "../Pages/Register/Register";
import Registration from "../Pages/Registration/Registration.jsx";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition.jsx";
import PrivateRoutes from "../Provider/PrivateRoutes.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/marathons",
        element: (
          <PrivateRoutes>
            <Marathons></Marathons>
          </PrivateRoutes>
        ),
      },
      {
        path: "/marathon/:id",
        element: (
          <PrivateRoutes>
            <MarathonDetails></MarathonDetails>
          </PrivateRoutes>
        )
      },
      {
        path: "/registration/:id",
        element: (
          <PrivateRoutes>
            <Registration></Registration>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
        children: [
          {
            index: true,
            Component: WelcomeDashboard,
          },
          {
            path: "addMarathon",
            element: (
              <PrivateRoutes>
                <AddMarathon></AddMarathon>
              </PrivateRoutes>
            ),
          },
          {
            path: "myMarathonList",
            element: (
              <PrivateRoutes>
                <MyMarathonList></MyMarathonList>
              </PrivateRoutes>
            ),
          },
          {
            path: "myApplyList",
            element: (
              <PrivateRoutes>
                <MyApplyList></MyApplyList>
              </PrivateRoutes>
            ),
          },
        ],
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/terms-and-conditions",
        Component: TermsAndCondition,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
    ],
  },
]);
