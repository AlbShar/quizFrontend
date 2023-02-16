import { getTotalQuestionsNumb } from "../../../api/getTotalQuestionsNumb";
import { deadline } from "../../Timer/index";

const insertDataInfoTest = async (
  textQuestions: string,
  textTime: string,
  ...selectors: string[]
) => {
  try {
    const queryResult = document.querySelector(selectors[0]);
    if (queryResult !== null) {
      const textListItems = queryResult.querySelectorAll(selectors[1]);
      let totalQuestionsNumb = await getTotalQuestionsNumb();

      textListItems[
        textListItems.length - 1
      ].textContent = `${totalQuestionsNumb} ${textQuestions}`;
      // We paste deadline(total seconds for passing the test) at InfoTest component
      textListItems[0].textContent = `${deadline / 60} ${textTime}`;
    }
  } catch (error) {
    console.error(error);
  }
};

export { insertDataInfoTest };
