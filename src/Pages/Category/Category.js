import {  ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetDataFromCollection from "../../Utils/DataFetch/GetDataFromCollection";
import Loading from "../../components/Loading/Loading";

const Category = () => {
 const [categoryData,setCategoryData]=useState([])
  useEffect((()=>{
    GetDataFromCollection('Category',setCategoryData)
  }),[])

  //console.log('category data...........',categoryData)

  if(categoryData.length===0){
    return<Loading/>
  }

  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <div
        className="w-full flex flex-col "
        style={{
          boxShadow: "rgba(0,0,0,0.24)0px 3px 8px",
          padding: "20px",
          borderRadius: "25px",
        }}
      >
        <div>
          <h2 className="text-lg font-bold mb-3 ">Main Categories..</h2>
        </div>
        <div className="w-full grid p-16 sm:grid-cols-1 md:grid-cols-2   lg:p-32 lg:grid-cols-4 grid-rows-[auto] gap-5">
          {categoryData?.map(({ img, CategoryTitle, categoryId }, index) => (
            <CategoryItems
              key={index}
              imgUrl={img}
              CategoryId={categoryId}
              title={CategoryTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

const CategoryItems = ({ imgUrl, title, CategoryId }) => (
  <Link to={`/category/${CategoryId}`}>
    <ListItemButton
      style={{
        boxShadow: "rgba(0,0,0,0.2)0px 3px 8px",
        padding: "20px",
        borderRadius: "25px",
      }}
      sx={{ color: "black" }}
    >
      <div className="w-ful p-1  flex flex-col items-center">
        <img
          className="rounded-lg "
          src={imgUrl}
          style={{
            borderRadius: "15px",
          }}
          alt="Category Item"
        />
        <h2 className="text-[20px] font-bold">{String(title).substring(0,24)}</h2>
      </div>
    </ListItemButton>
  </Link>
);
