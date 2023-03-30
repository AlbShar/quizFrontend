import { useEffect, useState, useContext } from "react";
import { removeAttributesAnswers } from "../helpers/removeAttributesAnswers";
import { getAnswersDb } from "../api/getAnswersDb";
import { StyledArticle, StyledUl } from "./Answers.Styled";
import Answer from "../components/Answer/Answer";
import { ContextQuestionNumb } from "../../../components/Context";
import Spinner from "../../../UI/Spinner/Spinner";

type TState = {
  loading: boolean;
  answers: string[];
};
const Answers = () => {
  const [state, setState] = useState({ answers: [], loading: true });
  const contextValue = useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;
  const answersItems = state.answers.map((answer, index) => (
    <Answer key={index + 1}>{answer}</Answer>
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
          setState({ answers: answersDB as never[], loading: false });
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
