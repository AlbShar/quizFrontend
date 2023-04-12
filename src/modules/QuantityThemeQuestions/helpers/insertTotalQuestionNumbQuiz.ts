import {getTotalQuestionsNumb} from "../../../api/getTotalQuestionsNumb";

const insertTotalQuestionNumbQuiz = async (selector: string) => {
    try {
      const totalQuestionsNumb: number | undefined = await getTotalQuestionsNumb();
      const elementTotalQuestionNumb = document.querySelector<HTMLElement>(selector);
      if (elementTotalQuestionNumb) {
        elementTotalQuestionNumb.textContent = `/ ${totalQuestionsNumb}`;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`${error.message}`);
      } else {
        throw new Error(`Unknown error caught: ${error}`);
      }
    }
  };

  export {insertTotalQuestionNumbQuiz};