import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
type Slide = {
  src: string;
  alt: string;
  text: string;
};
const slide: Array<Slide> = [
  {
    src: "",
    alt: "",
    text: "",
  },
];
function StorySlide() {
  return (
    <div className="max-w-[1336px] flex h-[150px] mx-auto pt-5">
      <Swiper
        spaceBetween={50}
        slidesPerView={16}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slide.map((slide) => (
          <SwiperSlide>
            <div>
              <div>
                <img src={slide.src} alt={slide.alt} />
              </div>
              <p>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default StorySlide;
