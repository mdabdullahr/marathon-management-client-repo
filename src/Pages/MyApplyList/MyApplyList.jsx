import React, { Suspense, useEffect } from "react";
import MyApplyListTable from "./MyApplyListTable";
import useAuth from "../../Hooks/useAuth";
import useMyApply from "../../Api/useMyApply";

const MyApplyList = () => {
  const { user } = useAuth();
  const { myApplyPromise } = useMyApply();

  useEffect(() => {
      document.title = "Marathon Management | Dashboard | My-Apply-List";
    }, []);

  return (
    <div data-aos="fade-left">
      <h2 className="text-center text-2xl md:text-3xl specific-text font-semibold text-gray-600 dark:text-purple-200 bg-gray-200 dark:bg-gray-700 p-4 rounded-t-2xl">
        My Apply List
      </h2>
      <Suspense
        fallback={
          <div className="my-10 flex items-center justify-center min-h-[300px]">
            <span className="loading loading-spinner loading-xl text-primary"></span>
          </div>
        }
      >
        <MyApplyListTable
          myApplyPromise={myApplyPromise(user.email)}
        ></MyApplyListTable>
      </Suspense>
    </div>
  );
};

export default MyApplyList;
