import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
    <>
      <div className="max-w-[1336px] flex h-[150px]  pt-5 overflow-hidden justify-center items-center text-center align-middle mx-10">
        <Swiper
          dir="rtl"
          navigation={true}
          slidesPerView={7}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            700: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1768: {
              slidesPerView: 9,
              spaceBetween: 10,
            },
            2024: {
              slidesPerView: 10,
              spaceBetween: 10,
            },
          }}
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
              <p className="w-[84px] h-[48px] story-text">
                تقدسم به بچه های خوب ایران و بچه کونی های محل
              </p>
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
        </Swiper>
      </div> 
       <div className="mt-10">
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              2024: {
                slidesPerView: 8,
                spaceBetween: 50,
              },
              3024: {
                slidesPerView: 13,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
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
      </div>
    </>
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
