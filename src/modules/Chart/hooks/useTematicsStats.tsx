import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { RootState } from 'app/store';

type TData = {
  [key in string]: {
    totalQuantity: number;
    points: number;
  };
};

export const useTematicsStats = () => {
 const colorsColumnsChart = ['black', 'red', 'blue'];

  const selectorDatasets = createSelector(
    (state: RootState) => state.userAnswersReducer.userAnswers,
    (state: RootState) => state.userAnswersReducer.themes,
    (userAnswers, themes) => {
      const arrayUserAnswers = Object.values(userAnswers);
      const data: TData = themes.reduce(
        (acc, value) => ({
          ...acc,
          [value]: { totalQuantity: 0, points: 0 },
        }),
        {},
      );

      arrayUserAnswers.forEach((userAnswer, index) => {
        for (const theme of themes) {
          if (userAnswer.theme === theme) {
            data[theme].totalQuantity++;
            data[theme].points += userAnswer.userAnswer.point;
          }
        }
      });

      const datasets = Object.entries(data).map((item, index) => {
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

      return datasets;
    },
  );
  const thematicsStats = useSelector(selectorDatasets);

  return thematicsStats;
};
