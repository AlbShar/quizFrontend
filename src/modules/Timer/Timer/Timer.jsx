import React, { useState, useEffect } from "react";
import Modal from "../../../UI/Modal/Modal";
import { StyledDivTimer, StyledButtonPause } from "./Timer.Styled";
import { useTranslation } from "react-i18next";
import getFullNumb from "../helpers/getFullNumb";
import removePenaltyPoints from "../helpers/removePenaltyPoints";
import pauseTimer from "../helpers/pauseTimer";
import isModal from "../helpers/isModal";

 const deadline = 7500; // seconds

 const Timer = () => {
  const { t } = useTranslation();

  let [timeLeft, setTimeLeft] = useState(deadline);
  let hours = getFullNumb(Math.floor(timeLeft / 3600) % 60);
  let minutes = getFullNumb(Math.floor(timeLeft / 60) % 60);
  let seconds = getFullNumb(Math.floor(timeLeft % 60));
  const [isCounting, setIsCounting] = useState(true);
  const timer = [`${hours}:`, `${minutes}:`, seconds];
  useEffect(() => {
    removePenaltyPoints();
    const interval = setInterval(() => {
      if (isModal("#notification") === false && isCounting === false) {
        pauseTimer(isCounting, setIsCounting);
      }
      isCounting && setTimeLeft(timeLeft >= 1 ? timeLeft-- : 0);
    }, 1000);
    return () => clearInterval(interval);
}, [timeLeft, isCounting]);

  return (
    <StyledDivTimer>
      <span>
        {timer.map((time, index) => <span key={index+1}>{time}</span>)}
      </span>
      {hours === "00" && minutes === "00" && seconds === "00" && (
        <Modal
          title={t("Заголовок1_вышло_время")}
          subTitle={t("Заголовок2_вышло_время")}
        />
      )}
      {!isCounting && (
        <Modal
          title={t("Заголовок1_пауза")}
          subTitle={t("Заголовок2_пауза")}
        />
      )}
      <StyledButtonPause onClick={() => pauseTimer(isCounting, setIsCounting)}>{t("Пауза")}</StyledButtonPause>
    </StyledDivTimer>
  );
};

export {deadline};
export default Timer;