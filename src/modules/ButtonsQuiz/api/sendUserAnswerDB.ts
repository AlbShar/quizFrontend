import { ref, set } from "firebase/database";
import { getRightAnswerDB } from "./getRightAnswerDB";
import db from "../../../config/firebase/firebaseConfig";

const sendUserAnswerDB = async (
    currentQuestionNumb: number,
    selectorQuestion: string,
    userAnswer: string,
    selectorTheme: string,
    idUser: string
  ) => {
    try {
      const theme = document.querySelector<HTMLSpanElement>(selectorTheme)?.textContent;
      const question = document.querySelector<HTMLHeadingElement>(selectorQuestion)?.textContent;
  
      let referenceUserAnswers = ref(
        db,
        `users/user${idUser}/answers/answer${currentQuestionNumb}`
      );
      const rightAnswer = await getRightAnswerDB(currentQuestionNumb);
  
      set(referenceUserAnswers, {
        question: question,
        userAnswer: userAnswer,
        theme: theme,
        point: rightAnswer === userAnswer ? 1 : 0,
      });
    } catch (error) {
      console.error(error);
    }
  };

  export {sendUserAnswerDB};