import React, { useState, useEffect } from "react";
const Target_Time: Date = new Date("2025-01-01T00:00:00");

type GetTimeLeft = {
  seconds: number;
  minets: number;
  hours: number;
};
function getTimeLeft(): GetTimeLeft {
  const Current_Time: Date = new Date();
  const timeLeft: number = Target_Time.getTime() - Current_Time.getTime();
  const seconds: number = Math.floor((timeLeft / 1000) % 60);
  const minets: number = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours: number = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  return { seconds, minets, hours };
}
export default function TrainTimer() {
  const [timeLeft, setTimeLeft] = useState<GetTimeLeft>(getTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  console.log("first");
  return (
    <div className="flex flex-row justify-center items-center align-middle">
      <p>{timeLeft.seconds}</p>
    </div>
  );
}
