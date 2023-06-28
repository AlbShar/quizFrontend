import { useContext, MouseEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ContextCurrentQuestionNumb } from '../../../components/Context';
import { getIdUser } from '../../../helpers/getIdUser';
import { highlightPreviousAnswer } from '../helpers/highlightPreviousAnswer';
import leftArrow from '../../../assets/images/leftArrow.svg';

import { StyledButton, StyledSpan } from './Buttons.Styled';

type TBtnBack = {
  setIsBtnNextDisabled: (item: boolean) => void;
  setIsBtnBackDisabled: (item: boolean) => void;
  isBtnBackDisabled: boolean;
};
const BtnBack: FC<TBtnBack> = ({
  setIsBtnNextDisabled,
  isBtnBackDisabled,
  setIsBtnBackDisabled,
}) => {
  const { t } = useTranslation();
  //eslint-disable-next-line
  let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextCurrentQuestionNumb
  );

  const onClickBackBtn = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentQuestionNumb(currentQuestionNumb - 1);
    setIsBtnNextDisabled(false);
    setIsBtnBackDisabled(true);
    highlightPreviousAnswer({
      idUser: getIdUser('idUser'),
      currentQuestionNumb,
      selectorAnswers: '#answersAll ul li',
    });
  };

  return (
    <>
      {
        <StyledButton
          style={{ justifyContent: 'flex-start' }}
          id='btnBack'
          onClick={onClickBackBtn}
          disabled={isBtnBackDisabled}
        >
          <img src={leftArrow} alt='Кнопка назад' />
          <StyledSpan>{t('назад')}</StyledSpan>
        </StyledButton>
      }
    </>
  );
};

export default BtnBack;
