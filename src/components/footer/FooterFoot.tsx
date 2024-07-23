const Icons = {
  up: [
    "digimag.svg",
    "digipay.svg",
    "digistyle.svg",
    "digiplus.svg",
    "jet.svg",
    "magnet.svg",
    "digiMehr.svg",
  ],
  down: ["", "", ""],
};
function FooterFoot() {
  return (
    <div className="w-full flex bg-neutral-100 h-[160px]">
      <div className=" max-w-[1600px] flex flex-col  mx-auto bg-inherit">
        <div className="flex flex-row h-[80px] bg-inherit items-center justify-between">
          <img
            src="digimag.svg"
            alt="زیر مجوعه های دیجی کالا"
            className="bg-inherit h-[20px] "
          />
          <img
            src="digimag.svg"
            alt="زیر مجوعه های دیجی کالا"
            className="bg-inherit h-[20px] "
          />
          <img
            src="digimag.svg"
            alt="زیر مجوعه های دیجی کالا"
            className="bg-inherit h-[20px] "
          />
        </div>
        <div className="flex flex-row h-[80px] bg-inherit items-center">
          {" "}
          <img
            src="digimag.svg"
            alt="زیر مجوعه های دیجی کالا"
            className="bg-inherit h-[20px] "
          />
          <img
            src="digimag.svg"
            alt="زیر مجوعه های دیجی کالا"
            className="bg-inherit h-[20px] "
          />
          <img
            src="digimag.svg"
            alt="زیر مجوعه های دیجی کالا"
            className="bg-inherit h-[20px] "
          />
        </div>
      </div>
    </div>
  );
}

export default FooterFoot;
{
  /* {Icons.up.map((icon) => (
            <div className=" border-b-[1px] border-l-[1px] flex bg-inherit border-black">
              <img
                src={icon}
                alt="زیر مجوعه های دیجی کالا"
                className="bg-inherit h-[20px] "
              />
            </div>
          ))} */
}
