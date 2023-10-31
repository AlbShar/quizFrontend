import { useContext } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { ContextLanguage } from 'components/context';
import { RootState } from 'app/store';

type TData = {
  [key in string]: {
    totalQuantity: number;
    points: number;
  };
};

export const useTematicsStats = () => {
  const colorsColumnsChart = ['black', 'red', 'blue'];
  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);

  const selectorTematicsStats = createSelector(
    (state: RootState) => state.userAnswers,
    (state: RootState) => state.themes,
    (userAnswers, themes) => {
      const [, ...updateThemes] = Object.values(themes[lang]);
      const arrayUserAnswers = Object.values(userAnswers);
      const data = updateThemes.reduce<TData>(
        (acc, value) => ({
          ...acc,
          [value as string]: { totalQuantity: 0, points: 0 },
        }),
        {},
      );

      arrayUserAnswers.forEach((userAnswer, index) => {
        for (const theme of updateThemes) {
          if (userAnswer.theme === theme) {
            data[theme].totalQuantity++;
            data[theme].points += userAnswer.userAnswer.point;
          }
        }
      });

      const thematicsStats = Object.entries(data).map((item, index) => {
        const percentOfTheme = +(
          (item[1].points / item[1].totalQuantity) *
          100
        ).toFixed();
        const shortNameTheme =
          item[0].length > 25 ? `${item[0].slice(0, 25)}...` : item[0];

        return {
          label: `${percentOfTheme} % - ${shortNameTheme}`,
          data: [percentOfTheme],
          backgroundColor: colorsColumnsChart[index],
        };
      });
      return thematicsStats;
    },
  );
  const thematicsStats = useSelector(selectorTematicsStats);

  return thematicsStats;
};
