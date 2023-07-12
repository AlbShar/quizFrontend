import { useState, useEffect, useRef, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ContextIdUser } from '../../../../components/Context';
import { sendTimeToDB } from '../../api/sendTimeToDB';
import Modal from '../../../../UI/Modal/Modal';
import getFullNumb from '../../helpers/getFullNumb';
import Portal from '../../../../components/Portal/Portal';
import pause from '../../../../assets/images/pause.svg';

import {
  StyledDivTimer,
  StyledButtonPause,
  StyledSpanTimer,
  StyledImg,
} from './Timer.Styled';

const Timer = () => {
  const { t } = useTranslation();
  const [isCounting, setIsCounting] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [idUser]: [string, (lang: string) => void] = useContext(ContextIdUser);

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
    const url = `users/user${idUser}/userInfo`;

    const startTimer = () => {
      isCounting && setTime((time) => time + 1);
    };

    const timerId = setTimeout(() => {
      startTimer();
    }, 1000);

    return () => {
      clearTimeout(timerId);
      if (!timerRef.current) {
        sendTimeToDB(time, url);
      }
    };
  }, [time, isCounting]);


  return (
    <StyledDivTimer ref={timerRef}>
      <StyledButtonPause onClick={stopTimer}>
        <StyledImg src={pause} alt='pause' />
        {t('Пауза')}
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