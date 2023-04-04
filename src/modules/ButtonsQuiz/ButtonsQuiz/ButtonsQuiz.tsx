import {useContext, FC, MouseEvent} from "react";
import { StyledArticle } from "./ButtonsQuiz.Styled";
import BtnBack from "../UI/BtnBack/BtnBack";
import ButtonQuiz from "../UI/ButtonQuiz/ButtonQuiz";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import  db  from "../../../config/firebase/firebaseConfig";
import { ContextQuestionNumb } from "../../../components/Context";
import { sendUserAnswerDB } from "../api/sendUserAnswerDB";
import { getIdUser } from "../../../helpers/getIdUser";
import { setQunatityPause } from "../api/setQuantityPause";

type TButtonsQuiz = {
  isUserChoseAnswer: boolean,
  userDidntChooseAnswer: () => void,
  userChoseAnswer: () => void,
  testFinished: () => void,
};

const ButtonsQuiz: FC<TButtonsQuiz> = ({isUserChoseAnswer, userDidntChooseAnswer, userChoseAnswer, testFinished }) => {
  let [currentQuestionNumb, setCurrentQuestionNumb] = useContext(ContextQuestionNumb) || [1, () => {}];

  let totalQuestionsNumbers: number = 0;
  onValue(ref(db, `questions`), (snapshot) => {
    totalQuestionsNumbers = Object.entries(snapshot.val()).length;
  });

  const onClickButtonHandler = (e: MouseEvent) => {
    console.log('click')
    const answersItem =
      document.querySelectorAll<HTMLLIElement>("#answersAll ul li");
    const btnBack = document.querySelector("#btnBack");

    userDidntChooseAnswer();
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

      if (e.currentTarget.closest('#btnFinish')) {
        setQunatityPause();
        testFinished();
        console.log('finish');
        // Почему срабатывает 5 раз? Fix
      }
      if ((btnBack as HTMLButtonElement)?.style.display === "none") {
        (btnBack as HTMLButtonElement).style.display = "flex";
      }
    });

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
