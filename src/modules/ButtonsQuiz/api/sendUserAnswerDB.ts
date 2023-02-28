import { ref, set } from "firebase/database";
import { getRightAnswerDB } from "./getRightAnswerDB";
import db from "../../../config/firebase/firebaseConfig";

interface IUserAnswer {
  currentQuestionNumb: number;
  selectorQuestion: "#questionTitle";
  userAnswer: string;
  selectorTheme: "#themeQuestion";
  idUser: string;

}

const sendUserAnswerDB = async (
    {currentQuestionNumb,
    selectorQuestion,
    userAnswer,
    selectorTheme,
    idUser}: IUserAnswer
  ) => {
    const theme = document.querySelector<HTMLSpanElement>(selectorTheme)?.textContent;
    const question = document.querySelector<HTMLHeadingElement>(selectorQuestion)?.textContent;
    const rightAnswer = await getRightAnswerDB(currentQuestionNumb);

    try {
      let referenceUserAnswers = ref(
        db,
        `users/user${idUser}/answers/answer${currentQuestionNumb}`
      );
      set(referenceUserAnswers, {
        question: question,
        userAnswer: userAnswer,
        theme: theme,
        point: rightAnswer === userAnswer ? 1 : 0,
      });
    } catch (error) {
      if (!theme) {
        throw new Error(`The value of variable 'theme' is ${theme}. ${error}`);
      } else if (!question){
        throw new Error(`The value of variable 'question' is ${question}. ${error}`);
      } else {
        throw new Error(`Unknown mistake: ${error}`);

      }
    }
  };

  export {sendUserAnswerDB};