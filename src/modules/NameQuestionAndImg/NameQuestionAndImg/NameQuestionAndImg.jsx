import React, { useEffect } from "react";
import { insertImageQuiz } from "../helpers/insertImageQuiz";
import { insertNameQuestionQuiz } from "../helpers/insertNameQuestionQuiz";
import {
  StyledH2,
  StyledArticleQuestion,
  StyledDiv,
  StyledImg,
} from "./NameQuestionAndImg.Styled";

const NameQuestionAndImg = ({ currentQuestionNumb }) => {
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
