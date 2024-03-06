import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const itemImageArr = [
  "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
  "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
  "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
  "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
];

const ItemPage = () => {
  const mainImageRef = useRef();
  const subImageRef = useRef([]);
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <h1 className="text-lg font-bold px-3 mb-7">Item Title</h1>
      <img
        className="w-full object-contain rounded-md"
        src={itemImageArr[0]}
        alt="main item"
      />

      <div className="w-full mt-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ItemPage;
