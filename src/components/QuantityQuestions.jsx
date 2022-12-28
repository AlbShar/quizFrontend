import React, { useEffect } from "react";
import { insertThemeQuestionQuiz, insertTotalQuestionNumbQuiz } from "../index.js";
import { StyledH1, StyledSpanThemeQuestion, StyledSpanQuestionQuantity } from "./styles/QuantityQuestions.Styled";


const QuantityQuestions = ({ currentQuestionNumb }) => {
  useEffect(() => {
    insertTotalQuestionNumbQuiz("#totalQuestionQuantity");
    insertThemeQuestionQuiz(currentQuestionNumb, "#themeQuestion")
  }, [currentQuestionNumb]);
  return (
    <StyledH1 id="questionName">
      Вопрос {currentQuestionNumb}
      <StyledSpanQuestionQuantity id="totalQuestionQuantity">0</StyledSpanQuestionQuantity>
      <StyledSpanThemeQuestion id="themeQuestion">0</StyledSpanThemeQuestion>
    </StyledH1>
  );
};

export default QuantityQuestions;
