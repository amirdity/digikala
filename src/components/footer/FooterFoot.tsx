import React from "react";
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
    <div className="w-full flex flex-col bg-neutral-100 h-[160px] ">
      <div className="max-w-[1676px] flex flex-col bg-inherit mx-auto">
        <div className="flex flex-row justify-between bg-inherit ">
          {Icons.up.map((icon) => (
            <div className=" border-b-[1px] border-l-[1px] flex bg-inherit border-black">
              <img
                src={icon}
                alt="زیر مجوعه های دیجی کالا"
                className="bg-inherit h-[20px]"
              />
            </div>
          ))}
        </div>
        <div className="bg-inherit">hello</div>
      </div>
    </div>
  );
}

export default FooterFoot;
