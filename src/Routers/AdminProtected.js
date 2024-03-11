import { Navigate, Outlet } from "react-router-dom"

const AdminProtected = () => {

    const admin=true

    if(admin){
       return <Outlet/>
    }else{
        return <Navigate to={"/4O4"}/>

    }

}

export default AdminProtected
