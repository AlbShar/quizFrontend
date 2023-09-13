import { useState, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
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

import type { TPointsByThemes } from '../../types/types';
import type { AppDispatch, RootState } from '../../app/store/index';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type BarChartProps = {
  pointsByTheme: TPointsByThemes | null;
};

type TResultData = {
  [key in string]: {
    totalQuantity: number;
    points: number;
  };
};

const BarChart = ({ pointsByTheme }: BarChartProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const colors = ['black', 'red', 'blue'];
  const { t } = useTranslation();
  const userAnswers = useSelector(
    (state: RootState) => state.userAnswersReducer.userAnswers,
  );
  const themes = useSelector((state: RootState) => state.filtersReducer.themes);

  const transformData = () => {
    console.log(userAnswers);
    console.log(themes);

    const result: TResultData[] = themes.map((theme) => ({
      [theme]: {
        totalQuantity: 0,
        points: 0
      },
    }));

    const r = {
      'fdf': {}
    }

    Object.values(userAnswers).forEach((userAnswer, index) => {
      for (const theme of themes) {
        if (userAnswer.theme === theme) {
          console.log(result['Теория веба']);

          // result[theme].totalQuantity++;
          // result[theme].points += userAnswer.userAnswer.point;
        }
      }
    });

    console.log(result);
  };

  transformData();

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
    datasets: pointsByTheme
      ? Object.entries(pointsByTheme).map((item, index) => {
          const percentOfTheme = +(
            (item[1].totalPoints / item[1].totalQuantityQuestions) *
            100
          ).toFixed();
          const shortNameTheme =
            item[0].length > 25 ? `${item[0].slice(0, 25)}...` : item[0];

          return {
            label: `${percentOfTheme} % - ${shortNameTheme}`,
            data: [percentOfTheme],
            backgroundColor: colors[index],
          };
        })
      : [],
  };

  const view = () => {
    return (
      <StyledArticle>
        <StyledBarChartWrapper>
          <Bar options={options} data={data} />
        </StyledBarChartWrapper>
        <StyledP>{t('Подпись_столбчатая_диаграмма')}</StyledP>
      </StyledArticle>
    );
  };

  const spinner = isLoading ? (
    <Spinner width={50} height={50} color={'#1f2ce0'} margin='0 auto' />
  ) : null;
  const content = !(isLoading || isError) ? view() : null;
  const error = isError ? <ErrorMessage /> : null;

  useEffect(() => {
    if (pointsByTheme) {
      setIsLoading(false);
    }
  }, [pointsByTheme]);

  return (
    <>
      {content} {spinner} {error}
    </>
  );
};

export default memo(BarChart);
