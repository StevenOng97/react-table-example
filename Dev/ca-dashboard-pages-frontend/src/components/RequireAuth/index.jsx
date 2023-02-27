import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { getCurrentUser } from '../../helpers/helpers';

const RequireAuth = () => {
  const user = getCurrentUser();
  const location = useLocation();

  return user && user?.jwtToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
  
  // return auth ? (
  //   <Outlet />
  // ) : auth?.jwtToken ? ( //changed from user to jwtToken to persist login after refresh
  //   <Navigate to="/unauthorized" state={{ from: location }} replace />
  // ) : (
  //   <Navigate to="/login" state={{ from: location }} replace />
  // );
};

export default RequireAuth;
