import React, {useContext} from 'react';
import {
    StyledButtonBack,
    StyledImg,
    StyledSpan} from "./BtnBack.Styled";
import {ContextQuestionNumb} from "../../../../components/Context";
import arrowleft from "../../icons/arrowleft.png";
import { getIdUser } from '../../helpers/getIdUser';
import { highlightPreviousAnswer } from '../../helpers/highlightPreviousAnswer';


const BtnBack = () => {
    let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(ContextQuestionNumb);

    return (
        <>
        {!(currentQuestionNumb === 1) && (
          <StyledButtonBack
            id="BtnBack"
            onClick={() => {
              setCurrentQuestionNumb(--currentQuestionNumb);
              highlightPreviousAnswer(
                getIdUser(),
                currentQuestionNumb,
                "#answersAll ul li"
              );
            }}
          >
            <StyledImg src={arrowleft} alt="Кнопка назад" />
            <StyledSpan>Назад</StyledSpan>
          </StyledButtonBack>
        )}
      </>
    );
};

export default BtnBack;