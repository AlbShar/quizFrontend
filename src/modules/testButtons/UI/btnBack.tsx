import { useContext, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import arrowleft from 'assets/images/modules/testButtons/arrowleft.svg';
import {
  ContextCurrentQuestionNumb,
  ContextIdUser,
  ContextProfession,
} from 'components/context';

import { highlightPreviousAnswer } from '../helpers/highlightPreviousAnswer';

import { StyledButton } from './buttons.Styled';

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
  const [profession] = useContext(ContextProfession);
  const [idUser]: [string, (lang: string) => void] = useContext(ContextIdUser);

  const onClickBackBtn = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentQuestionNumb(currentQuestionNumb - 1);
    setIsBtnNextDisabled(false);
    setIsBtnBackDisabled(true);
    highlightPreviousAnswer({
      idUser: idUser,
      currentQuestionNumb,
      selectorAnswers: '#answersAll ul li',
      profession,
    });
  };

  return (
    <StyledButton
      id='btnBack'
      onClick={onClickBackBtn}
      disabled={isBtnBackDisabled}
      typeBtn='back'
    >
      <img src={arrowleft} alt='Кнопка назад' style={{ color: 'red' }} />
      {t('text')}
    </StyledButton>
  );
};

export default BtnBack;
