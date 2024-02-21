import React from "react";
import { Navigate } from "react-router-dom";

export const Protectedroute = ({ children }) => {
  const authLogin = true;

  if (!authLogin) {
    return <Navigate to="/" replace />;
  }
  return children;
};
