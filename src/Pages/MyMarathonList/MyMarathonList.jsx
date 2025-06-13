import React, { Suspense, useContext } from "react";
import MyMarathonListTable from "./MyMarathonListTable";
import { myMarathonPromise } from "../../Api/MyMarathonPromise";
import { AuthContext } from "../../Provider/AuthProvider";

const MyMarathonList = () => {
  const { user } = useContext(AuthContext);
  return (
    <div data-aos="fade-left">
      <h2 className="text-center text-2xl md:text-3xl specific-text font-semibold text-gray-600 dark:text-purple-200 bg-gray-200 dark:bg-gray-700 p-4 rounded-t-2xl">
        My Marathons
      </h2>
      <Suspense>
        <MyMarathonListTable
          myMarathonPromise={myMarathonPromise(user.email)}
        ></MyMarathonListTable>
      </Suspense>
    </div>
  );
};

export default MyMarathonList;
