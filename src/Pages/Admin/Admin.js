import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import addData from "../../Utils/AddData/AddData";
import GetDataFromCollection from "../../Utils/DataFetch/GetDataFromCollection";

const Admin = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    GetDataFromCollection("Category", setCategoryData);
  }, []);
  const [categoryData2, setCategoryData2] = useState([]);
  useEffect(() => {
    GetDataFromCollection("Category/Category5/Category5", setCategoryData2);
  }, []);

  console.log(categoryData2)

  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <h1>admin</h1>

<div>
<select id="dropdown" >
        <option value="">-- Select Category--</option>
        {categoryData.map(({CategoryTitle,categoryId},index)=><option key={index} value={categoryId}>{CategoryTitle}</option>
        )}
        
      </select>
</div>
<div>
<select id="dropdown" >
        <option value="">-- Select Category--</option>
        {categoryData.map(({CategoryTitle,categoryId},index)=><option key={index} value={categoryId}>{CategoryTitle}</option>
        )}
        
      </select>
</div>

      <button onClick={()=>addData()}>Add Data</button>
    </div>
  );
};

export default Admin;
