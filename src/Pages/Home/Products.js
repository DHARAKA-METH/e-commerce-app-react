import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination, Autoplay } from "swiper/modules";

const Products = ({ title }) => {
  const Products = [
    {
      imageUrl:
        "https://www.dreamhost.com/blog/wp-content/uploads/2017/08/promote-website-opt.jpg",
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
        "https://www.dreamhost.com/blog/wp-content/uploads/2017/08/promote-website-opt.jpg",
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
        "https://www.dreamhost.com/blog/wp-content/uploads/2017/08/promote-website-opt.jpg",
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
        "https://www.dreamhost.com/blog/wp-content/uploads/2017/08/promote-website-opt.jpg",
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
        "https://www.dreamhost.com/blog/wp-content/uploads/2017/08/promote-website-opt.jpg",
      price: "100",
      ProductTitle: "ProductTitle",
    },
  ];

  const ProductUnit = ({ imageUrl, price, ProductTitle, id }) => (
    <div>
      <img className="w-full object-contain" src={imageUrl} alt={`pro${id}`} />
      <h4>{ProductTitle}</h4>
      <p>RS. {price}/-</p>
    </div>
  );

  return (
    <section className="w-full mt-4">
      <h2 className="text-lg font-bold mb-3 ">{title}</h2>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Autoplay]}
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
