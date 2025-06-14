import React from 'react';

import useAxiosSecure from '../Hooks/useAxiosSecure';

const useAddMarathon = () => {
    const axiosSecure = useAxiosSecure();

    const myMarathonPromise = (newMarathon) => {
        return axiosSecure.post("marathons", newMarathon)
    }
    return {
        myMarathonPromise
    };
};

export default useAddMarathon;