import React, { useState, useEffect } from "react";
import ShowNotification from "../ShowNotification/ShowNotification";
import "./timer.css";

export let leftSeconds = 7200; // seconds

const Timer = () => {
  const [hours, setHours] = useState("02");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const getFullNumb = (numb) => {
    return `${numb}`.length === 1 ? `0${numb}` : numb;
  };

  const getTime = (leftSeconds) => {
    setHours(getFullNumb(Math.floor(leftSeconds / 3600) % 60));
    setMinutes(getFullNumb(Math.floor(leftSeconds / 60) % 60));
    setSeconds(getFullNumb(Math.floor(leftSeconds % 60)));
  };

  useEffect(() => {
    if (localStorage.getItem('penalty-points')) {
      localStorage.removeItem('penalty-points');
    }
      const interval = setInterval(() => getTime(leftSeconds >= 1 ? leftSeconds-- : 0), 1000);
      return () => clearInterval(interval); 
  }, []); 

  return (
    <div className="timer">
      <span>{hours}</span>
      <span>:</span>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
      {(hours === '00' && minutes === '00' && seconds === '00') && <ShowNotification/>}
    </div>
  );
};

export default Timer;
