import { getThemeQuestion } from "../api/getThemeQuestion";
const insertThemeQuestionQuiz = async (currentQuestionNumb, selector) => {
    try {
      const nameThemeQuestion = await getThemeQuestion(currentQuestionNumb);
      document.querySelector(selector).textContent = nameThemeQuestion;
    } catch (error) {
      console.error(error);
    }
  };

  export {insertThemeQuestionQuiz};