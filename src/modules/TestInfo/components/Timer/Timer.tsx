import { useState, useEffect, useRef, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { getValueFromLocalStorage } from 'helpers/getValueFromLocalStorage';
import { ContextIdUser } from 'components/context';
import {Modal} from 'UI/Modal/Modal';
import {Portal} from 'components/portal';
import pause from 'assets/images/pause.svg';

import getFullNumb from '../../helpers/getFullNumb';
import { sendTimeToDB } from '../../api/sendTimeToDB';

import {
  StyledDivTimer,
  StyledButtonPause,
  StyledSpanTimer,
  StyledImg,
} from './Timer.Styled';

const Timer = () => {
  const { t } = useTranslation();
  const [isCounting, setIsCounting] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [time, setTime] = useState(0);
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
    const profession = getValueFromLocalStorage('profession');
    const url = `${profession}/users/user${idUser}/userInfo`;

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
      <StyledButtonPause onClick={stopTimer} data-testid='btn-pause'>
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
