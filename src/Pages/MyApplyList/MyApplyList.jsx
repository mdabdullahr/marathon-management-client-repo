import React, { Suspense, useContext } from "react";
import MyApplyListRow from "./MyApplyListRow";
import { AuthContext } from "../../Provider/AuthProvider";
import { myApplyPromise } from "../../Api/MyApplyApi";

const MyApplyList = () => {
  const { user } = useContext(AuthContext);
  return (
    <div data-aos="fade-left" className="my-10">
              <MyApplyListRow
                myApplyPromise={myApplyPromise(user.email)}
              ></MyApplyListRow>
    </div>
  );
};

export default MyApplyList;
