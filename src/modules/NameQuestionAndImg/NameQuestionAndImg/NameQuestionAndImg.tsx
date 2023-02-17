import { useEffect, useContext, FC } from "react";
import { insertImageQuiz } from "../helpers/insertImageQuiz";
import { insertNameQuestionQuiz } from "../helpers/insertNameQuestionQuiz";
import {
  StyledH2,
  StyledArticleQuestion,
  StyledDiv,
  StyledImg,
} from "./NameQuestionAndImg.Styled";
import {ContextQuestionNumb} from "../../../components/Context";

const NameQuestionAndImg: FC = () => {
  const contextValue = useContext(ContextQuestionNumb)
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;

  useEffect(() => {
    insertNameQuestionQuiz(currentQuestionNumb, '#questionTitle');
    insertImageQuiz(currentQuestionNumb, "#WrapperImg", "#imgQuestion");
  });

  return (
    <StyledArticleQuestion>
      <StyledH2 id="questionTitle"></StyledH2>
      <StyledDiv id="WrapperImg">
        <StyledImg alt="Код на JS" id="imgQuestion" />
      </StyledDiv>
    </StyledArticleQuestion>
  );
};

export default NameQuestionAndImg;
