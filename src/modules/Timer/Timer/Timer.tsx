import { useState, useEffect, FC } from "react";
import Modal from "../../../UI/Modal/Modal";
import { StyledDivTimer, StyledButtonPause } from "./Timer.Styled";
import { useTranslation } from "react-i18next";
import getFullNumb from "../helpers/getFullNumb";
import removePenaltyPoints from "../helpers/removePenaltyPoints";
import isModal from "../helpers/isModal";

 const deadline = 7500; // seconds

 const Timer: FC = () => {
  const { t } = useTranslation();

  let [timeLeft, setTimeLeft] = useState<number>(deadline);
  let hours: string = getFullNumb(Math.floor(timeLeft / 3600) % 60);
  let minutes: string = getFullNumb(Math.floor(timeLeft / 60) % 60);
  let seconds: string = getFullNumb(Math.floor(timeLeft % 60));
  const [isCounting, setIsCounting] = useState<boolean>(true);
  const timer: string[] = [`${hours}:`, `${minutes}:`, seconds];
  const elementNumbersTimer = timer.map((time, index) => <span key={index+1}>{time}</span>);
  const isTimeUp = hours === "00" && minutes === "00" && seconds === "00";

  useEffect(() => {
    removePenaltyPoints();
    const interval = setInterval(() => {
      if (isModal("#notification") === false && isCounting === false) {
        setIsCounting(isCounting => !isCounting);
      }
      isCounting && setTimeLeft(timeLeft >= 1 ? +timeLeft - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
}, [timeLeft, isCounting]);

  return (
    <StyledDivTimer>
      <span>
        {elementNumbersTimer}
      </span>
      { isTimeUp && (
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
      <StyledButtonPause onClick={() => setIsCounting(isCounting => !isCounting)}>{t("Пауза")}</StyledButtonPause>
    </StyledDivTimer>
  );
};

export {deadline};
export default Timer;