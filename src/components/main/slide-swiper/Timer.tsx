import React, { useState, useEffect } from "react";
import "./Timer.css";

const COUNTDOWN_TARGET: any = new Date("2024-06-31T23:59:59");

const getTimeLeft = () => {
const totalTimeLeft = COUNTDOWN_TARGET.getTime() - new Date().getTime();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Timer = () => {
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

export default Timer;
