import React, { useEffect } from "react";
import { getTotalQuestionsNumb } from "../index";
import { StyledDivScrollBar } from "./styles/SrollBar.Styled";

const ScrollBar = ({ currentQuestionNumb }) => {
  useEffect(() => {
    getTotalQuestionsNumb().then((totalQuestionsNumb) => {
      const quiz = document.querySelector("#quiz");
      const widthContainer =
        quiz.clientWidth -
        parseInt(getComputedStyle(quiz).paddingRight) -
        parseInt(getComputedStyle(quiz).paddingLeft);
      let valueWidthScroll = widthContainer / totalQuestionsNumb;
      document.querySelector("#ScrollBar").style.width = `${
        currentQuestionNumb * valueWidthScroll
      }px`;
    });
  });

  return <StyledDivScrollBar id="ScrollBar"></StyledDivScrollBar>;
};

export default ScrollBar;
