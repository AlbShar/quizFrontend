import type { TQuestion } from '../types/types';

type TInfoQuestions = {
  [question: string]: TQuestion;
};

const getThemes = (infoQuestions: TInfoQuestions) => {
  const questions = Object.values(infoQuestions);
  const themesEn = new Set();
  const themesRu = new Set();

  const result = {
    en: { defaultValue: 'All thematics' },
    ru: { defaultValue: 'Все тематики' },
  };
  questions.forEach((question, index) => {
    themesEn.add(question['en']['theme']);
    themesRu.add(question['ru']['theme']);
  });

  Array.from(themesEn).forEach((themeEn, index) => {
    result['en'][`theme${index + 1}`] = themeEn;
  });
  Array.from(themesRu).forEach((themeRu, index) => {
    result['ru'][`theme${index + 1}`] = themeRu;
  });

  return result;
};

export default getThemes;
