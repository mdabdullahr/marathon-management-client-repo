import React, { useContext } from "react";
import navLogo from "../assets/marathons-logo.png";
import { Link, NavLink } from "react-router";
import DarkMoodToggoler from "./DarkMoodToggoler";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const links = (
    <>
      <li
        className="text-lg text-green-500 hover:text-green-600
 md:text-xl"
      >
        <NavLink to="/">Home</NavLink>
      </li>
      <li
        className="text-lg text-green-500 hover:text-green-600
 md:text-xl"
      >
        <NavLink to="/marathons">Marathons</NavLink>
      </li>
      {user && (
        <li
          className="text-lg text-green-500 hover:text-green-600
 md:text-xl"
        >
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
    </>
  );
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
            className="w-6 h-6 lg:w-12 lg:h-12 object-cover"
            src={navLogo}
            alt="Nav Logo"
          />
          <h3
            className="text-xl lg:text-2xl font-semibold dark:text-white text-green-500
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
                className="w-6 md:w-12 h-6 md:h-12 rounded-full border border-green-600"
                src={user.photoURL}
                alt="userImg"
              />
              <div className="absolute  left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {user.displayName}
              </div>
            </div>
          )}
          {user ? (
            <button className="btn btn-success">Logout</button>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-outline btn-success">Login</button>{" "}
              </Link>
              <Link to="/register">
                <button className="btn btn-outline btn-success">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
        <div className="navbar-end lg:hidden">
          <DarkMoodToggoler></DarkMoodToggoler>
          <Link to="/login">
            <button className="btn btn-outline btn-success mr-2">Login</button>{" "}
          </Link>
          <Link to="/register">
            <button className="btn btn-outline btn-success">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
