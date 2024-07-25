import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination } from "swiper/modules";
type Adress = { src: string; alt: string };
type Baners = Array<Adress>;
const bansrs: Baners = [
  {
    src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/e1272decb672540df5818e3200f843b5a2596b99_1721641012.jpg?x-oss-process=image/quality,q_95/format,webp",
    alt: "",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/45ac4baf7161b38ad6f6a713f936eecc12888aa9_1720966013.jpg?x-oss-process=image/quality,q_95/format,webp",
    alt: "",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/9fb15c184b09d3e4ad3459a313ee9201bef99d19_1721806179.jpg?x-oss-process=image/quality,q_95/format,webp",
    alt: "",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/35d0d828125812ed10cb38d6aaa6aa5328fcdcf6_1721577091.jpg?x-oss-process=image/quality,q_95/format,webp",
    alt: "",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-adservice-banners/388e58a5ce88f7610a3a1c6a1719621c370539d1_1721544961.jpg?x-oss-process=image/quality,q_95/format,webp",
    alt: "",
  },
];
export default function BigestSlide() {
  return (
    // <div className={classes.bigestslide}>

    // </div>
    <div
      className={`max-w-[1920px] w-screen  flex h-[400px] pt-5 flex-row  mx-auto justify-center items-center text-center align-middle storySlide bigestSlide`}
    >
      <Swiper
        dir="rtl"
        slidesPerView={1}
        spaceBetween={1}
        autoplay={true}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {bansrs.map((baner) => (
          <SwiperSlide>
            <div>
              <img
                src={baner.src}
                alt={baner.alt}
                className="h-[400px] w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
