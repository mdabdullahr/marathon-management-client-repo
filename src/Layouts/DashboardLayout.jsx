import React from "react";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { FiList, FiClipboard, FiUser, FiLogOut } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";
import logo from "../assets/running.png";
import { Link, NavLink, Outlet } from "react-router";
import DashboardNavbar from "../Pages/Dashboard/DashboardNavbar/DashboardNavbar";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import DarkMoodToggoler from "../components/DarkMoodToggoler";

const DashboardLayout = () => {
    const {logoutUser} = useAuth();
  const handleLogOut = () => {
      logoutUser()
        .then(() => {
          Swal.fire({
            title: "Successfully Logged Out...!",
            icon: "success",
            draggable: true,
          });
        })
        .catch((error) => {
          toast.error("Logout failed...!", error.message);
        });
    };
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="hidden lg:flex sticky top-0 z-50">
        <DashboardNavbar></DashboardNavbar>
      </div>
      <div className="w-full mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          {/* Drawer Content */}
          <div className="drawer-content flex flex-col">
            {/* Mobile Navbar */}
            <div className="navbar bg-gradient-to-r from-purple-600 to-indigo-600 w-full lg:hidden">
              <div className="flex-none">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2 flex-1 px-2 text-white text-lg font-semibold">
                Dashboard 
              </div>
              <DarkMoodToggoler></DarkMoodToggoler>
            </div>
            <div className="px-5 2xl:px-10 my-10 overflow-auto">
              <Outlet />
            </div>
          </div>

          {/* Drawer Sidebar */}
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="bg-white dark:bg-gray-800 text-base-content w-[70vw] sm:w-72 md:w-80 xl:w-96 p-6 flex flex-col justify-between min-h-screen">
              {/* Top: Logo + Links */}
              <div className="space-y-6">
                <Link to="/">
                  <div className="flex items-center px-6 border-b-2 border-gray-300 pb-4 mt-4">
                    <img className="w-10 h-10 mr-2" src={logo} alt="Logo" />
                    <p className="-mb-2 font-bold text-2xl lg:text-3xl text-black dark:text-white specific-text">
                      Marathon
                    </p>
                  </div>
                </Link>

                {/* Nav Links */}
                <ul className="space-y-4 mt-5">
                  <li>
                    <Link
                      to="/dashboard"
                      className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500 text-[15px] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      <AiOutlineHome className="mr-2 text-lg" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/addMarathon"
                      className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500 text-[15px] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      <AiOutlinePlusCircle className="mr-2 text-lg" />
                      Add Marathon
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/myMarathonList"
                      className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500 text-[15px] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      <FiList className="mr-2 text-lg" />
                      My Marathon List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/myApplyList"
                      className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500 text-[15px] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      <FiClipboard className="mr-2 text-lg" />
                      My Apply List
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Bottom: Logout */}
              <div className="mt-6 p-8 pb-14 border-t-2 border-gray-300">
                <li>
                  <NavLink
                    to="/dashboard/myProfile"
                    className="text-white text-[15px] font-medium px-4 py-3 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600"
                  >
                    <FiUser className="mr-2 text-lg" />
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/updateProfile"
                    className="text-white text-[15px] font-medium px-4 py-3 flex items-center rounded-md mb-5 bg-gradient-to-r from-purple-600 to-indigo-600"
                  >
                    <GrUpdate className="mr-2 text-lg" />
                    Update Profile
                  </NavLink>
                </li>

                <button
                onClick={handleLogOut}
                  className="border border-purple-600 text-purple-600 
             hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600
             hover:text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2
             transition cursor-pointer w-full"
                >
                  <FiLogOut className="text-lg" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
