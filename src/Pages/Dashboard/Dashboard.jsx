import React from "react";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-32">
      <div data-aos="fade-up" className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto flex flex-col lg:flex-row gap-5">
        {/* left aside */}
        <div data-aos="fade-right" className=" w-full lg:w-[30%] text-gray-700 dark:text-gray-300 bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-t-2xl">
          <h2 className="mb-10 text-2xl md:text-3xl specific-text font-semibold text-gray-600 dark:text-gray-300 bg-gradient-to-r from-gray-200 to-white dark:from-gray-700 dark:to-gray-900 rounded-t-2xl p-4 text-center">
          All Links
        </h2>
          <div className="flex flex-col space-y-4 mt-10 px-5">
            <NavLink
              className="text-lg text-gray-800 dark:text-gray-300 font-medium md:text-xl hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg"
              to="/dashboard/addMarathon"
            >
              Add Marathon
            </NavLink>
            <NavLink
              className="text-lg text-gray-800 dark:text-gray-300 font-medium md:text-xl hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg"
              to="/dashboard/myMarathonList"
            >
              My Marathon List
            </NavLink>
            <NavLink
              className="text-lg text-gray-800 dark:text-gray-300 font-medium md:text-xl hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg"
              to="/dashboard/myApplyList"
            >
              My Apply List
            </NavLink>
          </div>
          {/* <NavLink>My Marathon List</NavLink> */}
        </div>

        {/* Right aside */}
        <div data-aos="fade-left" className=" w-full lg:w-[70%] px-5  border-0  lg:border-l border-gray-200 dark:border-gray-800 lg:min-h-[80vh]">
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
