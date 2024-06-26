import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Adjust this condition based on your authentication logic

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
