import {useContext, MouseEvent} from 'react';
import {
    StyledButtonBack,
    StyledImg,
    StyledSpan} from "./BtnBack.Styled";
import {ContextQuestionNumb} from "../../../../components/Context";
import { getIdUser } from '../../../../helpers/getIdUser';
import { highlightPreviousAnswer } from '../../helpers/highlightPreviousAnswer';

const arrowleft =  require("../../icons/arrowleft.png");

const BtnBack = () => {
    
    let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(ContextQuestionNumb) || [1, () => {}];
    const onClickBackBtn = (e: MouseEvent<HTMLButtonElement>) => {
      setCurrentQuestionNumb(--currentQuestionNumb);
      highlightPreviousAnswer(
        {idUser: getIdUser("idUser"),
        currentQuestionNumb,
        selectorAnswers: "#answersAll ul li"}
      );
      e.currentTarget.style.display = 'none';

    };
    return (
        <>
        {!(currentQuestionNumb === 1) && (
          <StyledButtonBack id='btnBack'
            onClick={onClickBackBtn}
          >
            <StyledImg src={arrowleft} alt="Кнопка назад" />
            <StyledSpan>Назад</StyledSpan>
          </StyledButtonBack>
        )}
      </>
    );
};

export default BtnBack;