import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import { IconButton, Rating } from "@mui/material";

const Products = ({ title,slidesPerView }) => {
  const Products = [
    {
      imageUrl:
        "https://www.dreamhost.com/blog/wp-content/uploads/2017/08/promote-website-opt.jpg",
      price: "100",
      ProductTitle: "ProductTitle",
    },
    {
      imageUrl:
        "https://www.cloudways.com/blog/wp-content/uploads/How-To-Promote-a-Product.jpg",
      price: "100",
      ProductTitle: "ProductTitle",
    },
    {
      imageUrl:
        "https://www.salsify.com/hubfs/Product%20Experience%20Management%20Platform%20-%20PXM%20%28ENG%29.png#keepProtocol",
      price: "100",
      ProductTitle: "ProductTitle",
    },
    {
      imageUrl:
        "https://www.dreamhost.com/blog/wp-content/uploads/2017/08/promote-website-opt.jpg",
      price: "100",
      ProductTitle: "ProductTitle",
    },
    {
      imageUrl:
        "https://www.cloudways.com/blog/wp-content/uploads/How-To-Promote-a-Product.jpg",
      price: "100",
      ProductTitle: "ProductTitle",
    },
    {
      imageUrl:
        "https://www.salsify.com/hubfs/Product%20Experience%20Management%20Platform%20-%20PXM%20%28ENG%29.png#keepProtocol",
      price: "100",
      ProductTitle: "ProductTitle",
    },
    {
      imageUrl:
        "https://www.dreamhost.com/blog/wp-content/uploads/2017/08/promote-website-opt.jpg",
      price: "100",
      ProductTitle: "ProductTitle",
    },
    {
      imageUrl:
        "https://www.cloudways.com/blog/wp-content/uploads/How-To-Promote-a-Product.jpg",
      price: "100",
      ProductTitle: "ProductTitle",
    },
    {
      imageUrl:
        "https://www.salsify.com/hubfs/Product%20Experience%20Management%20Platform%20-%20PXM%20%28ENG%29.png#keepProtocol",
      price: "100",
      ProductTitle: "ProductTitle",
    },
  ];

  const ProductUnit = ({ imageUrl, price, ProductTitle, id }) => (
    <IconButton sx={{ color: "black" }}>
      <div>
        <img
          className="w-full object-contain"
          src={imageUrl}
          alt={`pro${id}`}
        />
        <h4 className="text-base font-semibold">{ProductTitle}</h4>
        <p className="text-sm"> RS. {price}/-</p>
        <Rating name="size-small" defaultValue={4} readOnly size="small" />
      </div>
    </IconButton>
  );

  return (
    <section
      className="w-full mt-4"
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
        {Products.map(({ imageUrl, price, ProductTitle }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              imageUrl={imageUrl}
              price={price}
              ProductTitle={ProductTitle}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;
