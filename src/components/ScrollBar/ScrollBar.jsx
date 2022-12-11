import React, { useEffect } from "react";
import "./scrollBar.css";
import { getTotalQuestionsNumb } from "../../index";

const ScrollBar = ({ currentQuestionNumb }) => {

  useEffect(() => {
    getTotalQuestionsNumb().then((totalQuestionsNumb) => {
      const widthContainer =
      document.querySelector(".quiz").clientWidth -
      parseInt(getComputedStyle(document.querySelector(".quiz")).paddingRight) -
      parseInt(getComputedStyle(document.querySelector(".quiz")).paddingLeft);
      let valueWidthScroll = widthContainer / totalQuestionsNumb;
      document.querySelector(".scroll-bar").style.width = `${currentQuestionNumb * valueWidthScroll}px`;
    });
  });

  return <div className="scroll-bar"></div>;
};

export default ScrollBar;
