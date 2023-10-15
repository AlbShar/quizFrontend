import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import LoadingStatusComponent from '../LoadingStatusComponent';

import {
  StyledArticle,
  StyledP,
  StyledBarChartWrapper,
} from './BatChart.Styled';

import type { RootState } from '../../app/store/index';
import useDataLoaded from '../../hooks/useDataLoaded';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type TData = {
  [key in string]: {
    totalQuantity: number;
    points: number;
  };
};

export const BarChart = () => {
  const colors = ['black', 'red', 'blue'];
  const { t } = useTranslation('', {
    keyPrefix: 'components.barChart',
  });
  const isDataLoaded: boolean = useDataLoaded();
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
          backgroundColor: colors[index],
        };
      });

      return datasets;
    },
  );
  const datasets = useSelector(selectorDatasets);

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'center' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
    },
  };

  const data = {
    labels: [''],
    datasets: datasets,
  };

  return (
    <StyledArticle>
      <LoadingStatusComponent />
      {isDataLoaded ? (
        <>
          <StyledBarChartWrapper>
            <Bar options={options} data={data} />
          </StyledBarChartWrapper>
          <StyledP>{t('text')}</StyledP>
        </>
      ) : null}
    </StyledArticle>
  );
};

