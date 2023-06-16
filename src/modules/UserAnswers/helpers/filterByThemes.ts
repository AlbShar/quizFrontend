import getThemes from './getThemes';

import type { TInfoQuestionsAndAnswers } from '../types/types';

const filterByThemes = (
  data: TInfoQuestionsAndAnswers,
  filter: string,
): TInfoQuestionsAndAnswers => {
  const transformData = Object.values(data);
  const themes = getThemes(data).filter((item, index) => index > 0);

  for (let i = 0; i < themes.length; i++) {
    if (filter === themes[i]) {
      return transformData.filter((question) => question.theme === themes[i]);
    }
  }

  return transformData;
};

export default filterByThemes;
