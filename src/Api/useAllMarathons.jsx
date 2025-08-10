import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useAllMarathons = () => {
  const axiosSecure = useAxiosSecure();

  const allMarathonsPromise = (sortOrder = "desc", currentPage, itemsParPage) => {
    return axiosSecure.get(`all-marathons?sort=${sortOrder}&page=${currentPage}&size=${itemsParPage}`).then(res => res.data);
  };

  return {
    allMarathonsPromise
  };
};

export default useAllMarathons;
