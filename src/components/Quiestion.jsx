import React, { useEffect } from "react";
import { getNameQuestion, getImageSrc } from "../index";
import { StyledH2, StyledArticleQuestion, StyledDiv, StyledImg  } from "./styles/Question.Styled";

const Quiestion = ({ currentQuestionNumb }) => {

  useEffect(() => {
    const wrapperImg = document.querySelector('.wrapper-img');
    getNameQuestion(currentQuestionNumb).then(nameQuestion => {
      document.querySelector("#questionTitle").textContent = nameQuestion;
    })
    getImageSrc(currentQuestionNumb).then(imgSrc => {
      wrapperImg.style.display = 'block';
      document.querySelector('.img').src = imgSrc;
    }).catch(() => {
      wrapperImg.style.display = 'none';
    })
  });

  return (
    <StyledArticleQuestion>
      <StyledH2 id="questionTitle">
        <StyledDiv>
          <StyledImg alt="Код на JS" />
        </StyledDiv>
      </StyledH2>
    </StyledArticleQuestion>
  );
};

export default Quiestion;
