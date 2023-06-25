import { FC, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import rightArrow from '../../../../assets/images/rightArrow.svg';

import { StyledButtonQuiz } from './ButtonQuiz.Styled';

type TButtonsQuiz = {
  onClickButtonHandler: (e: MouseEvent) => void;
  isDisabled: boolean
};

const ButtonQuiz: FC<TButtonsQuiz> = ({ onClickButtonHandler, isDisabled }) => {
  const { t } = useTranslation();

  return (
    <>
      <StyledButtonQuiz onClick={onClickButtonHandler} disabled={isDisabled}>
        <div>{t('Принять')}</div>
        <img src={rightArrow} alt='rightArrow' />
      </StyledButtonQuiz>
    </>
  );
};

export default ButtonQuiz;
