import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import rightArrow from '../../../assets/images/rightArrow.svg';

import { StyledButton, StyledSpan } from './Buttons.Styled';

type ButtonNextProps = {
  onClickButtonHandler: (e: MouseEvent) => void;
  isBtnNextDisabled: boolean;
};

const ButtonNext = ({
  onClickButtonHandler,
  isBtnNextDisabled,
}: ButtonNextProps) : JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <StyledButton
        style={{ justifyContent: 'flex-end' }}
        onClick={onClickButtonHandler}
        disabled={isBtnNextDisabled}
      >
        <StyledSpan>{t('Принять')}</StyledSpan>
        <img src={rightArrow} alt='rightArrow' />
      </StyledButton>
    </>
  );
};

export default ButtonNext;
