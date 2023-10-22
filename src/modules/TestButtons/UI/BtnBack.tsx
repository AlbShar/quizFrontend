import { useContext, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ContextCurrentQuestionNumb,
  ContextIdUser,
} from '../../../components/Context';
import { highlightPreviousAnswer } from '../helpers/highlightPreviousAnswer';
import leftArrow from '../../../assets/images/leftArrow.svg';

import { StyledButton } from './Buttons.Styled';

type BtnBackProps = {
  setIsBtnNextDisabled: (item: boolean) => void;
  setIsBtnBackDisabled: (item: boolean) => void;
  isBtnBackDisabled: boolean;
};

const BtnBack = ({
  setIsBtnNextDisabled,
  isBtnBackDisabled,
  setIsBtnBackDisabled,
}: BtnBackProps): JSX.Element => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.testButtons.UI.btnBack',
  });
  //eslint-disable-next-line
  let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [idUser]: [string, (lang: string) => void] = useContext(ContextIdUser);

  const onClickBackBtn = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentQuestionNumb(currentQuestionNumb - 1);
    setIsBtnNextDisabled(false);
    setIsBtnBackDisabled(true);
    highlightPreviousAnswer({
      idUser: idUser,
      currentQuestionNumb,
      selectorAnswers: '#answersAll ul li',
    });
  };

  return (
    <StyledButton
      id='btnBack'
      onClick={onClickBackBtn}
      disabled={isBtnBackDisabled}
      typeBtn='back'
    >
      <img src={leftArrow} alt='Кнопка назад' style={{color: 'red'}}/>
      {t('text')}
    </StyledButton>
  );
};

export default BtnBack;
