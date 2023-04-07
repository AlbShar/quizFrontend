import { useState, useEffect, FC, useRef } from "react";
import Modal from "../../../UI/Modal/Modal";
import { StyledDivTimer, StyledButtonPause } from "./Timer.Styled";
import { useTranslation } from "react-i18next";
import getFullNumb from "../helpers/getFullNumb";
import { sendDbPenaltyPoints } from "../api/sendDbPenaltyPoints";
import { deadline } from "../../../variables/variables";
import { incrementQuantityPause } from "../../../helpers/incrementQuantityPause";
import { sendDbTimeLeft } from "../api/sendDbTimeLeft";

type TState = {
  isModal: boolean,
  isCounting: boolean,
  timeLeft: number,
  isTimeUp: boolean,
};



const Timer: FC = () => {
  const { t } = useTranslation();
  const [{isCounting, isModal, timeLeft, isTimeUp}, setState] = useState<TState>({
    isModal: false,
    isCounting: true,
    timeLeft: deadline,
    isTimeUp: false,
  });
  const timerRef = useRef<HTMLDivElement>(null);


  let hours: string = getFullNumb(Math.floor(timeLeft / 3600) % 60);
  let minutes: string = getFullNumb(Math.floor(timeLeft / 60) % 60);
  let seconds: string = getFullNumb(Math.floor(timeLeft % 60));
  const timer: string[] = [`${hours}:`, `${minutes}:`, seconds];
  const elementNumbersTimer = timer.map((time, index) => (
    <span key={index + 1}>{time}</span>
  ));

  const countingTime = () => {
    let updateTime = timeLeft >= 1 ? +timeLeft - 1 : 0;
    return {
      timeLeft: updateTime,
      isTimeUp: timeLeft ? false : true,
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
     const timerId = setTimeout(() => {
      startTimer();
    }, 1000);


    return () => {
      /* If I copy 'timerRef.current' to a variable inside the useEffect,
       the cleanup function doesn't run, when Timer unmountes */
      // eslint-disable-next-line 
      if (!timerRef.current) {
        const time = deadline - timeLeft;
        clearTimeout(timerId);
        sendDbTimeLeft(time);
      }
    };
    /* startTimer isn't dependency, it's function, 
    which decreases timeLeft state every second by 1*/
    // eslint-disable-next-line
  }, [timeLeft, isCounting]);


  useEffect(() => {
    if (isTimeUp) {
      setState(state => ({...state, isModal: true, isCounting: false}))
      sendDbPenaltyPoints();
    }
  }, [isTimeUp]);



  return (
    <StyledDivTimer ref={timerRef}>
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
