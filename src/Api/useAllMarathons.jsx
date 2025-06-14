import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useAllMarathons = () => {
  const axiosSecure = useAxiosSecure();

  const allMarathonsPromise = (sortOrder = "desc") => {
    return axiosSecure.get(`all-marathons?sort=${sortOrder}`).then(res => res.data);
  };

  return {
    allMarathonsPromise
  };
};

export default useAllMarathons;







