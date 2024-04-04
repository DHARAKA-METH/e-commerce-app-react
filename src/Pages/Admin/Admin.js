import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import addData from "../../Utils/AddData/AddData";
import GetDataFromCollection from "../../Utils/DataFetch/GetDataFromCollection";
import { Flag } from "@mui/icons-material";

const Admin = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    GetDataFromCollection("Category", setCategoryData);
  }, []);
  const [categoryTitle, setcategoryTitle] = useState([]);
  useEffect(() => {
    GetDataFromCollection("Category/Category5/Category5", setcategoryTitle);
  }, []);

  const categoryTitleArr = ['Category5_item1'];
  categoryTitle.map(({ title }) => {
    categoryTitleArr.push(title);
  });

  console.log(categoryTitleArr);
  const numberInputRef = useRef();

  const titleValidate = () => {
    const TitleName = `Category5_item${numberInputRef.current.value}`;
   // const TitleName ='Category5_item1' ;
    
    if (!categoryTitleArr.includes(TitleName)) {
      return (true )
    } else {
      return (false)
    }

    // categoryTitle.map(({title},index)=><p key={index}>{title}</p>)
  };

  // console.log(categoryTitle);

  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <h1>admin</h1>

      <div>
        <select id="dropdown">
          <option value="">-- Select Category--</option>
          {categoryData.map(({ CategoryTitle, categoryId }, index) => (
            <option key={index} value={categoryId}>
              {CategoryTitle}
            </option>
          ))}
        </select>
      </div>
      {/* <div>
        <select id="dropdown">
          <option value="">-- set CategoryTitle--</option>
          {categoryTitle.map(({ title }, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div> */}

      <div>
        Add Numer
        <input
          defaultValue={0}
          onChange={() => console.log(titleValidate())}
          ref={numberInputRef}
          className="border border-black"
          type="number"
          min={1}
        />
      </div>

      {/* <button onClick={() => addData()}>Add Data</button> */}

      {/* {categoryTitle.map(({title},index)=><p key={index}>{title}</p>)  } */}
    </div>
  );
};

export default Admin;
