import { ref, set } from "firebase/database";
import { getRightAnswerDB } from "./getRightAnswerDB";
import {db} from "../../../index";

const sendUserAnswerDB = async (
    currentQuestionNumb,
    selectorQuestion,
    userAnswer,
    selectorTheme,
    idUser
  ) => {
    try {
      const theme = document.querySelector(selectorTheme).textContent;
      const question = document.querySelector(selectorQuestion).textContent;
  
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