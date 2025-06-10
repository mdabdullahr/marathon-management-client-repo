import React, { useContext } from "react";
import navLogo from "../assets/running.png";
import { Link, NavLink } from "react-router";
import DarkMoodToggoler from "./DarkMoodToggoler";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const links = (
    <>
      <li
        className="text-lg text-gray-800 dark:text-gray-300 font-medium lg:text-xl
 md:text-xl"
      >
        <NavLink to="/">Home</NavLink>
      </li>
      <li
        className="text-lg text-gray-800 dark:text-gray-300 font-medium lg:text-xl
 md:text-xl"
      >
        <NavLink to="/marathons">Marathons</NavLink>
      </li>
      {user && (
        <li
          className="text-lg text-gray-800 dark:text-gray-300 font-medium lg:text-xl
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
        toast.error("Logout failed...!");
      });
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent bg-opacity-50 backdrop-blur-md">
      <div className="navbar w-11/12 mx-auto py-3">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
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
            className="w-8 h-8 lg:w-16 lg:h-16 object-cover"
            src={navLogo}
            alt="Nav Logo"
          />
          <h3
            className="text-xl md:text-2xl specific-text lg:text-3xl font-bold dark:text-gray-300 text-gray-800
 hidden md:block"
          >
            Marathon<span className="text-orange-700">'</span>s 
          </h3>
        </div>

        <div className="navbar-end hidden lg:flex gap-4">
          <ul className="menu menu-horizontal px-1">{links}</ul>
          <DarkMoodToggoler></DarkMoodToggoler>
          {user && (
            <div className="relative group">
              <img
                className="w-8 md:w-12 h-8 md:h-12 rounded-full border border-gray-800 dark:border-gray-300"
                src={user.photoURL}
                alt="userImg"
              />
              <div className="absolute  left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {user.displayName}
              </div>
            </div>
          )}
          {user ? (
            <button
              onClick={handleLogOut}
              data-aos="zoom-in"
              className="text-gray-300 dark:text-gray-800 bg-gray-800 dark:bg-gray-300 specific-text text-sm md:text-xl px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button
                  data-aos="zoom-in"
                  className="text-gray-300 dark:text-gray-800 bg-gray-800 dark:bg-gray-300 specific-text text-sm md:text-xl px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  Login
                </button>{" "}
              </Link>
              <Link to="/register">
                <button
                  data-aos="zoom-in"
                  className="text-gray-300 dark:text-gray-800 bg-gray-800 dark:bg-gray-300 specific-text text-sm md:text-xl px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
        <div className="navbar-end lg:hidden">
          <DarkMoodToggoler></DarkMoodToggoler>
          {user && (
            <div className="relative group mr-3 lg:mr-0">
              <img
                className="w-8 md:w-12 h-8 md:h-12 rounded-full border border-green-600"
                src={user.photoURL}
                alt="userImg"
              />
              <div className="absolute  left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {user.displayName}
              </div>
            </div>
          )}
          {user ? (
            <button
              onClick={handleLogOut}
              data-aos="zoom-in"
              className="text-gray-300 dark:text-gray-800 bg-gray-800 dark:bg-gray-300 specific-text text-sm md:text-xl px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button
                  data-aos="zoom-in"
                  className="text-gray-300 dark:text-gray-800 bg-gray-800 dark:bg-gray-300 specific-text text-sm md:text-xl px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  Login
                </button>{" "}
              </Link>
              <Link to="/register">
                <button
                  data-aos="zoom-in"
                  className="text-gray-300 dark:text-gray-800 bg-gray-800 dark:bg-gray-300 specific-text text-sm md:text-xl px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer whitespace-nowrap"
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
