import { useEffect, useState, useContext, FC } from "react";

import { removeAttributesAnswers } from "../helpers/removeAttributesAnswers";
import { getAnswersDb } from "../api/getAnswersDb";
import Answer from "../components/Answer/Answer";
import { ContextQuestionNumb } from "../../../components/Context";
import Spinner from "../../../UI/Spinner/Spinner";

import { StyledArticle, StyledUl } from "./Answers.Styled";

type TState = {
  loading: boolean,
  answers: string[],
};

type TAnswer = {
  showButtonAccept: () => void
};

const Answers: FC<TAnswer> = ({showButtonAccept}) => {
  const [state, setState] = useState<TState>({ answers: [], loading: true });
  const contextValue = useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;
  const refAnswers: HTMLLIElement[] = [];
  const setRefAnswer = elem => {
    refAnswers.push(elem);
  };

  const onFocusUserAnswer = (id: number) => {
    const styleBorder = "border: 2px solid rgb(103, 104, 215)";
    const currentAnswer: HTMLLIElement[] = refAnswers.filter(answerItem => answerItem.dataset.useranswer);
    const isCurrentAnswer: boolean = currentAnswer.length ? true : false;
    if (!isCurrentAnswer) {
      showButtonAccept();
    }

    refAnswers.forEach(answer => {
      answer.removeAttribute("style");
      answer.removeAttribute("data-useranswer");
      
    });

    refAnswers[id].setAttribute("style", styleBorder);
    refAnswers[id].setAttribute("data-useranswer", "true");
    refAnswers[id].focus();
  };

  const answersItems = state.answers.map((answer, index) => (
    <Answer 
    index={index}
    setRef={setRefAnswer} 
    onFocusUserAnswer={onFocusUserAnswer} 
    key={index + 1} >{answer}</Answer>
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
