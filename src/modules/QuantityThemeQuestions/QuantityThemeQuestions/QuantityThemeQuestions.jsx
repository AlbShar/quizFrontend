import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyledH1, StyledSpanThemeQuestion, StyledSpanQuestionQuantity } from "./QuantityThemeQuestions.Styled";
import {insertTotalQuestionNumbQuiz} from "../helpers/insertTotalQuestionNumbQuiz";
import {insertThemeQuestionQuiz} from "../helpers/insertThemeQuestionQuiz";


const QuantityThemeQuestions = ({ currentQuestionNumb }) => {
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

export default QuantityThemeQuestions;
