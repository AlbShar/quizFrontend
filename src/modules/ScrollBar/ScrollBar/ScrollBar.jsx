import React, { useEffect } from "react";
import { setWidthScrollBar } from "../helpers/setWidthScrollBar";
import { StyledDivScrollBar } from "./SrollBar.Styled";

const ScrollBar = ({ currentQuestionNumb }) => {
  useEffect(() => {
    setWidthScrollBar(currentQuestionNumb, "#quiz", "#ScrollBar");
  });

  return <StyledDivScrollBar id="ScrollBar"></StyledDivScrollBar>;
};

export default ScrollBar;
