import React, { useRef } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import PyamentModel from "../Models/PyamentModel";
import FooterDesign from "../components/Footer/FooterDesign";

const MainLayout = () => {
  const paymentModelRef = useRef();
  return (
    <div className="overflow-hidden w-screen h-screen">
      <PyamentModel ref={paymentModelRef} />
      <Header paymentModelRef={paymentModelRef} />
      <Outlet />

    </div>
  );
};

export default MainLayout;
