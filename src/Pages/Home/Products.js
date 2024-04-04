import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import {  Rating } from "@mui/material";
import GetDataFromSubCollection from "../../Utils/DataFetch/GetDataFromSubCollection";
import { Link, useParams } from "react-router-dom";

const Products = ({ title,slidesPerView }) => {
  const [categoryItemsData, setCategoryItemsData] = useState([]);
  const { CategoryId } = useParams();

  useEffect(() => {
    GetDataFromSubCollection(
      "Category",
      'Category2',
      'Category2',
      setCategoryItemsData,
      
    );
  }, []);


  const ProductUnit = ({ imageUrl, price, ProductTitle, id }) => (
      <Link to={`category/Category2`}>
      <div className="hover:bg-gray-200 p-2 cursor-pointer">
        <img
          className="w-full object-contain"
          src={imageUrl}
          alt={`pro${id}`}
        />
        <h4 className="text-base font-semibold">{ProductTitle}</h4>
        <p className="text-sm"> RS. {price}/-</p>
        <Rating name="size-small" defaultValue={4} readOnly size="small" />
      </div>
      </Link>
    
  );

  return (
    <section
      className="w-full mt-4 z-[100]"
      style={{ boxShadow: "rgba(0,0,0,0.24)0px 3px 8px", padding: "20px",borderRadius:'25px' }}
    >
      <h2 className="text-lg font-bold mb-3 ">{title}</h2>
      <Swiper
        slidesPerView={slidesPerView}
        grid={{
          rows: 1,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Autoplay, Mousewheel]}
      >
        {categoryItemsData.map(({ img, description,price }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              imageUrl={img}
              price={price}
              ProductTitle={description}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;
