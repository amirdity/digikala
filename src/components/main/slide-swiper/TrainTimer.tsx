import React, { useState, useEffect } from "react";
const TargetTime: Date = new Date("2025-01-01T00:00:00");
const currentTime: Date = new Date();
export default function TrainTimer() {
  const timeLeft: number = TargetTime.getTime() - currentTime.getTime(); // milliseconds left
  const seconds: number = Math.floor(timeLeft / 1000);
  const minets: number = Math.floor(seconds / 60);
  const hour: number = Math.floor((minets / 60)%60);

  const [timer, setTimer] = useState({
    seconds,
  });

  useEffect(() => {
    setTimer({
      seconds,
    });
  }, [seconds]);

  return (
    <div className="flex flex-row justify-center items-center align-middle">
      <p>{timer.seconds}</p>
    </div>
  );
}
