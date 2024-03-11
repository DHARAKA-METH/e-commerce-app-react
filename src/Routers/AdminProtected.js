import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
//import { userSelector } from "../Store/ReduxSlice/UserSlice"

const AdminProtected = () => {
  const admin = true;

  const user = useSelector((store) => store.UserSlice.user);
  console.log(user);

  if (user.role) {
    if (user.role==='admin') {
      return <Outlet />;
    } else {
      return <Navigate to={"/4O4"} />;
    }
  } else {
    return <Navigate to={"/4O4"} />;
  }
};

export default AdminProtected;
