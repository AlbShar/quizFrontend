import { getThemeQuestion } from "../api/getThemeQuestion";
const insertThemeQuestionQuiz = async (currentQuestionNumb: number, selector: string) => {
    try {
      const nameThemeQuestion: string | undefined = await getThemeQuestion(currentQuestionNumb);
      const elementQuestion =  document.querySelector<HTMLElement>(selector);
      if (nameThemeQuestion && elementQuestion) {
        elementQuestion.textContent = nameThemeQuestion;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`${error.message}`);
      } else {
        throw new Error(`Unknown error caught: ${error}`);
      }
    }
  };

  export {insertThemeQuestionQuiz};