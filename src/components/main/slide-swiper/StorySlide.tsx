import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
type Slide = {
  src: string;
  alt: string;
};
const slide: Array<Slide> = [
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/e88495d57a9021171b27464393d27fc778957df7_1720952448.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "دوربین کدوم بهتره؟ Note 13 Pro Vs Galaxy A55",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "اسپرینگ رول سبزیجات",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/e88495d57a9021171b27464393d27fc778957df7_1720952448.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "دوربین کدوم بهتره؟ Note 13 Pro Vs Galaxy A55",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/e88495d57a9021171b27464393d27fc778957df7_1720952448.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "دوربین کدوم بهتره؟ Note 13 Pro Vs Galaxy A55",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/e88495d57a9021171b27464393d27fc778957df7_1720952448.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "دوربین کدوم بهتره؟ Note 13 Pro Vs Galaxy A55",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/e88495d57a9021171b27464393d27fc778957df7_1720952448.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "دوربین کدوم بهتره؟ Note 13 Pro Vs Galaxy A55",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/e88495d57a9021171b27464393d27fc778957df7_1720952448.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "دوربین کدوم بهتره؟ Note 13 Pro Vs Galaxy A55",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/e88495d57a9021171b27464393d27fc778957df7_1720952448.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "دوربین کدوم بهتره؟ Note 13 Pro Vs Galaxy A55",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/e88495d57a9021171b27464393d27fc778957df7_1720952448.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "دوربین کدوم بهتره؟ Note 13 Pro Vs Galaxy A55",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/e88495d57a9021171b27464393d27fc778957df7_1720952448.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "دوربین کدوم بهتره؟ Note 13 Pro Vs Galaxy A55",
  },
  {
    src: "",
    alt: "",
  },
  {
    src: "",
    alt: "",
  },
  {
    src: "",
    alt: "",
  },
  {
    src: "",
    alt: "",
  },
  {
    src: "",
    alt: "",
  },
];
function StorySlide() {
  return (
    <>
      <div className="max-w-[1336px] w-screen  flex h-[150px] pt-5 flex-row  mx-auto justify-center items-center text-center align-middle">
        <Swiper
          dir="rtl"
          slidesPerView={13}
          spaceBetween={1}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 13,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slide.map((slide) => (
            <SwiperSlide>
              <div className="flex flex-col h-[140px] w-[84px]">
                <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]  mt-2">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="rounded-full w-[74px] h-[74px] p-1 "
                  />
                </div>
                <p className="w-[84px] h-[48px] story-text">{slide.alt}</p>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="flex flex-col h-[140px] w-[84px]">
              <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]  mt-2">
                <img
                  src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                  alt="اسپرینگ رول سبزیجات"
                  className="rounded-full w-[74px] h-[74px] p-1 "
                />
              </div>
              <p className="w-[84px] h-[48px] story-text">
                تقدسم به بچه های خوب ایران و بچه کونی های محل
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default StorySlide;
