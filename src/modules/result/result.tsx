import { useTranslation } from 'react-i18next';

import LoadingStatusComponent from 'components/LoadingStatusComponent';
import useDataLoaded from 'hooks/useDataLoaded';
import { Spinner } from 'UI/Spinner';

import { useGetScores } from './hooks/useGetScores';
import { useGetTime } from './hooks/useGetTime';
import { transformSecondsToMinutes } from './helpers/transformSecondsToMinutes';
import { StyledArticle, StyledH3, StyledH2 } from './styles/result.Styled';

import type { TResults } from './types';

type TResultProps = {
  typeResult: TResults;
};

export const Result = ({ typeResult }: TResultProps) => {
  const { t } = useTranslation('', {
    keyPrefix: `modules.result.${typeResult}`,
  });

  const isDataLoaded = useDataLoaded();
  const { isLoading, time } = useGetTime();
  const [quantityQuestions, quantityRightAnswers] = useGetScores();

  if (typeResult === 'scores') {
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
  } else {
    return (
      <StyledArticle>
        {isLoading ? (
          <Spinner width={50} height={50} color={'#1f2ce0'} margin={'0 auto'} />
        ) : (
          <>
            <StyledH3>{t('title')}</StyledH3>
            <StyledH2>
              {transformSecondsToMinutes(time, t('sec'), t('min'))}
            </StyledH2>
          </>
        )}
      </StyledArticle>
    );
  }
};
