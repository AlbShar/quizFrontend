import { getTotalQuestionsNumb } from "../../../api/getTotalQuestionsNumb";
import { RefObject } from "react";

interface IWidthScrollBar {
  currentQuestionNumb: number;
  quizRef: RefObject<HTMLTableSectionElement>;
  scrollBarElementRef: RefObject<HTMLDivElement>;

}
async function setWidthScrollBar (
  {currentQuestionNumb,
  quizRef,
  scrollBarElementRef}:IWidthScrollBar
){
  try {
    const totalQuestionsNumb: number | undefined =
      await getTotalQuestionsNumb();

     const quizElement = quizRef.current;
     const scrollBarElement = scrollBarElementRef.current;
    if (quizElement && totalQuestionsNumb && scrollBarElement) {
      const widthContainer =
      quizElement.clientWidth -
        parseInt(getComputedStyle(quizElement).paddingRight) -
        parseInt(getComputedStyle(quizElement).paddingLeft);
      let valueWidthScroll = widthContainer / totalQuestionsNumb;
      scrollBarElement.style.width = `${
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
}



export {setWidthScrollBar};