import { getThemesNames } from './getThemesNames';

import type { TInfoQuestionsAndAnswers } from '../types/types';

const getThemes = (
  infoQuestionsAndAnswers: TInfoQuestionsAndAnswers,
): [string, ...string[]] => {
  if (infoQuestionsAndAnswers) {
    return getThemesNames(infoQuestionsAndAnswers);
  } else {
    return ['Все тематики'];
  }
};

export default getThemes;
