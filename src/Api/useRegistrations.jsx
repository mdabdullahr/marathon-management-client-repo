import React from 'react';

import useAxiosSecure from '../Hooks/useAxiosSecure';

const useRegistrations = () => {
    const axiosSecure = useAxiosSecure();

    const registrationsPromise = (newRegistration) => {
        return axiosSecure.post("registrations", newRegistration)
    }
    return {
        registrationsPromise
    };
};

export default useRegistrations;