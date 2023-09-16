import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
} from 'chart.js';
import { createSelector } from '@reduxjs/toolkit';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import LoadingStatusComponent from '../LoadingStatusComponent';
import useDataLoaded from '../../hooks/useDataLoaded';

import {
  StyledArticle,
  StyledP,
  StyledSpan,
  StyledDoughuntWrapper,
} from './DoughuntChart.Styled';

import type { RootState } from '../../app/store/index';


ChartJS.register(ArcElement, Tooltip, Legend, LinearScale);

const DoughnutChart = (): JSX.Element => {
  const { t } = useTranslation();
  const percentAnswersSelector = createSelector(
    (state: RootState) => state.userAnswersReducer.userAnswers,
    (userAnswers) => {
      const points = Object.values(userAnswers).map(
        (userAnswer) => userAnswer.userAnswer.point,
      );
      const quantityQuestions = points.length;
      const quantityRightAnswers = points.reduce((acc, val) => acc + val, 0);
      const percentRightQuestions: number = +(
        (quantityRightAnswers / quantityQuestions) *
        100
      ).toFixed(1);
      const percentWrongQuestions: number = 100 - percentRightQuestions;

      return [percentRightQuestions, percentWrongQuestions];
    },
  );
  const isDataLoaded = useDataLoaded();
  const [percentRightQuestions, percentWrongQuestions] = useSelector(
    percentAnswersSelector,
  );

  const data = {
    labels: ['Верно', 'Неверно'],
    datasets: [
      {
        label: '%',
        data: [percentRightQuestions, percentWrongQuestions],
        backgroundColor: ['green', 'red'],
        borderColor: ['green', 'red'],
        cutout: '75%',
        borderWidth: 1,
      },
    ],
  };

  return (
      <StyledArticle>
        <LoadingStatusComponent />
        {isDataLoaded ? (
          <>
            <StyledDoughuntWrapper>
              <Doughnut data={data}></Doughnut>
              <StyledSpan>{`${percentRightQuestions} %`}</StyledSpan>
            </StyledDoughuntWrapper>
            <StyledP>{t('Подпись_круговая_диаграмма')}</StyledP>
          </>
        ) : null}
      </StyledArticle>
  );
};

export default DoughnutChart;
