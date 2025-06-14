import React from 'react';

import useAxiosSecure from '../Hooks/useAxiosSecure';

const useAllMarathons = () => {
    const axiosSecure = useAxiosSecure();

    const allMarathonsPromise = () =>{
       return axiosSecure.get("all-marathons").then(res => res.data);
    }
    return {
        allMarathonsPromise
    };
};

export default useAllMarathons;