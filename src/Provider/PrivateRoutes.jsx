import React from 'react';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Pages/Loader/Loader';
import useAuth from '../Hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const {user, loader} = useAuth();
    const location = useLocation();

    if(loader){
        return <Loader></Loader>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;