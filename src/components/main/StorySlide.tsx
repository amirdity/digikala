import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
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
    <div className="max-w-[1336px] flex h-[150px] mx-auto pt-5 overflow-hidden justify-center items-center">
      <Swiper
        dir="rtl"
        navigation={true}
        slidesPerView={12}
        spaceBetween={100}
        // pagination={{
        //   clickable: true,
        // }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        // }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {" "}
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[140px] w-[84px]">
            <div className="rounded-full story items-center justify-center flex w-[80px] h-[80px]">
              <img
                src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115"
                alt="اسپرینگ رول سبزیجات"
                className="rounded-full w-[74px] h-[74px] p-1 "
              />
            </div>
            <p>اسپرینگ رول سبزیجات</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default StorySlide;
{
  /* {slide.map((slide) => (
          <SwiperSlide>
            <div>
              <div>
                <img src={slide.src} alt={slide.alt} />
              </div>
              <p>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))} */
}
