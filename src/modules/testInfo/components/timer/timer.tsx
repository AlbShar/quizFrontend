import { useState, useEffect, useRef, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ContextIdUser, ContextProfession } from 'components/context';
import { ModalPause } from 'UI/modalPause';
import { Portal } from 'components/portal';
import pause from 'assets/images/modules/testInfo/pause.svg';

import getFullNumb from '../../helpers/getFullNumb';
import { sendTimeToDB } from '../../api/sendTimeToDB';

import {
  StyledDivTimer,
  StyledButtonPause,
  StyledSpanTimer,
  StyledImg,
} from './timer.Styled';

const Timer = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.testInfo.components.timer',
  });
  const [isCounting, setIsCounting] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [time, setTime] = useState(0);
  const [idUser]: [string, (lang: string) => void] = useContext(ContextIdUser);
  const [profession] = useContext(ContextProfession);

  const timerRef = useRef<HTMLDivElement>(null);
  const hours: string = getFullNumb(Math.floor(time / 3600) % 60);
  const minutes: string = getFullNumb(Math.floor(time / 60) % 60);
  const seconds: string = getFullNumb(Math.floor(time % 60));
  const timer: string[] = [`${hours}:`, `${minutes}:`, seconds];

  const elementNumbersTimer = timer.map((time, index) => (
    <span key={index + 1}>{time}</span>
  ));
  const titleModal = t('title');
  const subtitleModal = t('subTitle');

  const stopTimer = () => {
    setIsCounting(false);
    setIsModal(true);
  };

  const restoreTimer = () => {
    setIsCounting(true);
    setIsModal(false);
  };

  useEffect(() => {
    const url = `${profession}/users/user${idUser}/userInfo`;

    const startTimer = () => {
      isCounting && setTime((time) => time + 1);
    };

    const timerId = setTimeout(() => {
      startTimer();
    }, 1000);

    return () => {
      clearTimeout(timerId);
      // eslint-disable-next-line
      if (!timerRef.current) {
        sendTimeToDB(time, url);
      }
    };
    // eslint-disable-next-line
  }, [time, isCounting]);

  return (
    <StyledDivTimer ref={timerRef}>
      <StyledButtonPause onClick={stopTimer} data-testid='btn-pause'>
        <StyledImg src={pause} alt='pause' />
        {t('pause')}
      </StyledButtonPause>
      <StyledSpanTimer>{elementNumbersTimer}</StyledSpanTimer>
      {isModal && (
        <Portal>
          <ModalPause
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
