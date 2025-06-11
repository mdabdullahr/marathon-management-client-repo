import React, { Suspense, useContext } from "react";
import MyApplyListRow from "./MyApplyListRow";
import { AuthContext } from "../../Provider/AuthProvider";
import { myApplyPromise } from "../../Api/MyApplyApi";
import Lottie from "lottie-react";

const MyApplyList = () => {
  const { user } = useContext(AuthContext);
  return (
    <div data-aos="fade-left" className="my-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-gray-800 dark:text-gray-200">
            <tr>
              <th>#</th>
              <th>Marathon Image, Title & location</th>
              <th>Your Name & Contact</th>
              <th>Marathon Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-gray-200">
            <Suspense fallback="Loading...">
              <MyApplyListRow
                myApplyPromise={myApplyPromise(user.email)}
              ></MyApplyListRow>
            </Suspense>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplyList;
