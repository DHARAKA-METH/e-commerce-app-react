import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ErrorMessage from "../Pages/4O4Err/ErrorMessage";
//import { userSelector } from "../Store/ReduxSlice/UserSlice"

const AdminProtected = () => {
  const userData = useSelector((store) => store.UserSlice.user);
  // console.log('user in admin protector.....',userData.role);
  const [canView, setCanView] = useState(false);
  useEffect(() => {
    if (userData.name) {
      if (!(userData.name === "default")) {
        if (userData.role === "admin") {
          setCanView(true);
        }
      }
    }
    // eslint-disable-next-line
  }, [userData]);
  return canView ? <Outlet /> : <ErrorMessage />;
};

export default AdminProtected;
