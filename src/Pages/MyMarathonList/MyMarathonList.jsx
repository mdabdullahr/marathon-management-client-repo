import React, { Suspense, useEffect } from "react";
import MyMarathonListTable from "./MyMarathonListTable";
import useAuth from "../../Hooks/useAuth";
import useMyMarathon from "../../Api/useMyMarathon";

const MyMarathonList = () => {
  const { user } = useAuth();
  const { myMarathonPromise } = useMyMarathon();

  useEffect(() => {
      document.title = "Marathon Management | Dashboard | My-Marathon-List";
    }, []);

  return (
    <div data-aos="fade-left">
      <h2 className="text-center text-lg md:text-xl lg:text-2xl specific-text font-semibold text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 p-4 rounded-t-2xl">
        My Marathons
      </h2>
      <Suspense
        fallback={
          <div className="my-10 flex items-center justify-center min-h-[300px]">
            <span className="loading loading-spinner loading-xl text-primary"></span>
          </div>
        }
      >
        <MyMarathonListTable
          myMarathonPromise={myMarathonPromise(user.email)}
        ></MyMarathonListTable>
      </Suspense>
    </div>
  );
};

export default MyMarathonList;
