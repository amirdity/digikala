import StorySlide from "./slide-swiper/StorySlide";
import BigestSlide from "./slide-swiper/BigestSlide";
import DigiJet from "./DigiJet";
import ShegeftAngizSlide from "./slide-swiper/ShegeftAngizSlide";
import Timer from "./slide-swiper/Timer";
import TrainTimer from "./slide-swiper/TrainTimer";

function Homepage() {
  return (
    <div className="flex flex-col gap-y-4 items-center max-w-[1920px] overflow-hidden justify-center mx-auto">
      <StorySlide />
      <BigestSlide />
      <DigiJet />
      <ShegeftAngizSlide />
      <Timer />
      <TrainTimer />
    </div>
  );
}

Homepage.propTypes = {};

export default Homepage;
