import React from "react";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto flex flex-col lg:flex-row gap-5">
        {/* left aside */}
        <div className="bg-gray-100 dark:bg-gray-800 w-full lg:w-[30%] p-5 text-gray-700 dark:text-gray-300 rounded-2xl">
          <h3 className="text-2xl dark:text-white text-gray-600 md:text-3xl specific-text text-center font-bold bg-gray-300 p-2 rounded-2xl">
            All Links
          </h3>
          <div className="flex flex-col space-y-6 mt-10">
            <NavLink
              className="text-lg text-gray-800 dark:text-gray-300 font-medium md:text-xl"
              to="/dashboard/addMarathon"
            >
              Add Marathon
            </NavLink>
            <NavLink
              className="text-lg text-gray-800 dark:text-gray-300 font-medium md:text-xl"
              to="/dashboard/myMarathonList"
            >
              My Marathon List
            </NavLink>
            <NavLink
              className="text-lg text-gray-800 dark:text-gray-300 font-medium md:text-xl"
              to="/dashboard/myApplyList"
            >
              My Apply List
            </NavLink>
          </div>
          {/* <NavLink>My Marathon List</NavLink> */}
        </div>

        {/* Right aside */}
        <div className=" w-full lg:w-[70%] p-5">
          <h3 className="text-2xl dark:text-white text-gray-600 md:text-3xl specific-text text-center font-bold bg-gray-300 p-2 rounded-2xl">All Content</h3>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
