import React from "react";
import PropTypes from "prop-types";
const data = [
  {
    title: "با دیجی‌کالا",
    nav: [
      "اتاق خبر دیجی‌کالا",
      "فروش در دیجی‌کالا",
      "فرصت‌های شغلی",
      "گزارش تخلف در دیجی‌کالا",
      "تماس با دیجی‌کالا",
      "درباره دیجی‌کالا",
    ],
  },
  {
    title: " خدمات مشتریان",
    nav: [
      "پاسخ به پرسش‌های متداول",
      "رویه‌های بازگرداندن کالا",
      "رویه‌های بازگرداندن کالا",
      "حریم خصوصی",
      "گزارش باگ",
    ],
  },
  {
    title: "راهنمای خرید از دیجی‌کالا",
    nav: ["نحوه ثبت سفارش", "رویه ارسال سفارش", "شیوه‌های پرداخت"],
  },
];
function FooterNavlink() {
  return (
    <div className="mx-auto justify-center max-w-[1676px] flex flex-row mt-16">
      {data.map((data) => (
        <div className="w-6/12 flex flex-col">
          <h1 className=" text-[#3f4064] text-[16px] font-[700]">
            {data.title}
          </h1>
          {data.nav.map((nav) => (
            <a
              href="/"
              className="text-[14px] font-[400] text-neutral-500 my-4 "
            >
              {nav}
            </a>
          ))}
        </div>
      ))}
      {/* ------------------SOCHIAL MEDIA ------------------------*/}
      <div>
        <h1>همراه ما باشید!</h1>
        <div className="flex flex-row justify-between w-[256px]">
          <img src="/instagram.svg" alt="اینستگرام" />
          <img src="/twitter.svg" alt="توییتر" />
          <img src="/linke.svg" alt="لینکدین" />
          <img src="/aparat.svg" alt="آپارات" />
        </div>
        <h1>با ثبت ایمیل، از تخفیف‌ها با‌خبر شوید</h1>
        <div className="flex flex-row justify-between">
          <input type="email" placeholder="ایمیل شما"className=" bg-gray-200 rounded-lg p-3" />
          <button className="text-white bg-slate-500">ثبت</button>
        </div>
      </div>
    </div>
  );
}

FooterNavlink.propTypes = {};

export default FooterNavlink;
