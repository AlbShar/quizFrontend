import {useContext, FC, MouseEvent} from "react";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";

import BtnBack from "../UI/BtnBack/BtnBack";
import ButtonQuiz from "../UI/ButtonQuiz/ButtonQuiz";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
import  db  from "../../../config/firebase/firebaseConfig";
import { ContextQuestionNumb } from "../../../components/Context";
import { sendUserAnswerDB } from "../api/sendUserAnswerDB";
import { getIdUser } from "../../../helpers/getIdUser";
import { setQunatityPause } from "../api/setQuantityPause";
import { resetQuantityPause } from "../../../helpers/incrementQuantityPause";

import { StyledArticle } from "./ButtonsQuiz.Styled";


type TButtonsQuiz = {
  isUserChoseAnswer: boolean,
  userDidntChooseAnswer: () => void,
  userChoseAnswer: () => void,
};

const ButtonsQuiz: FC<TButtonsQuiz> = ({isUserChoseAnswer, userDidntChooseAnswer, userChoseAnswer }) => {
  //eslint-disable-next-line
  const [currentQuestionNumb, setCurrentQuestionNumb] = useContext(ContextQuestionNumb) || [0, () => {}];

  let totalQuestionsNumbers = 0;
  onValue(ref(db, "questions"), (snapshot) => {
    totalQuestionsNumbers = Object.entries(snapshot.val()).length;
  });

  const sendAnswersToDb = () => {
    const answersItem =
    document.querySelectorAll<HTMLLIElement>("#answersAll ul li");
  answersItem.forEach((asnwerItem) => {
    if (asnwerItem.dataset.useranswer) {
      setCurrentQuestionNumb(currentQuestionNumb + 1);
      sendUserAnswerDB({
        currentQuestionNumb,
        selectorQuestion: "#questionTitle",
        userAnswer: asnwerItem.textContent || "No anwser",
        selectorTheme: "#themeQuestion",
        idUser: getIdUser("idUser"),
      });
    } 
  });
  };

  const onClickTheLastQuestion = () => {
      setQunatityPause();
      resetQuantityPause();
  };

  const onClickButtonHandler = (e: MouseEvent) => {
    const btnBack = document.querySelector("#btnBack");
    sendAnswersToDb();
    if (e.currentTarget.closest("#btnFinish")) {
      onClickTheLastQuestion();
      return;
    }
    userDidntChooseAnswer();
    
    if ((btnBack as HTMLButtonElement)?.style.display === "none") {
      (btnBack as HTMLButtonElement).style.display = "flex";
    }
  };

  return (
    <StyledArticle>
      <BtnBack userChoseAnswer={userChoseAnswer}/>
      {isUserChoseAnswer && (totalQuestionsNumbers === currentQuestionNumb ? (
         <ButtonLink onClickButtonHandler={onClickButtonHandler}/>
      ) : <ButtonQuiz userDidntChooseAnswer={userDidntChooseAnswer} onClickButtonHandler={onClickButtonHandler}/>)}
    </StyledArticle>
  );
};

export default ButtonsQuiz;
