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

import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErroMessage';

import {
  StyledArticle,
  StyledP,
  StyledBarChartWrapper,
} from './BatChart.Styled';

import type {  RootState } from '../../app/store/index';

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

const BarChart = (): JSX.Element => {
  const colors = ['black', 'red', 'blue'];
  const { t } = useTranslation();

  const userAnswersLoadingStatus  = useSelector(
    (state: RootState) => state.userAnswersReducer.userAnswersLoadingStatus,
  );

  const selectorDatasets = createSelector(
    (state: RootState) => state.userAnswersReducer.userAnswers,
    (state: RootState) => state.filtersReducer.themes,
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
    }
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


  if (userAnswersLoadingStatus === 'loading') {
    return (
      <Spinner width={50} height={50} color={'#1f2ce0'} margin={'0 auto'} />
    );
  } else if (userAnswersLoadingStatus === 'error') {
    return <ErrorMessage />;
  }

  return (
      <StyledArticle>
        <StyledBarChartWrapper>
          <Bar options={options} data={data} />
        </StyledBarChartWrapper>
        <StyledP>{t('Подпись_столбчатая_диаграмма')}</StyledP>
      </StyledArticle>
    );
};

export default BarChart;
