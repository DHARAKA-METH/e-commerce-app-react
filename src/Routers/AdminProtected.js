import { useEffect } from "react";
import { useSelector } from "react-redux";
import {  Outlet, useNavigate } from "react-router-dom";
//import { userSelector } from "../Store/ReduxSlice/UserSlice"

const AdminProtected = () => {
  const navigate = useNavigate();

  const userData = useSelector((store) => store.UserSlice.user);
 // console.log('user in admin protector.....',userData.role);

  useEffect(() => {
    if (userData.name) {
      if (!(userData.name === "default")) {
        if (!(userData.role === "admin")) {
          navigate("/4O4");
        }
      } 
    }
    // eslint-disable-next-line
  }, [userData]);
  return <Outlet />;
};

export default AdminProtected;
