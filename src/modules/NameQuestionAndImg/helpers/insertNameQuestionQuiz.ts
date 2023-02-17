import { getNameQuestion } from "../api/getNameQuestion";

const insertNameQuestionQuiz = async (currentQuestionNumb: number, selector: string) => {
    try {
      let nameQuestion = await getNameQuestion(currentQuestionNumb);
      const elementQuestion = document.querySelector<HTMLElement>(selector);
      if (elementQuestion && nameQuestion) {
        elementQuestion.textContent = nameQuestion;
      }
    } catch (error) {
      console.error(error);
    }
  };

export {insertNameQuestionQuiz};