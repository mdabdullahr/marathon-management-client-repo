import React, { Suspense, useEffect, useState } from "react";
import MyApplyListTable from "./MyApplyListTable";
import useAuth from "../../Hooks/useAuth";
import useMyApply from "../../Api/useMyApply";

const MyApplyList = () => {
  const { user } = useAuth();
  const { myApplyPromise } = useMyApply();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    document.title = "Marathon Management | Dashboard | My-Apply-List";
  }, []);

  console.log(searchText);

  return (
    <div data-aos="fade-left">
      <div className="flex justify-center mt-5 mb-6">
        <input
          type="text"
          placeholder="🔍 Search by title..."
          className="input input-bordered w-full max-w-md px-4 py-2 border-2 border-indigo-500 dark:border-purple-400 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-purple-500 text-gray-700 dark:text-white bg-white dark:bg-gray-800 placeholder:text-gray-400"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <Suspense
        fallback={
          <div className="my-10 flex items-center justify-center min-h-[300px]">
            <span className="loading loading-spinner loading-xl text-primary"></span>
          </div>
        }
      >
        <MyApplyListTable
          myApplyPromise={myApplyPromise(user.email, searchText)}
        ></MyApplyListTable>
      </Suspense>
    </div>
  );
};

export default MyApplyList;
