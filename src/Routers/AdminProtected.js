import { Navigate, Outlet } from "react-router-dom"

const AdminProtected = () => {

    const admin=true

    if(admin){
       return <Outlet/>
    }else{
        return <Navigate to={"/login"}/>

    }

}

export default AdminProtected
