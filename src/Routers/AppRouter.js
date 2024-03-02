import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import User from "../Pages/User/User";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import UserProtected from "./UserProtected";
import Category from "../Pages/Category/Category";


// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<MainLayout/>,
//     children:[
//       {
//         index:true,
//         element:<Home/>
//       },
//       {
//         element:<UserProtected/>,
//         children:[
//           {
//             path:'user',
//             element:<User/>
//           }
//         ]
//       }
      
//     ]

// },
// {
//   path:'login',
//   element:<Login/>
// }
// ])


const AppRouter = () => {
  return (
    // <RouterProvider router={router}/>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="category" element={<Category/>}/>
            <Route element={<UserProtected />}>
              <Route path="user" element={<User />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
