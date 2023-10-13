import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import LoadingStatusComponent from '../../../components/LoadingStatusComponent';
import useDataLoaded from '../../../hooks/useDataLoaded';

import { StyledH2, StyledH3, StyledArticle } from './Score.Styled';

import type { RootState } from '../../../app/store';

const Score = (): JSX.Element => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.score',
  });
  const isDataLoaded: boolean = useDataLoaded();
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

  return (
    <StyledArticle>
      <LoadingStatusComponent />
      {isDataLoaded ? (
        <>
          <StyledH3>{t('title')}</StyledH3>
          <StyledH2>{`${quantityRightAnswers} ${t(
            'from',
          )} ${quantityQuestions}`}</StyledH2>
        </>
      ) : null}
    </StyledArticle>
  );
};

export default Score;
