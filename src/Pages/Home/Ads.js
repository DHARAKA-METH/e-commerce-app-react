
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


// import required modules
import { Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
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
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img className="w-full  object-contain" src="https://rb.gy/zbwdoi" alt="ad" /></SwiperSlide>
        <SwiperSlide><img className="w-full  object-contain" src="https://rb.gy/ao0buf" alt="ad" /></SwiperSlide>
        <SwiperSlide><img className="w-full  object-contain" src="https://rb.gy/zbwdoi" alt="ad" /></SwiperSlide>
        <SwiperSlide><img className="w-full  object-contain" src="https://rb.gy/ao0buf" alt="ad" /></SwiperSlide>
        <SwiperSlide><img className="w-full  object-contain" src="https://rb.gy/zbwdoi" alt="ad" /></SwiperSlide>
        <SwiperSlide><img className="w-full  object-contain" src="https://rb.gy/ao0buf" alt="ad" /></SwiperSlide>
     
        
        

      </Swiper>
    </>
  );
}
