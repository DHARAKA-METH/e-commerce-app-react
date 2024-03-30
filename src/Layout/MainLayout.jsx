import React, { useRef } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import PyamentModel from "../Models/PyamentModel";

const MainLayout = () => {
  const paymentModelRef = useRef();
  return (
    <div className="overflow-hidden w-screen h-screen">
      <PyamentModel ref={paymentModelRef} />
      <Header paymentModelRef={paymentModelRef} />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
