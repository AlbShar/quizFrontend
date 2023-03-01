import { useEffect, useContext, FC, useRef } from "react";
import { insertImageQuiz } from "../helpers/insertImageQuiz";
import { insertNameQuestionQuiz } from "../helpers/insertNameQuestionQuiz";
import {
  StyledH2,
  StyledArticleQuestion,
  StyledPicture,
  StyledImg,
} from "./NameQuestionAndImg.Styled";
import { ContextQuestionNumb } from "../../../components/Context";

const NameQuestionAndImg: FC = () => {
  const contextValue = useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;
  const questionTitleRef = useRef<HTMLHeadingElement>(null);
  const wrapperImgRef = useRef<HTMLDivElement>(null);
  const sourceMobImgRef = useRef<HTMLSourceElement>(null);
  const sourceTabletImgRef = useRef<HTMLSourceElement>(null);
  const sourceDesktopImgRef = useRef<HTMLSourceElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    insertNameQuestionQuiz({ currentQuestionNumb, questionTitleRef });
    insertImageQuiz({
      currentQuestionNumb,
      wrapperImgRef,
      imgRef,
      sourceMobImgRef,
      sourceTabletImgRef,
      sourceDesktopImgRef,
    });
  });

  return (
    <StyledArticleQuestion>
      <StyledH2 ref={questionTitleRef} id="questionTitle"></StyledH2>
      <StyledPicture ref={wrapperImgRef}>
        <source
          ref={sourceMobImgRef}
          type="image/png"
          media="(min-width:320px) and (max-width:486px)"
        ></source>
        <source
          ref={sourceTabletImgRef}
          type="image/png"
          media="(min-width:487px) and (max-width:768px)"
        ></source>
        <source
          ref={sourceDesktopImgRef}
          type="image/png"
          media="(min-width:769px)"
        ></source>
        <StyledImg currentQuestionNumb={currentQuestionNumb} ref={imgRef} alt="Код на JS" />
      </StyledPicture>
    </StyledArticleQuestion>
  );
};

export default NameQuestionAndImg;
