import React from 'react';
import spinner from '../images(shoes)/spinner.gif'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    let location = useLocation();
    if (loading) { 
        return  <div>
        <img className="mx-auto" src={spinner} alt="spinner" />
    </div> }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;