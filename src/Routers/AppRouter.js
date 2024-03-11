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
import AdminProtected from "./AdminProtected";
import Admin from "../Pages/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        children: [
          {
            index: true,
            element: <Category />,
          },
          {
            path: ":CategoryId",
            children: [
              {
                index: true,
                element: <CategoryItems />,
              },
              {
                path: ":itemId",
                element: <ItemPage />,
              },
            ],
          },
        ],
      },
      {
        element: <UserProtected />,
        children: [
          {
            path: "profile",
            element: <User />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <AdminProtected />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<MainLayout />}>
    //         <Route index element={<Home />} />
    //         <Route path="category">
    //           <Route index element={<Category />} />
    //           <Route path=":CategoryId">
    //             <Route index element={<CategoryItems />} />
    //             <Route path="item" element={<ItemPage />} />
    //           </Route>
    //         </Route>
    //         <Route element={<UserProtected />}>
    //           <Route path="user" element={<User />} />
    //         </Route>
    //       </Route>
    //       <Route path="/profile" element={<Login />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
};

export default AppRouter;
