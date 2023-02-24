import { useEffect, useContext, FC, useRef, forwardRef} from "react";
import { insertImageQuiz } from "../helpers/insertImageQuiz";
import { insertNameQuestionQuiz } from "../helpers/insertNameQuestionQuiz";
import {
  StyledH2,
  StyledArticleQuestion,
  StyledDiv,
  StyledImg,
} from "./NameQuestionAndImg.Styled";
import {ContextQuestionNumb} from "../../../components/Context";

const NameQuestionAndImg: FC = () => {
  const contextValue = useContext(ContextQuestionNumb)
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;
  const questionTitleRef = useRef<HTMLHeadingElement>(null);
  const wrapperImgRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    insertNameQuestionQuiz({currentQuestionNumb, questionTitleRef});
    insertImageQuiz({currentQuestionNumb, wrapperImgRef, imgRef});
  });

  return (
    <StyledArticleQuestion>
      <StyledH2 ref={questionTitleRef} id="questionTitle"></StyledH2>
      <StyledDiv ref={wrapperImgRef}>
        <StyledImg ref={imgRef} alt="Код на JS" />
      </StyledDiv>
    </StyledArticleQuestion>
  );
};

export default NameQuestionAndImg;
