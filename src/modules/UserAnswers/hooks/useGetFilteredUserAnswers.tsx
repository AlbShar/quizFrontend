import { createSelector } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import type { TQuestionAndAnswer } from '../types/types';
import type { RootState } from 'app/store/index';

export const useGetFilteredUserAnswers = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.userAnswers',
  });

  const filteredUserAnswers = createSelector(
    (state: RootState) => state.filtersReducer.filterByRight,
    (state: RootState) => state.filtersReducer.filterByTheme,
    (state: RootState) => state.userAnswersReducer.userAnswers,
    (filterByRight, filterByTheme, userAnswers) => {
      let result: TQuestionAndAnswer[] = Object.values(userAnswers);

      if (t(filterByRight) !== t('Все вопросы')) {
        switch (t(filterByRight)) {
          case t('Верно'):
            result = result.filter(
              (userAnswer) => userAnswer.userAnswer.point === 1,
            );
            break;
          case t('Неверно'):
            result = result.filter(
              (userAnswer) => userAnswer?.userAnswer?.point === 0,
            );
            break;
        }
      }

      if (filterByTheme !== 'Все тематики' && filterByTheme !== 'All thems') {
        result = result.filter(
          (userAnswer) => userAnswer.theme === filterByTheme,
        );
      }

      return result;
    },
  );
  const filteredAnswers = useSelector(filteredUserAnswers);

  return filteredAnswers;
};

