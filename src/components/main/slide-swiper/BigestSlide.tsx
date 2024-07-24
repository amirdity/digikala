import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import classes from "./BigestSlide.module.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function BigestSlide() {
  return (
    // <div className={classes.bigestslide}>

    // </div>
    <div className="max-w-[1336px] w-screen  flex h-[150px] pt-5 flex-row  mx-auto justify-center items-center text-center align-middle storySlide">
      <Swiper
        dir="rtl"
        slidesPerView={1}
        spaceBetween={1}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
