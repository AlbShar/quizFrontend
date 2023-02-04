import { getNameQuestion } from "../api/getNameQuestion";

const insertNameQuestionQuiz = async (currentQuestionNumb, selector) => {
    try {
      let nameQuestion = await getNameQuestion(currentQuestionNumb);
      document.querySelector(selector).textContent = nameQuestion;
    } catch (error) {
      console.error(error);
    }
  };

export {insertNameQuestionQuiz};