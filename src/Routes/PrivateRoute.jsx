import React from 'react';
import useAuth from '../Pages/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    if(loading){
        return <h1>loading.............</h1>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to={'/login'} replace></Navigate>
    
};

export default PrivateRoute;