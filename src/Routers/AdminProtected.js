import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ErrorMessage from "../Pages/4O4Err/ErrorMessage";
import Loading from "../components/Loading/Loading";
//import { userSelector } from "../Store/ReduxSlice/UserSlice"

const AdminProtected = () => {

  const userData = useSelector((store) => store.UserSlice.user);
  // console.log('user in admin protector.....',userData.role);
  const [canView, setCanView] = useState(false);
  const[loading,setLoading]=useState(false)
  useEffect(() => {
    setLoading(true)
    if (userData.name) {
      if (!(userData.name === "default")) {
        if (userData.role === "admin") {
          setCanView(true);
          
         
          
        }
      }
    }
    // eslint-disable-next-line
  }, [userData]);
  if(loading){
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    return<Loading/>
  }
  return (
    canView ? <Outlet /> : <ErrorMessage />
    )
};

export default AdminProtected;
