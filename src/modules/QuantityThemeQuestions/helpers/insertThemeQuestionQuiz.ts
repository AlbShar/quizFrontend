import { getThemeQuestion } from "../api/getThemeQuestion";
interface IThemeQuestionQuiz {
  currentQuestionNumb: number;
   selector: string;
}
const insertThemeQuestionQuiz = async ({currentQuestionNumb, selector}: IThemeQuestionQuiz) => {
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