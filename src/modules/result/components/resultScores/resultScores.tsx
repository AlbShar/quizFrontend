import { useTranslation } from 'react-i18next';

import useDataLoaded from 'hooks/useDataLoaded';
import LoadingStatusComponent from 'components/LoadingStatusComponent';
import { useGetScores } from 'modules/result/hooks/useGetScores';

import { StyledArticle, StyledH3, StyledH2 } from '../../styles/result.Styled';

export const ResultScores = () => {
    const { t } = useTranslation('', {
      keyPrefix: `modules.result.scores`,
    });
  const isDataLoaded = useDataLoaded();
  const [quantityQuestions, quantityRightAnswers] = useGetScores();

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
