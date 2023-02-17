import { getTotalQuestionsNumb } from "../../../api/getTotalQuestionsNumb";
export const setWidthScrollBar = async (
  currentQuestionNumb: number,
  selectorQuiz: string,
  selectorScrollBar: string
) => {
  try {
    const totalQuestionsNumb: number | undefined = await getTotalQuestionsNumb();
    const quiz = document.querySelector<HTMLElement>(selectorQuiz);
    const elementScrollBar = document.querySelector<HTMLElement>(selectorScrollBar);
    if (quiz && totalQuestionsNumb && elementScrollBar) {
      const widthContainer =
        quiz.clientWidth -
        parseInt(getComputedStyle(quiz).paddingRight) -
        parseInt(getComputedStyle(quiz).paddingLeft);
        let valueWidthScroll = widthContainer / totalQuestionsNumb;
        elementScrollBar.style.width = `${
      currentQuestionNumb * valueWidthScroll
    }px`;
    }
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    } else {
      throw new Error(`Unknown error caught: ${error}`);
    }
  }
};
