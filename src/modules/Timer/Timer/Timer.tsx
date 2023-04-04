import { useState, useEffect, FC } from "react";
import Modal from "../../../UI/Modal/Modal";
import { StyledDivTimer, StyledButtonPause } from "./Timer.Styled";
import { useTranslation } from "react-i18next";
import getFullNumb from "../helpers/getFullNumb";
import { setPenaltyPoints } from "../api/setPenaltyPoints";
import { deadline } from "../../../variables/variables";
import { incrementQuantityPause } from "../../../helpers/incrementQuantityPause";
import { setTimeToPassQuiz } from "../../../helpers/setTimeToPassQuiz";

type TState = {
  isModal: boolean,
  isCounting: boolean,
  timeLeft: number,
  isTimeUp: boolean,
};

type TTimer = {
  isTestFinished: boolean
}
const Timer: FC<TTimer> = ({isTestFinished}) => {
  const { t } = useTranslation();
  const [{isCounting, isModal, timeLeft, isTimeUp}, setState] = useState<TState>({
    isModal: false,
    isCounting: true,
    timeLeft: deadline,
    isTimeUp: false,
  });

  let hours: string = getFullNumb(Math.floor(timeLeft / 3600) % 60);
  let minutes: string = getFullNumb(Math.floor(timeLeft / 60) % 60);
  let seconds: string = getFullNumb(Math.floor(timeLeft % 60));
  const timer: string[] = [`${hours}:`, `${minutes}:`, seconds];
  const elementNumbersTimer = timer.map((time, index) => (
    <span key={index + 1}>{time}</span>
  ));

  useEffect(() => {
    console.log('start')

    return () => {
      console.log('end')
    };
  }, [isTestFinished]);

  const countingTime = () => {
    return {
      timeLeft: timeLeft >= 1 ? +timeLeft - 1 : 0,
      isTimeUp: timeLeft ? false : true
    }
  };

  const startTimer = () => {
    isCounting && setState(state => ({...state, ...countingTime()}));
  };

  const stopTimer = () => {
    setState(state => ({...state, isCounting: false, isModal: true}))
  };

  const restoreTimer = () => {
    setState(state => ({...state, isCounting: true, isModal: false}))
  };

  const closeModal = () => {
    setState(state => ({...state, isModal: false}))
  }

  const onClickButtonHandler = () => {
    stopTimer();
    incrementQuantityPause();
  };


  useEffect(() => {
    if (isTimeUp) {
      setState(state => ({...state, isModal: true, isCounting: false}))
      setPenaltyPoints();
    }

    const timerId = setTimeout(() => {
      if (isCounting) {
        clearTimeout(timerId)
      }
      setTimeout(startTimer, 1000);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, isCounting, isTimeUp]);



  return (
    <StyledDivTimer>
      <span>{elementNumbersTimer}</span>
      {(isModal) && (
        <Modal
          title={t("Заголовок1_пауза")}
          subTitle={t("Заголовок2_пауза")}
          onClickHandler={restoreTimer}
        />
      )}
      {(isTimeUp && isModal) && (
        <Modal
          title={t("Заголовок1_вышло_время")}
          subTitle={t("Заголовок2_вышло_время")}
          onClickHandler={closeModal}
        />
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
