import React from 'react';

import useAxiosSecure from '../Hooks/useAxiosSecure';

const useMarathonDetail = () => {
    const axiosSecure = useAxiosSecure();

    const marathonDetailPromise = (id) => {
        return axiosSecure.get(`all-marathons/${id}`).then((res) => res.data);
    }
    return {
        marathonDetailPromise
    };
};

export default useMarathonDetail;