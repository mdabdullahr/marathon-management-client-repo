import React, { Suspense, useContext } from "react";
import MyApplyListTable from "./MyApplyListTable";
import { AuthContext } from "../../Provider/AuthProvider";
import { myApplyPromise } from "../../Api/MyApplyApi";

const MyApplyList = () => {
  const { user } = useContext(AuthContext);
  return (
    <div data-aos="fade-left">
      <h2 className="text-center text-2xl md:text-3xl specific-text font-semibold text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 p-4 rounded-t-2xl">
        My Apply List
      </h2>
      <Suspense>
        <MyApplyListTable
          myApplyPromise={myApplyPromise(user.email)}
        ></MyApplyListTable>
      </Suspense>
    </div>
  );
};

export default MyApplyList;
