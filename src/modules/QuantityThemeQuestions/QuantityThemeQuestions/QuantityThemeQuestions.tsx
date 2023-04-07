import { useEffect, useContext, FC, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  StyledH1,
  StyledSpanThemeQuestion,
  StyledSpanQuestionQuantity,
} from "./QuantityThemeQuestions.Styled";
import { ContextQuestionNumb } from "../../../components/Context";
import Spinner from "../../../UI/Spinner/Spinner";
import  {getThemeQuestion}  from "../api/getThemeQuestion";
import { getTotalQuestionsNumb } from "../../../api/getTotalQuestionsNumb";

type TState = {
  loading: boolean;
  questionTheme: string | null;
  totalQuestionNumber: number;
};
const QuantityThemeQuestions: FC = () => {
  const { t } = useTranslation();
  const contextValue: [number, (numb: number) => void] | null =
    useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;

  const [state, setState] = useState<TState>({
    loading: true,
    questionTheme: null,
    totalQuestionNumber: 0,
  });
  const view = () => {
    return (
      <StyledH1 id="questionName">
        {t("Вопрос")} {currentQuestionNumb}
        <StyledSpanQuestionQuantity id="totalQuestionQuantity" tabIndex={0}>
          {`/ ${state.totalQuestionNumber}`}
        </StyledSpanQuestionQuantity>
        <StyledSpanThemeQuestion id="themeQuestion">
          {state.questionTheme}
        </StyledSpanThemeQuestion>
      </StyledH1>
    );
  };
  const spinner = state.loading ? (
    <Spinner width={50} height={50} color="#1f2ce0" margin="" />
  ) : null;
  const content = state.loading ? null : view();

  useEffect(() => {
    Promise.all([
      getThemeQuestion(currentQuestionNumb),
      getTotalQuestionsNumb(),
    ]).then((res) => {
      const [theme, number] = res;
      if (theme && number) {
        setState({
          loading: false,
          questionTheme: `${theme}`,
          totalQuestionNumber: number,
        });
      }
    });
  }, [currentQuestionNumb]);

  return (
    <>
      {spinner}
      {content}
    </>
  );
};

export default QuantityThemeQuestions;
