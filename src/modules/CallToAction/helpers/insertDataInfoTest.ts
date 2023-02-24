import { getTotalQuestionsNumb } from "../../../api/getTotalQuestionsNumb";
import { deadline } from "../../Timer/index";
import { RefObject } from "react";

interface IInfoTest {
  textQuestions: string;
  textTime: string;
  listRef: RefObject<HTMLUListElement>;
  itemTag: string;
}
const insertDataInfoTest = async (
  {textQuestions,
  textTime,
  listRef, itemTag}: IInfoTest
) => {
  try {
    const queryResult = listRef.current;
    if (queryResult !== null) {
      const textListItems = queryResult.querySelectorAll(itemTag);
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
