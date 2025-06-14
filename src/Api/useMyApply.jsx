import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useMyApply = () => {
  const axiosSecure = useAxiosSecure();

  const myApplyPromise = (email) => {
    return axiosSecure.get(`registrations?email=${email}`).then((res) => res.data);
  };

  const updateMyApplyPromise = (id, updateData) =>{
    return axiosSecure.patch(`registrations/${id}`, updateData);
  };

  const deleteMyApplyPromise = (id) =>{
    return axiosSecure.delete(`registrations/${id}`);
  }
  return {
    myApplyPromise,
    updateMyApplyPromise,
    deleteMyApplyPromise
  };
};

export default useMyApply;
