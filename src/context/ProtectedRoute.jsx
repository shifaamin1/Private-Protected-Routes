import React, { useContext } from 'react';
import { userCondext} from './Contextprowider'

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, roles }) => {
  const { role, authenticated } = useContext(userCondext);

  // If user is not logged in
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  // If user doesn't have access
  if (!roles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Otherwise show the component
  return children;
};

export default ProtectedRoute;
