import React, { useState, useEffect } from "react";
import Notification from "./Notification";
import { StyledDivTimer, StyledButtonPause } from "./styles/Timer.Styled";
import { useTranslation } from "react-i18next";

export const deadline = 7200; // seconds

const Timer = () => {
  const { t } = useTranslation();

  let [timeLeft, setTimeLeft] = useState(deadline);
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
      let isNotification = document.querySelector("#notification")
        ? getComputedStyle(document.querySelector("#notification")).display ===
          "block"
        : false;
      if (isNotification === false && isCounting === false) {
        setIsCounting(!isCounting);
      }
      isCounting && setTimeLeft(timeLeft >= 1 ? timeLeft-- : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, isCounting]);

  return (
    <StyledDivTimer>
      <span>
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </span>
      {hours === "00" && minutes === "00" && seconds === "00" && (
        <Notification
          title={t("Заголовок1_вышло_время")}
          subTitle={t("Заголовок2_вышло_время")}
        />
      )}
      {!isCounting && (
        <Notification
          title={t("Заголовок1_пауза")}
          subTitle={t("Заголовок2_пауза")}
        />
      )}
      <StyledButtonPause onClick={pauseTimer}>{t("Пауза")}</StyledButtonPause>
    </StyledDivTimer>
  );
};

export default Timer;
