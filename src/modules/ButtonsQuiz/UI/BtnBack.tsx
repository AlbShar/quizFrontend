import { useContext, MouseEvent, FC } from 'react';

import { ContextQuestionNumb } from '../../../components/Context';
import { getIdUser } from '../../../helpers/getIdUser';
import { highlightPreviousAnswer } from '../helpers/highlightPreviousAnswer';
import leftArrow from "../../../assets/images/leftArrow.svg";


// import { StyledButtonBack, StyledSpan } from './BtnBack.Styled';
import { StyledButton, StyledSpan } from './Buttons.Styled';


type TBtnBack = {
  showButtonAccept: () => void;
};
const BtnBack: FC<TBtnBack> = ({ showButtonAccept }) => {

  let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(
    ContextQuestionNumb,
    //eslint-disable-next-line
  ) || [1, () => {}];

  const onClickBackBtn = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentQuestionNumb(--currentQuestionNumb);
    showButtonAccept();
    highlightPreviousAnswer({
      idUser: getIdUser('idUser'),
      currentQuestionNumb,
      selectorAnswers: '#answersAll ul li',
    });
    e.currentTarget.style.display = 'none';
  };

  return (
    <>
      {
        <StyledButton id='btnBack' onClick={onClickBackBtn} disabled={currentQuestionNumb === 1}>
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
