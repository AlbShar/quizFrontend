import { useEffect, useContext, FC, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  StyledH1,
  StyledSpanThemeQuestion,
  StyledSpanQuestionQuantity,
} from "./QuantityThemeQuestions.Styled";
import { ContextQuestionNumb } from "../../../components/Context";
import Spinner from "../../../UI/Spinner/Spinner";
import {getThemeQuestion} from "../api/getThemeQuestion";
import { getTotalQuestionsNumb } from "../../../api/getTotalQuestionsNumb";

const QuantityThemeQuestions: FC = () => {
  
  const { t } = useTranslation();
  const contextValue: [number, (numb: number) => void] | null =
    useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;
  const [loading, setLoading] = useState<boolean>(true);
  const [questionTheme, setQuestionTheme] = useState<string>('');
  const [totalQuestionNumber, setTotalQuestionNumber] = useState<number>(0);
  const spinner = <Spinner width={50} height={50} color='#1f2ce0' margin=''/>;

  const loadingIsOver = () => {
    setLoading(false);
  };

  useEffect(() => {
    getThemeQuestion(currentQuestionNumb).then(res => {
      loadingIsOver();
      setQuestionTheme(res as string);
    })
    getTotalQuestionsNumb().then(res => {
      if (res !== undefined) {
        setTotalQuestionNumber(res);
      }
    })
  }, [currentQuestionNumb]);

  const viewQuantity = () => {
    return (
      <StyledH1 id="questionName">
      {t("Вопрос")} {currentQuestionNumb}
      <StyledSpanQuestionQuantity id="totalQuestionQuantity" tabIndex={0}>
        {`/ ${totalQuestionNumber}`}
      </StyledSpanQuestionQuantity>
      <StyledSpanThemeQuestion id="themeQuestion">{questionTheme}</StyledSpanThemeQuestion>
    </StyledH1>
  
    )
  }

  return (loading ? spinner : viewQuantity());
};



export default QuantityThemeQuestions;
