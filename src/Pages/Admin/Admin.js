import React from "react";
import { useDispatch } from "react-redux";
import addData from "../../Utils/AddData/AddData";

const Admin = () => {
  const dispatch = useDispatch();
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <h1>admin</h1>
      <button onClick={()=>addData()}>Add Data</button>
    </div>
  );
};

export default Admin;
