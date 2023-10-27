import type { Questions } from '../types';

export const transformData = (question: Questions, lang: string): number => {
  const themes = new Set();
  const themesDb = Object.values(question).map(
    (question) => question[lang].theme,
  );

  for (const theme of themesDb) {
    themes.add(theme);
  }

  return themes.size;
};
