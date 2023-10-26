import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { RootState } from 'app/store';

export const useUserAnswersStats = () => {
  const percentAnswersSelector = createSelector(
    (state: RootState) => state.userAnswers,
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

  const [percentRightQuestions, percentWrongQuestions] = useSelector(
    percentAnswersSelector,
  );

  return [percentRightQuestions, percentWrongQuestions];
};
