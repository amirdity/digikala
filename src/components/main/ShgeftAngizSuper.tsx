
import classes from "./ShgeftAngizSuper.module.css"
function ShgeftAngizSuper() {
  return (
    <div
      className={`h-[110px] max-w-[1330px] ${classes.shgeftAngizSuper} flex flex-row justify-between`}
    >
      {/* <img src="freshPattern.svg" alt="" /> */}
      <div className="flex flex-row justify-center items-center align-bottom gap-10">
        <img src="supermarket/basket.webp" alt="" />
        <img src="supermarket/she-sup.svg" alt="" />
        <p className="bg-green-700 rounded-2xl text-white px-6 py-1 font-[700] text-[1.4rem]"> تا 45 % تخفیف</p>
      </div>
      <div>{ }</div>
    </div>
  );
}

export default ShgeftAngizSuper;

  