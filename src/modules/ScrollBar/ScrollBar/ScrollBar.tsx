import { useEffect, useContext, FC } from "react";
import { setWidthScrollBar } from "../helpers/setWidthScrollBar";
import { StyledDivScrollBar } from "./SrollBar.Styled";
import {ContextQuestionNumb} from "../../../components/Context";

const ScrollBar: FC = () => {
  const contextValue: [number, (numb: number) => void] | null = useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;

  useEffect(() => {
    setWidthScrollBar(currentQuestionNumb, "#quiz", "#ScrollBar");
  });

  return <StyledDivScrollBar id="ScrollBar"></StyledDivScrollBar>;
};

export default ScrollBar;
