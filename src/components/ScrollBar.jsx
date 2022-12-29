import React, { useEffect } from "react";
import { setWidthScrollBar } from "../index";
import { StyledDivScrollBar } from "./styles/SrollBar.Styled";

const ScrollBar = ({ currentQuestionNumb }) => {
  useEffect(() => {
    setWidthScrollBar(currentQuestionNumb, "#quiz", "#ScrollBar");
  });

  return <StyledDivScrollBar id="ScrollBar"></StyledDivScrollBar>;
};

export default ScrollBar;
