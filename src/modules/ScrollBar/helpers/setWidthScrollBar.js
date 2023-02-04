import { getTotalQuestionsNumb } from "../../../api/getTotalQuestionsNumb";
export const setWidthScrollBar = async (
    currentQuestionNumb,
    selectorQuiz,
    selectorScrollBar
  ) => {
    try {
      const totalQuestionsNumb = await getTotalQuestionsNumb();
      const quiz = document.querySelector(selectorQuiz);
      const widthContainer =
        quiz.clientWidth -
        parseInt(getComputedStyle(quiz).paddingRight) -
        parseInt(getComputedStyle(quiz).paddingLeft);
      let valueWidthScroll = widthContainer / totalQuestionsNumb;
      document.querySelector(selectorScrollBar).style.width = `${
        currentQuestionNumb * valueWidthScroll
      }px`;
    } catch (error) {
      console.error(error);
    }
  };
