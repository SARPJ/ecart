import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center border border-danger counrerr">
      <div className=" rounded-lg text-center">
        <span className="text-red-400 text-sm">Days</span>
        <p>{String(timeLeft.days).padStart(2, "0")}</p>
      </div>
      <div className=" rounded-lg text-center">
        <span className="text-red-400 text-sm">Hours</span>
        <p>{String(timeLeft.hours).padStart(2, "0")}</p>
      </div>
      <div className=" rounded-lg text-center">
        <span className="text-red-400 text-sm">Minutes</span>
        <p>{String(timeLeft.minutes).padStart(2, "0")}</p>
      </div>
      <div className=" rounded-lg text-center">
        <span className="text-red-400 text-sm">Seconds</span>
        <p>{String(timeLeft.seconds).padStart(2, "0")}</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
