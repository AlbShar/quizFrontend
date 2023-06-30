import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { sendDbTimeLeft } from '../api/sendDbTimeLeft';
import Modal from '../../../UI/Modal/Modal';
import getFullNumb from '../helpers/getFullNumb';
import Portal from '../../../components/Portal/Portal';
import pause from '../../../assets/images/pause.svg';

import {
  StyledDivTimer,
  StyledButtonPause,
  StyledSpanTimer,
} from './Timer.Styled';

const Timer = () => {
  const { t } = useTranslation();
  const [isCounting, setIsCounting] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const timerRef = useRef<HTMLDivElement>(null);
  const hours: string = getFullNumb(Math.floor(time / 3600) % 60);
  const minutes: string = getFullNumb(Math.floor(time / 60) % 60);
  const seconds: string = getFullNumb(Math.floor(time % 60));
  const timer: string[] = [`${hours}:`, `${minutes}:`, seconds];
  const elementNumbersTimer = timer.map((time, index) => (
    <span key={index + 1}>{time}</span>
  ));
  const titleModal = t('Заголовок1_пауза');
  const subtitleModal = t('Заголовок2_пауза');

  const stopTimer = () => {
    setIsCounting(false);
    setIsModal(true);
  };

  const restoreTimer = () => {
    setIsCounting(true);
    setIsModal(false);
  };

  useEffect(() => {
    const startTimer = () => {
      isCounting && setTime((time) => time + 1);
    };

    const timerId = setTimeout(() => {
      startTimer();
    }, 1000);

    return () => {
      clearTimeout(timerId);
      if (!timerRef.current) {
        sendDbTimeLeft(time);
      }
    };
  }, [time, isCounting]);



  return (
    <StyledDivTimer ref={timerRef}>
      <StyledButtonPause onClick={stopTimer}>
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
