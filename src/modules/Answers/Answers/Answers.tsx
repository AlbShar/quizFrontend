import { useEffect, useState, useContext, FC } from "react";

import { removeAttributesAnswers } from "../helpers/removeAttributesAnswers";
import { getAnswersDb } from "../api/getAnswersDb";
import Answer from "../components/Answer/Answer";
import { ContextQuestionNumb } from "../../../components/Context";
import Spinner from "../../../UI/Spinner/Spinner";

import { StyledArticle, StyledUl } from "./Answers.Styled";
import Contact from "../../../pages/Contact/Contact";

type TState = {
  loading: boolean,
  answers: string[],
};

type TAnswer = {
  userChoseAnswer: () => void
};

const Answers: FC<TAnswer> = ({userChoseAnswer}) => {
  const [state, setState] = useState<TState>({ answers: [], loading: true });
  const contextValue = useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;
  const answersItems = state.answers.map((answer, index) => (
    <Answer key={index + 1} userChoseAnswer={userChoseAnswer}>{answer}</Answer>
  ));
  const spinner = state.loading ? (
    <Spinner width={50} height={50} color="#1f2ce0" margin="" />
  ) : null;
  const content = state.loading ? null : (
    <StyledArticle id="answersAll">
      <StyledUl>{answersItems}</StyledUl>
    </StyledArticle>
  );

  useEffect(() => {
    removeAttributesAnswers("#answersAll ul li");
    if (currentQuestionNumb) {
      getAnswersDb(currentQuestionNumb).then((answersDB) => {
        if (Array.isArray(answersDB)) {
          setState(state => ({...state, answers: answersDB as never[], loading: false}));
        }
      });
    }
  }, [currentQuestionNumb]);

  return (
   <> {spinner} {content}
   </>
  );
};

export default Answers;
