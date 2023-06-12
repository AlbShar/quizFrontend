import { useState, useEffect, FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { sendDbTimeLeft } from '../api/sendDbTimeLeft';
import { incrementQuantityPause } from '../../../helpers/incrementQuantityPause';
import Modal from '../../../UI/Modal/Modal';
import getFullNumb from '../helpers/getFullNumb';
import { sendDbPenaltyPoints } from '../api/sendDbPenaltyPoints';
import { deadline } from '../../../variables/variables';
import Portal from '../../../components/Portal/Portal';

import { StyledDivTimer, StyledButtonPause } from './Timer.Styled';

type TState = {
  isModal: boolean;
  isCounting: boolean;
  timeLeft: number;
  isTimeUp: boolean;
};

const Timer: FC = () => {
  const { t } = useTranslation();
  const [{ isCounting, isModal, timeLeft, isTimeUp }, setState] =
    useState<TState>({
      isModal: false,
      isCounting: true,
      timeLeft: deadline,
      isTimeUp: false,
    });
  const timerRef = useRef<HTMLDivElement>(null);

  const hours: string = getFullNumb(Math.floor(timeLeft / 3600) % 60);
  const minutes: string = getFullNumb(Math.floor(timeLeft / 60) % 60);
  const seconds: string = getFullNumb(Math.floor(timeLeft % 60));
  const timer: string[] = [`${hours}:`, `${minutes}:`, seconds];
  const elementNumbersTimer = timer.map((time, index) => (
    <span key={index + 1}>{time}</span>
  ));
  const titleModal = isTimeUp
    ? t('Заголовок1_вышло_время')
    : t('Заголовок1_пауза');
  const subtitleModal = isTimeUp
    ? t('Заголовок2_вышло_время')
    : t('Заголовок2_пауза');

  const stopTimer = () => {
    setState((state) => ({ ...state, isCounting: false, isModal: true }));
  };

  const restoreTimer = () => {
    setState((state) => ({ ...state, isCounting: true, isModal: false }));
  };

  const closeModal = () => {
    setState((state) => ({ ...state, isModal: false }));
  };

  const onClickHandlerModal = isTimeUp ? closeModal : restoreTimer;

  const onClickButtonHandler = () => {
    stopTimer();
    incrementQuantityPause();
  };

  useEffect(() => {
    const countingTime = () => {
      const updateTime = timeLeft >= 1 ? +timeLeft - 1 : 0;
      return {
        timeLeft: updateTime,
        isTimeUp: timeLeft ? false : true,
      };
    };

    const startTimer = () => {
      isCounting && setState((state) => ({ ...state, ...countingTime() }));
    };

    const timerId = setTimeout(() => {
      startTimer();
    }, 1000);

    return () => {
      /* If I copy 'timerRef.current' to a variable inside the useEffect,
       the cleanup function doesn't run, when Timer unmountes */
      // eslint-disable-next-line
      if (!timerRef.current) {
        const time = deadline - timeLeft;
        sendDbTimeLeft(time);
      }
      clearTimeout(timerId);
    };
  }, [timeLeft, isCounting]);

  useEffect(() => {
    if (isTimeUp) {
      setState((state) => ({ ...state, isModal: true, isCounting: false }));
      sendDbPenaltyPoints();
    }
  }, [isTimeUp]);

  return (
    <StyledDivTimer ref={timerRef}>
      <span>{elementNumbersTimer}</span>
      {isModal && (
        <Portal>
          <Modal
            title={titleModal}
            subTitle={subtitleModal}
            onClickHandler={onClickHandlerModal}
          />
        </Portal>
      )}
      <StyledButtonPause onClick={onClickButtonHandler}>
        {t('Пауза')}
      </StyledButtonPause>
    </StyledDivTimer>
  );
};

export { deadline };
export default Timer;
