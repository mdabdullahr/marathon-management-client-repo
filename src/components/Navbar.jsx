import React from "react";
import navLogo from "../assets/running.png";
import { Link, NavLink } from "react-router";
import DarkMoodToggoler from "./DarkMoodToggoler";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const links = (
    <>
      <li
        className="text-lg text-gray-200 font-medium lg:text-xl
 md:text-xl"
      >
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li
          className="text-lg text-gray-200 font-medium lg:text-xl
 md:text-xl"
        >
          <NavLink to="/marathons">Marathons</NavLink>
        </li>
      )}
      <li
        className="text-lg text-gray-200 font-medium lg:text-xl
 md:text-xl"
      >
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
      </li>
      <li
        className="text-lg text-gray-200 font-medium lg:text-xl
 md:text-xl"
      >
        <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
      </li>
      {user && (
        <li
          className="text-lg text-gray-200 font-medium lg:text-xl
 md:text-xl"
        >
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
    </>
  );

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
    <div className="fixed top-0 left-0 w-full z-50 bg-teal-600">
      <div className="navbar max-w-[1320px] mx-auto px-4 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img
            className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-cover sm:ml-2 lg:ml-0"
            src={navLogo}
            alt="Nav Logo"
          />
          <h3 className="text-xl md:text-2xl specific-text lg:text-3xl font-bold text-white hidden md:block">
            Marathon's
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-5">
          <DarkMoodToggoler />
          {user && (
            <div className="relative group">
              <img
                className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-full border border-gray-800 dark:border-gray-300"
                src={user.photoURL}
                alt="userImg"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {user.displayName}
              </div>
            </div>
          )}
          {user ? (
            <button
              onClick={handleLogOut}
              data-aos="zoom-in"
              className="specific-text text-white border border-white font-medium text-sm md:text-lg lg:text-xl px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button
                  data-aos="zoom-in"
                  className="specific-text text-white border border-white font-medium text-sm md:text-lg lg:text-xl px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer"
                >
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  data-aos="zoom-in"
                  className="specific-text text-white border border-white font-medium text-sm md:text-lg lg:text-xl px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer"
                >
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
