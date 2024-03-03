import React from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import User from "../Pages/User/User";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import UserProtected from "./UserProtected";
import Category from "../Pages/Category/Category";
import CategoryItems from "../Pages/CategoryItems/CategoryItems";
import ItemPage from "../Pages/ItemPage/ItemPage";

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
            <Route path="category" >
              <Route index element={<Category />}/>
              <Route path=":CategoryId"  >
                <Route index element={<CategoryItems />}/>
                <Route path="item" element={<ItemPage/>}/>
              </Route>
            </Route>
            <Route element={<UserProtected />}>
              <Route path="user" element={<User />} />
            </Route>
          </Route>
          <Route path="/profile" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
