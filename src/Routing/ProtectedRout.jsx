import React from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate from the correct location

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("userDetails");

  if (token) {
    return children;
  }

  return <Navigate to="/login" />;
};
