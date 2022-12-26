import React, { useEffect } from "react";
import { getTotalQuestionsNumb, getThemeQuestion } from "../index.js";
import { StyledH1, StyledSpanThemeQuestion, StyledSpanQuestionQuantity } from "./styles/QuantityQuestions.Styled";


const QuantityQuestions = ({ currentQuestionNumb }) => {
  useEffect(() => {
    getTotalQuestionsNumb().then((totalQuestionsNumb) => {
      document.querySelector("#totalQuestionQuantity").textContent = totalQuestionsNumb;
    });
    getThemeQuestion(currentQuestionNumb).then(theme => {
      document.querySelector("#themeQuestion").textContent = theme;
    })
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
