import { useState, useEffect, FC } from "react";
import Modal from "../../../UI/Modal/Modal";
import { StyledDivTimer, StyledButtonPause } from "./Timer.Styled";
import { useTranslation } from "react-i18next";
import getFullNumb from "../helpers/getFullNumb";
import isModal from "../helpers/isModal";
import { setPenaltyPoints } from "../api/setPenaltyPoints";
import { deadline } from "../../../variables/variables";
import { incrementQuantityPause } from "../../../helpers/incrementQuantityPause";


const Timer: FC = () => {
  const { t } = useTranslation();

  let [timeLeft, setTimeLeft] = useState<number>(deadline);
  let hours: string = getFullNumb(Math.floor(timeLeft / 3600) % 60);
  let minutes: string = getFullNumb(Math.floor(timeLeft / 60) % 60);
  let seconds: string = getFullNumb(Math.floor(timeLeft % 60));
  const [isCounting, setIsCounting] = useState<boolean>(true);
  const timer: string[] = [`${hours}:`, `${minutes}:`, seconds];
  const elementNumbersTimer = timer.map((time, index) => (
    <span key={index + 1}>{time}</span>
  ));
  const isTimeUp: boolean = hours === "00" && minutes === "00" && seconds === "00";

  const onClickButtonHandler = () => {
    setIsCounting((isCounting) => !isCounting);
    incrementQuantityPause();
  };


  useEffect(() => {
    if (isTimeUp) {
      setPenaltyPoints();
    }

    const interval = setInterval(() => {
      if (isModal("#notification") === false && isCounting === false) {
        setIsCounting((isCounting) => !isCounting);
      }
      isCounting && setTimeLeft(timeLeft >= 1 ? +timeLeft - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, isCounting]);

  return (
    <StyledDivTimer>
      <span>{elementNumbersTimer}</span>
      {isTimeUp && (
        <Modal
          title={t("Заголовок1_вышло_время")}
          subTitle={t("Заголовок2_вышло_время")}
        />
      )}
      {!isCounting && (
        <Modal title={t("Заголовок1_пауза")} subTitle={t("Заголовок2_пауза")} />
      )}
      <StyledButtonPause
        onClick={onClickButtonHandler}
      >
        {t("Пауза")}
      </StyledButtonPause>
    </StyledDivTimer>
  );
};

export { deadline };
export default Timer;
