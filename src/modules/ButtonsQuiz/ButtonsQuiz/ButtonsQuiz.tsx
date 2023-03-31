import {useContext, FC} from "react";
import { StyledArticle } from "./ButtonsQuiz.Styled";
import BtnBack from "../UI/BtnBack/BtnBack";
import ButtonQuiz from "../UI/ButtonQuiz/ButtonQuiz";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import  db  from "../../../config/firebase/firebaseConfig";
import { ContextQuestionNumb } from "../../../components/Context";

type TButtonsQuiz = {
  isUserChoseAnswer: boolean,
  userDidntChooseAnswer: () => void
};

const ButtonsQuiz: FC<TButtonsQuiz> = ({isUserChoseAnswer, userDidntChooseAnswer}) => {
  let [currentQuestionNumb, ] = useContext(ContextQuestionNumb) || [1, () => {}];

  let totalQuestionsNumbers;
  onValue(ref(db, `questions`), (snapshot) => {
    totalQuestionsNumbers = Object.entries(snapshot.val()).length;
  });

  return (
    <StyledArticle>
      <BtnBack />
      {isUserChoseAnswer && (totalQuestionsNumbers === currentQuestionNumb ? (
         <ButtonLink />
      ) : <ButtonQuiz userDidntChooseAnswer={userDidntChooseAnswer}/>)}
    </StyledArticle>
  );
};

export default ButtonsQuiz;
