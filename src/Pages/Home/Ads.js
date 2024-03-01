import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Ads() {
    // Adds images url
  const AdsElement = [
    {
      imageUrl: "https://rb.gy/zbwdoi",
    },
    {
      imageUrl: "https://rb.gy/ao0buf",
    },
    {
      imageUrl: "https://rb.gy/zbwdoi",
    },
    {
      imageUrl: "https://rb.gy/ao0buf",
    },
    {
      imageUrl: "https://rb.gy/zbwdoi",
    },
    {
      imageUrl: "https://rb.gy/ao0buf",
    },
  ];

  // Ads Returning function
  const AddAds = ({ url, id }) => (
    <img className="w-full  object-contain" src={url} alt={`ad${id}`} />
  );

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
        className=""
      >
        {AdsElement.map(({ imageUrl }, index) => (
          <SwiperSlide className="rounded-lg overflow-hidden" key={index}>
            <AddAds url={imageUrl} id={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
