import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import User from "../Pages/User/User";
import Home from "../Pages/Home/Home";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="User" element={<User/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
