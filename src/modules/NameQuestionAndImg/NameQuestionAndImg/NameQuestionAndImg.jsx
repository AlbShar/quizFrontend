import React, { useEffect, useContext } from "react";
import { insertImageQuiz } from "../helpers/insertImageQuiz";
import { insertNameQuestionQuiz } from "../helpers/insertNameQuestionQuiz";
import {
  StyledH2,
  StyledArticleQuestion,
  StyledDiv,
  StyledImg,
} from "./NameQuestionAndImg.Styled";
import {ContextQuestionNumb} from "../../../components/Context";

const NameQuestionAndImg = () => {
  const [currentQuestionNumb] = useContext(ContextQuestionNumb);

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
