import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'app/store';

export const useGetScores = () => {
  const scoreSelector = createSelector(
    (state: RootState) => state.userAnswersReducer.userAnswers,
    (userAnswers) => {
      const points = Object.values(userAnswers).map(
        (userAnswer) => userAnswer.userAnswer.point,
      );
      const quantityQuestions = points.length;
      const quantityRightAnswers = points.reduce((acc, val) => acc + val, 0);

      return [quantityQuestions, quantityRightAnswers];
    },
  );
  const [quantityQuestions, quantityRightAnswers] = useSelector(scoreSelector);

  return [quantityQuestions, quantityRightAnswers];
};
