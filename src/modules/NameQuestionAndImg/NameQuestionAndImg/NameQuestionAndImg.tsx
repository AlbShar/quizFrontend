import { useEffect, useContext, FC, useState } from "react";

import { ContextQuestionNumb } from "../../../components/Context";
import { getQuestionInfo } from "../../../api/getQuestionInfo";
import Spinner from "../../../UI/Spinner/Spinner";

import {
  StyledH2,
  StyledArticleQuestion,
  StyledPicture,
  StyledImg,
} from "./NameQuestionAndImg.Styled";

type IState = {
  question: string;
  loading?: boolean;
  srcImg?: string | undefined;
};

type IQuestion = {
  name: string;
  descr: string;
  img?: string;
  theme: string;
  rightAnswer: string;
};

const NameQuestionAndImg: FC = () => {
  const contextValue = useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;
  const [state, setState] = useState<IState>({
    question: "",
    loading: true,
    srcImg: "",
  });

  const spinner = state.loading ? (
    <Spinner width={50} height={50} color="#1f2ce0" margin="0" />
  ) : null;


  const transformQuestionInfo = (questionInfo: IQuestion): IState => {
    const { name, img } = questionInfo;
    return {
      question: name,
      srcImg: img,
      loading: false,
    };
  };

  const view = () => {
    if (!state.srcImg) {
      return (
        <StyledArticleQuestion>
        <StyledH2 id="questionTitle" tabIndex={0}>
          {state.question}
        </StyledH2>
      </StyledArticleQuestion>

      );
    }
    return (
      <StyledArticleQuestion>
        <StyledH2 id="questionTitle" tabIndex={0}>
          {state.question}
        </StyledH2>
        <StyledPicture>
          <source
            type="image/png"
            media="(min-width: 320px)"
            srcSet={state.srcImg}
            width="120"
            height="auto"
          ></source>
          <source
            type="image/png"
            media="(min-width: 487px)"
            srcSet={state.srcImg}
            width="768"
            height="auto"
          ></source>
          <source
            type="image/png"
            media="(min-width: 769px)"
            srcSet={state.srcImg}
            width="1024"
            height="auto"
          ></source>
          <StyledImg
            src={state.srcImg}
            width="1024"
            height="auto"
            alt="Код на JS"
          />
        </StyledPicture>
      </StyledArticleQuestion>
    );
  };

  const content = state.loading ? null : view();

  const setNewState = (newState: IState) => {
    setState(newState);
  };

  useEffect(() => {
    getQuestionInfo(currentQuestionNumb)
      .then(transformQuestionInfo)
      .then(setNewState);
  }, [currentQuestionNumb]);

  return (
    <>
      {spinner} {content}
    </>
  );
};


export default NameQuestionAndImg;
