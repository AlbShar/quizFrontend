import { getThemesNames } from "./getThemesNames";

import type { TInfoQuestionsAndAnswers } from "../types/types";


const getThemes = (infoQuestionsAndAnswers: TInfoQuestionsAndAnswers): [string, ...string[]] => {
    if (infoQuestionsAndAnswers) {
      return getThemesNames(infoQuestionsAndAnswers);
    } else {
      return [""];
    }
  };

  export default getThemes;