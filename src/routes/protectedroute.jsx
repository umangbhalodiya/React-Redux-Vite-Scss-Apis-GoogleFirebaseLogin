import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Protectedroute = ({ children }) => {
  // get login state from redux store
  const { isLoggedIn } = useSelector((state) => state.auth);
  // check if user is logged in
  if (!isLoggedIn) {
    // redirect to login page if user is not logged in
    return <Navigate to="/" replace />;
  }
  // return the children components if user is logged in
  return children;
};
