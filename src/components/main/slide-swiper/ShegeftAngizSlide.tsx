import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

type Slide = {
  src: string;
  alt: string;
  off: string;

  price: string;
  realPrice: string;
};
const slide: Array<Slide> = [
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/3dbc56ad9ae7501ac16731a111ae465dd33e8404_1719228862.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "گوشی موبایل کاجیتل مدل KG1100 دو سیم کارت",
    off: "5",

    price: "649",
    realPrice: "680",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/1a40e1895e7704d97efd62d5b4fdae5168c490a6_1718198274.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "گوشی موبایل بلووم پلاس مدل Z7 دو سیم کارت ظرفیت 32 مگابایت و رم 32 مگابایت",
    off: "3",

    price: "659",
    realPrice: "680",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/2a7169b8bf0c3ec6559cb24bd223935be427b0b7_1656498029.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "گوشی موبایل دوجی مدل N30 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
    off: "3",

    price: "4,090",
    realPrice: "4,199",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/41513f36ca8ed31b603737010b4a109c646f7f76_1707811518.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "گوشی موبایل آنر مدل X9b دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت",
    off: "2",

    price: "17,899",
    realPrice: "18,295",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/460f63634004264d921447fb15c02e151b008cbc_1708347859.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "هندزفری سونی مدل MDR-EX14AP",
    off: "43",

    price: "299",
    realPrice: "529",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/001a96c9e436fef968fb71b1a59226711e03acb0_1712072503.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "هدست سونی مدل MDR-ZX110",
    off: "16",

    price: "489",
    realPrice: "579",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/a5078d3ed60f9e655dbe0cd53d97e55742485a4f_1704809564.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "هدست بلوتوثی سونی مدل WH-CH720N",
    off: "6",

    price: "5,799",
    realPrice: "6,199",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/e06e98875ad5947e50811d75ae940a9a38aaa15f_1678627573.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "هدفون بلوتوثی کیو سی وای مدل T13 TWS",
    off: "5",

    price: "619",
    realPrice: "649",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/79e305b6d3fdea44572c6607c49aec6b7367ece9_1706866324.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "ساعت مچی عقربه‌ای مردانه سیتی زن مدل BI5000_87L",
    off: "43",

    price: "4,990",
    realPrice: "8,800",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/2b1c6c08f3ee58fabb03847ba7a45e54f44d51dc_1604498377.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "محافظ کابل شارژ مدل SFP-36 مجموعه 4 عددی",
    off: "14",

    price: "23",
    realPrice: "26",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/353ce971b368f90f0e8eeab52dcc871d77304610_1717229829.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "ست اسباب بازی ابزار مدل Engineer Funzi",
    off: "54",

    price: "139",
    realPrice: "299",
  },
];

import classes from "./ShegeftAngizSlide.module.css";
function ShegeftAngizSlide() {
  return (
    <div
      className={`${classes.shgeftAngiz} flex flex-row justify-center items-center align-middle h-[294px] rounded-[20px]`}
    >
      <div className="max-w-[1336px] w-screen flex h-[254px] pt-5 flex-row  mx-auto justify-between items-center text-center  storySlide bg-inherit py-5 px-0">
        <Swiper
          dir="rtl"
          slidesPerView={9}
          spaceBetween={1}
          navigation={true}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 6,
          //     spaceBetween: 10,
          //   },
          //   768: {
          //     slidesPerView: 8,
          //     spaceBetween: 10,
          //   },
          //   1024: {
          //     slidesPerView: 13,
          //     spaceBetween: 10,
          //   },
          // }}
          modules={[Pagination, Navigation]}
          className={classes.firstSlide}
        >
          {/* FIRST SLIDE */}
          <SwiperSlide>
            <div
              className={`flex flex-col ${classes.firstSlide}  h-[254px] w-[160px] justify-start items-center text-white `}
            >
              <div className="bg-inherit">
                <img
                  src="Amazings.svg"
                  alt="پیشنهاد شگفت انگیز"
                  className="bg-inherit"
                />
              </div>
              <div className="bg-inherit">timer</div>
              <div className="bg-inherit">
                <img
                  src="Amazing.svg"
                  alt="پیشنهاد شگفت انگیز"
                  className="bg-inherit"
                />
              </div>
              <p className="bg-inherit">مشاهده همه </p>
            </div>
          </SwiperSlide>
          {slide.map((slide) => (
            <SwiperSlide className=" border-red-500 border-x-[3px]">
              <div className="flex flex-col h-[254px] w-[165px]  justify-center items-center">
                <div className=" story items-center justify-center flex w-[80px] h-[80px]  mt-2">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className=" w-[132px] h-[132px] p-1"
                  />
                </div>
                <p className="w-[84px] h-[48px] story-text">{slide.alt}</p>
                <div className="flex flex-row ">
                  <p>{slide.off}</p>
                  <p>{slide.price}</p>
                </div>
                <div>
                  <p>{slide.realPrice}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* LAST SLIDE */}
          <SwiperSlide>
            <div className="flex flex-col h-[254px] w-[165px]  justify-center items-center">
              <div className="flex flex-row justify-center border-[#19bfd3] border-[3px] rounded-full h-[51px] w-[51px]">
                <img
                  src="arrowSlide.svg"
                  alt="مشاهده همه"
                  className=" rounded-full"
                />
              </div>
              <p>مشاهده همه</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ShegeftAngizSlide;
