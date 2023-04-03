import { useState, useEffect, FC } from "react";
import Modal from "../../../UI/Modal/Modal";
import { StyledDivTimer, StyledButtonPause } from "./Timer.Styled";
import { useTranslation } from "react-i18next";
import getFullNumb from "../helpers/getFullNumb";
import isModal from "../helpers/isModal";
import { setPenaltyPoints } from "../api/setPenaltyPoints";
import { deadline } from "../../../variables/variables";
import { incrementQuantityPause } from "../../../helpers/incrementQuantityPause";

type TState = {
  isModal: boolean,
  isCounting: boolean,
  timeLeft: number,
  isTimeUp: boolean
};
const Timer: FC = () => {
  const { t } = useTranslation();

  const [state, setState] = useState<TState>({
    isModal: false,
    isCounting: true,
    timeLeft: deadline,
    isTimeUp: false
  });

  let hours: string = getFullNumb(Math.floor(state.timeLeft / 3600) % 60);
  let minutes: string = getFullNumb(Math.floor(state.timeLeft / 60) % 60);
  let seconds: string = getFullNumb(Math.floor(state.timeLeft % 60));
  const timer: string[] = [`${hours}:`, `${minutes}:`, seconds];
  const elementNumbersTimer = timer.map((time, index) => (
    <span key={index + 1}>{time}</span>
  ));

  const countingTime = () => {
    return {
      timeLeft: state.timeLeft >= 1 ? +state.timeLeft - 1 : 0,
      isTimeUp: state.timeLeft ? false : true
    }
  };

  const startTimer = () => {
    state.isCounting && setState(state => ({...state, ...countingTime()}));
  };

  const stopTimer = () => {
    setState(state => ({...state, isCounting: false, isModal: true}))
  };

  const stopPause = () => {
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

    if (state.isTimeUp) {
      setState(state => ({...state, isModal: true, isCounting: false}))
      setPenaltyPoints();
    }

    const timerId = setTimeout(() => {
      if (state.isCounting) {
        clearTimeout(timerId)
      }
      setTimeout(startTimer, 1000);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [state.timeLeft, state.isCounting, state.isTimeUp]);

  return (
    <StyledDivTimer>
      <span>{elementNumbersTimer}</span>
      {(state.isModal) && (
        <Modal
          title={t("Заголовок1_вышло_время")}
          subTitle={t("Заголовок2_вышло_время")}
          onClickHandler={stopPause}
        />
      )}
      {(state.isTimeUp && state.isModal) && (
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
