import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const User_Private_Route = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (!user?._id) {
    return <Navigate to="/user/login" />;
  }
  if (user?._id) {
    return children;
  }
  return <Navigate to="getUserAction" />;
};

export default User_Private_Route;
