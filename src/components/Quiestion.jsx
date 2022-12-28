import React, { useEffect } from "react";
import { insertNameQuestionQuiz, insertImageQuiz } from "../index";
import {
  StyledH2,
  StyledArticleQuestion,
  StyledDiv,
  StyledImg,
} from "./styles/Question.Styled";

const Quiestion = ({ currentQuestionNumb }) => {
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

export default Quiestion;
