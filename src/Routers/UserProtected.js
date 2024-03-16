import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UserProtected = () => {
  const userData = useSelector((store) => store.UserSlice.user);
  // const user = false;

  return userData.name ? <Outlet /> : <Navigate to="/login" />;
};

export default UserProtected;
