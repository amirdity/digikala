function DownloadLink() {
  return (
    <div className="bg-[#3c4b6d] flex flex-row rounded-lg h-[70px] justify-between items-center">
      <div className=" bg-inherit  flex flex-row text-white justify-center  items-center font-[500] text-[21px] gap-x-5 mx-5">
        <img src="/footerlogo2.webp" alt="" className="w-[40px] rounded-lg" />
        دانلود اپلیکیشن دیجی‌کالا
      </div>
      <div className="flex flex-row gap-5 bg-inherit rounded-lg">
        <img src="/bazar.svg" alt="دانلود از بازار" className=" rounded-lg" />
        <img src="/mayket.svg" alt="دانلود از مایکت" className=" rounded-lg" />
        <img src="/sib.svg" alt="دانلود از سیب" className=" rounded-lg" />
        <div className="bg-white rounded-lg h-[44px] w-[44px] items-center justify-center flex ml-4">
          <img
            src="dot.svg"
            alt="باقی موارد"
            className=" rounded-lg h-[44px] w-[44px]"
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadLink;
