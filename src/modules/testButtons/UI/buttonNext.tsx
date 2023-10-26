import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import rightArrow from 'assets/images/rightArrow.svg';

import { StyledButton } from './buttons.Styled';

type ButtonNextProps = {
  onClickButtonHandler: (e: MouseEvent) => void;
  isBtnNextDisabled: boolean;
};

const ButtonNext = ({
  onClickButtonHandler,
  isBtnNextDisabled,
}: ButtonNextProps): JSX.Element => {

  const { t } = useTranslation('', {
    keyPrefix: 'modules.testButtons.UI.btnNext',
  });
  

  return (
    <StyledButton
      onClick={onClickButtonHandler}
      disabled={isBtnNextDisabled}
      typeBtn='next'
    >
      {t('text')}
      <img src={rightArrow} alt='rightArrow' />
    </StyledButton>
  );
};

export default ButtonNext;
