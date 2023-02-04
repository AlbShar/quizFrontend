import React, { useEffect, useContext } from "react";
import { setWidthScrollBar } from "../helpers/setWidthScrollBar";
import { StyledDivScrollBar } from "./SrollBar.Styled";
import {ContextQuestionNumb} from "../../../components/Context";

const ScrollBar = () => {
  const [currentQuestionNumb] = useContext(ContextQuestionNumb);
  useEffect(() => {
    setWidthScrollBar(currentQuestionNumb, "#quiz", "#ScrollBar");
  });

  return <StyledDivScrollBar id="ScrollBar"></StyledDivScrollBar>;
};

export default ScrollBar;
