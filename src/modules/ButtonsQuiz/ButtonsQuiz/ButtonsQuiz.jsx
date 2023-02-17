import React, {useContext} from "react";
import { StyledArticle } from "./ButtonsQuiz.Styled";
import BtnBack from "../UI/BtnBack/BtnBack";
import ButtonQuiz from "../UI/ButtonQuiz/ButtonQuiz";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import  db  from "../../../config/firebase/firebaseConfig";
import { ContextQuestionNumb } from "../../../components/Context";

const ButtonsQuiz = () => {
  let [currentQuestionNumb,] = useContext(ContextQuestionNumb);

  let totalQuestionsNumbers;
  onValue(ref(db, `questions`), (snapshot) => {
    totalQuestionsNumbers = Object.entries(snapshot.val()).length;
  });

  return (
    <StyledArticle>
      <BtnBack />
      {totalQuestionsNumbers === currentQuestionNumb ? (
        <ButtonLink />
      ) : <ButtonQuiz />}
    </StyledArticle>
  );
};

export default ButtonsQuiz;
