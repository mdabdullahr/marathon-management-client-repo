import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useMyApply = () => {
  const axiosSecure = useAxiosSecure();

  const myApplyPromise = (email) => {
    return axiosSecure.get(`registrations?email=${email}`).then((res) => res.data);
  };
  return {
    myApplyPromise
  };
};

export default useMyApply;
