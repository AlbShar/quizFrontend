import React, { useEffect } from "react";
import { getNameQuestion, getImageSrc } from "../index";
import {
  StyledH2,
  StyledArticleQuestion,
  StyledDiv,
  StyledImg,
} from "./styles/Question.Styled";

const Quiestion = ({ currentQuestionNumb }) => {
  useEffect(() => {
    const wrapperImg = document.querySelector("#WrapperImg");

    getNameQuestion(currentQuestionNumb).then((nameQuestion) => {
      document.querySelector("#questionTitle").textContent = nameQuestion;
    });
    getImageSrc(currentQuestionNumb)
      .then((imgSrc) => {
        wrapperImg.style.display = "block";
        document.querySelector("#imgQuestion").src = imgSrc;
      })
      .catch(() => {
        wrapperImg.style.display = "none";
      });
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
