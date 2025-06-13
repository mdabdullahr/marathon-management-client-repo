import React, { Suspense } from "react";
import MyApplyListTable from "./MyApplyListTable";
import { AuthContext } from "../../Provider/AuthProvider";
import { myApplyPromise } from "../../Api/MyApplyApi";
import useAuth from "../../Hooks/useAuth";

const MyApplyList = () => {
  const {user} = useAuth();
  return (
    <div data-aos="fade-left">
      <h2 className="text-center text-2xl md:text-3xl specific-text font-semibold text-gray-600 dark:text-purple-200 bg-gray-200 dark:bg-gray-700 p-4 rounded-t-2xl">
        My Apply List
      </h2>
      <Suspense>
        <MyApplyListTable
          myApplyPromise={myApplyPromise(user.email, user.accessToken)}
        ></MyApplyListTable>
      </Suspense>
    </div>
  );
};

export default MyApplyList;
