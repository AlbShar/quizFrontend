import React, { useState, useEffect } from "react";
import Notification from "./Notification";
import { StyledDivTimer } from "./styles/Timer.Styled";

export const deadline = 7200; // seconds

const Timer = () => {
  let [timeLeft, setTimeLeft] = useState(deadline)
  const getFullNumb = (numb) => {
    return `${numb}`.length === 1 ? `0${numb}` : numb;
  };

  let hours = getFullNumb(Math.floor(timeLeft / 3600) % 60);
  let minutes = getFullNumb(Math.floor(timeLeft / 60) % 60);
  let seconds = getFullNumb(Math.floor(timeLeft % 60));
  const [isCounting, setIsCounting] = useState(true);

  const pauseTimer = () => {
    setIsCounting(!isCounting);
  };

  useEffect(() => {
    if (localStorage.getItem("penalty-points")) {
      localStorage.removeItem("penalty-points");
    }
    const interval = setInterval(() => {
      let isNotification = document.querySelector('#notification') ? true : false;
        (isCounting) && setTimeLeft(timeLeft >= 1 ? timeLeft-- : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, isCounting]);

  return (
    <StyledDivTimer>
      <span>{hours}</span>
      <span>:</span>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
      {hours === "00" && minutes === "00" && seconds === "00" && (
        <Notification
          title="К сожалению, Ваше время вышло! 😔"
          subTitle="Продолжайте решать тест дальше. В связи с тем, что время закончилось из Вашего результата вычтется 3 балла."
        />
      )}
      {!isCounting && (
        <Notification
          title="Выполнение теста приостановлено"
          subTitle="Вы можете покинуть эту страницу и продолжить тест в другое время. Ваш прогресс будет сохранен."
          isCounting={isCounting} setIsCounting={setIsCounting}
        />
      )}
      <button onClick={pauseTimer}>Приостановить тест</button>
    </StyledDivTimer>
  );
};

export default Timer;
