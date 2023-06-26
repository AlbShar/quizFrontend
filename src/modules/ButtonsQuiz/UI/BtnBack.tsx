import { useContext, MouseEvent, FC, useState } from 'react';

import { ContextQuestionNumb } from '../../../components/Context';
import { getIdUser } from '../../../helpers/getIdUser';
import { highlightPreviousAnswer } from '../helpers/highlightPreviousAnswer';
import leftArrow from "../../../assets/images/leftArrow.svg";


// import { StyledButtonBack, StyledSpan } from './BtnBack.Styled';
import { StyledButton, StyledSpan } from './Buttons.Styled';


type TBtnBack = {
  setIsBtnNextDisabled: (item: boolean) => void;
  setIsBtnBackDisabled: (item: boolean) => void;
  isBtnBackDisabled: boolean;
};
const BtnBack: FC<TBtnBack> = ({ setIsBtnNextDisabled,isBtnBackDisabled, setIsBtnBackDisabled }) => {

  let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextQuestionNumb,
    //eslint-disable-next-line
  ) || [1, () => {}];


  const onClickBackBtn = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentQuestionNumb(--currentQuestionNumb);
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
        <StyledButton id='btnBack' onClick={onClickBackBtn} disabled={isBtnBackDisabled}>
          <img
            src={leftArrow}
            alt='Кнопка назад'
          />
          <StyledSpan>Назад</StyledSpan>
        </StyledButton>
      }
    </>
  );
};

export default BtnBack;
