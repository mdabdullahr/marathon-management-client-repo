import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  useEffect(() => {
      document.title = "Marathon Management | Dashboard";
    }, []);
  return (
    <div className="min-h-screen pt-32">
      <div data-aos="fade-up" className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-5">
        {/* left aside */}
        <div data-aos="fade-right" className=" w-full lg:w-[30%] text-gray-700 dark:text-gray-300 ">
          <h2 className="mb-10 text-2xl md:text-3xl specific-text font-semibold text-gray-600 dark:text-purple-200 bg-gradient-to-r from-gray-200 to-white dark:from-gray-700 dark:to-gray-900 rounded-t-2xl p-4 text-center">
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
