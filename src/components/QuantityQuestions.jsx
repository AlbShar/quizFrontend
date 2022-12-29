import React, { useEffect } from "react";
import { insertThemeQuestionQuiz, insertTotalQuestionNumbQuiz } from "../index.js";
import { useTranslation } from "react-i18next";
import { StyledH1, StyledSpanThemeQuestion, StyledSpanQuestionQuantity } from "./styles/QuantityQuestions.Styled";


const QuantityQuestions = ({ currentQuestionNumb }) => {
  const { t } = useTranslation();

  useEffect(() => {
    insertTotalQuestionNumbQuiz("#totalQuestionQuantity");
    insertThemeQuestionQuiz(currentQuestionNumb, "#themeQuestion")
  }, [currentQuestionNumb]);
  return (
    <StyledH1 id="questionName">
      {t("Вопрос")} {currentQuestionNumb}
      <StyledSpanQuestionQuantity id="totalQuestionQuantity">0</StyledSpanQuestionQuantity>
      <StyledSpanThemeQuestion id="themeQuestion">0</StyledSpanThemeQuestion>
    </StyledH1>
  );
};

export default QuantityQuestions;
