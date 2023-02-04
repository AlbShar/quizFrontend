import {getTotalQuestionsNumb} from "../../../api/getTotalQuestionsNumb";

const insertTotalQuestionNumbQuiz = async (selector) => {
    try {
      let totalQuestionsNumb = await getTotalQuestionsNumb();
      document.querySelector(selector).textContent = `/ ${totalQuestionsNumb}`;
    } catch (error) {
      console.error(error);
    }
  };

  export {insertTotalQuestionNumbQuiz};