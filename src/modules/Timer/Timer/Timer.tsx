import { useState, useEffect, FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { sendDbTimeLeft } from '../api/sendDbTimeLeft';
import { incrementQuantityPause } from '../../../helpers/incrementQuantityPause';
import Modal from '../../../UI/Modal/Modal';
import getFullNumb from '../helpers/getFullNumb';
import Portal from '../../../components/Portal/Portal';
import pause from "../../../assets/images/pause.svg"

import {
  StyledDivTimer,
  StyledButtonPause,
  StyledSpanTimer,
} from './Timer.Styled';

type TState = {
  isModal: boolean;
  isCounting: boolean;
  timeLeft: number;
};

const Timer: FC = () => {
  const { t } = useTranslation();
  const [{ isCounting, isModal, timeLeft }, setState] = useState<TState>({
    isModal: false,
    isCounting: true,
    timeLeft: 0,
  });
  const timerRef = useRef<HTMLDivElement>(null);

  const hours: string = getFullNumb(Math.floor(timeLeft / 3600) % 60);
  const minutes: string = getFullNumb(Math.floor(timeLeft / 60) % 60);
  const seconds: string = getFullNumb(Math.floor(timeLeft % 60));
  const timer: string[] = [`${hours}:`, `${minutes}:`, seconds];
  const elementNumbersTimer = timer.map((time, index) => (
    <span key={index + 1}>{time}</span>
  ));
  const titleModal = t('Заголовок1_пауза');
  const subtitleModal = t('Заголовок2_пауза');

  const stopTimer = () => {
    setState((state) => ({ ...state, isCounting: false, isModal: true }));
  };

  const restoreTimer = () => {
    setState((state) => ({ ...state, isCounting: true, isModal: false }));
  };

  const onClickButtonHandler = () => {
    stopTimer();
    incrementQuantityPause();
  };

  useEffect(() => {
    const startTimer = () => {
      isCounting && setState((state) => ({ ...state, timeLeft: timeLeft + 1 }));
    };

    const timerId = setTimeout(() => {
      startTimer();
    }, 1000);

    return () => {
      /* If I copy 'timerRef.current' to a variable inside the useEffect,
       the cleanup function doesn't run, when Timer unmountes */
      // eslint-disable-next-line
      sendDbTimeLeft(timeLeft);
      clearTimeout(timerId);
    };
  }, [timeLeft, isCounting]);

  return (
    <StyledDivTimer ref={timerRef}>
      <StyledButtonPause onClick={onClickButtonHandler}>
        {t('Пауза')}
        <img src={pause} alt='pause' />
      </StyledButtonPause>
      <StyledSpanTimer>{elementNumbersTimer}</StyledSpanTimer>
      {isModal && (
        <Portal>
          <Modal
            title={titleModal}
            subTitle={subtitleModal}
            onClickHandler={restoreTimer}
          />
        </Portal>
      )}
    </StyledDivTimer>
  );
};

export default Timer;
