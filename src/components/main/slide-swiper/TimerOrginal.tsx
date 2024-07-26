import { useState, useEffect } from "react";
import "./Timer.css";

const COUNTDOWN_TARGET: Date = new Date("2025-06-31T23:59:59");
type GetTimeLeft = () => {
  // days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
const getTimeLeft: GetTimeLeft = () => {
  const totalTimeLeft: number =
    COUNTDOWN_TARGET.getTime() - new Date().getTime();
  // const days: number = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes: number = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds: number = Math.floor((totalTimeLeft / 1000) % 60);
  return { hours, minutes, seconds };
};

const TimerOrginal = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown text-black">
      <div className="content">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="box text-black" key={label}>
              <div className="value text-black">
                <span>{value}</span>
              </div>
              <span className="label text-black"> {label} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimerOrginal;
