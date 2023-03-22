import { useEffect, useContext, FC } from "react";
import { useTranslation } from "react-i18next";
import { StyledH1, StyledSpanThemeQuestion, StyledSpanQuestionQuantity } from "./QuantityThemeQuestions.Styled";
import {insertTotalQuestionNumbQuiz} from "../helpers/insertTotalQuestionNumbQuiz";
import {insertThemeQuestionQuiz} from "../helpers/insertThemeQuestionQuiz";
import {ContextQuestionNumb} from "../../../components/Context";


const QuantityThemeQuestions: FC = () => {
  const { t } = useTranslation();
  const contextValue: [number, (numb: number) => void] | null = useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;
  

  useEffect(() => {
    insertTotalQuestionNumbQuiz("#totalQuestionQuantity");
    insertThemeQuestionQuiz({currentQuestionNumb, selector: "#themeQuestion"})
  }, [currentQuestionNumb]);
  return (
    <StyledH1 id="questionName">
      {t("Вопрос")} {currentQuestionNumb}
      <StyledSpanQuestionQuantity id="totalQuestionQuantity" tabIndex={0}>0</StyledSpanQuestionQuantity>
      <StyledSpanThemeQuestion id="themeQuestion">0</StyledSpanThemeQuestion>
    </StyledH1>
  );
};

export default QuantityThemeQuestions;
