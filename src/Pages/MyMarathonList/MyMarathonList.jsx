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
      <Suspense
        fallback={
          <div className="my-10 flex items-center justify-center min-h-[300px]">
            <span className="loading loading-spinner loading-xl text-teal-600"></span>
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
