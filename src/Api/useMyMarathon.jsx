import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useMyMarathon = () => {
  const axiosSecure = useAxiosSecure();

  const myMarathonPromise = (email) => {
    return axiosSecure.get(`marathons?email=${email}`).then((res) => res.data);
  };

  const updateMyMarathonPromise = (id, updatedData) => {
    return axiosSecure.put(`marathons/${id}`, updatedData);
  };

  const deleteMyMarathonPromise = (id) => {
    return axiosSecure.delete(`marathons/${id}`);
  }
  return {
    myMarathonPromise,
    updateMyMarathonPromise,
    deleteMyMarathonPromise
  };
};

export default useMyMarathon;
