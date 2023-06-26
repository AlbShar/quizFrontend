import { FC, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import rightArrow from '../../../assets/images/rightArrow.svg';

// import { StyledButtonBack, StyledSpan } from './BtnBack.Styled';
import { StyledButton, StyledSpan } from './Buttons.Styled';

type TButtonsQuiz = {
  onClickButtonHandler: (e: MouseEvent) => void;
  isDisabled: boolean
};

const ButtonNext: FC<TButtonsQuiz> = ({ onClickButtonHandler, isDisabled }) => {
  const { t } = useTranslation();

  return (
    <>
      <StyledButton onClick={onClickButtonHandler} disabled={isDisabled}>
        <StyledSpan>{t('Принять')}</StyledSpan>
        <img src={rightArrow} alt='rightArrow' />
      </StyledButton>
    </>
  );
};

export default ButtonNext;
