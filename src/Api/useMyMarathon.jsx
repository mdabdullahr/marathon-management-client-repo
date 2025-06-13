import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useMyMarathon = () => {
  const axiosSecure = useAxiosSecure();

  const myMarathonPromise = (email) => {
    return axiosSecure.get(`marathons?email=${email}`).then((res) => res.data);
  };
  return {
    myMarathonPromise,
  };
};

export default useMyMarathon;
