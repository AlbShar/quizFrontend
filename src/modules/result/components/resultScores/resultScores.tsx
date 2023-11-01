import { useTranslation } from 'react-i18next';

import { useGetStatusLoading } from 'hooks/useGetStatusLoading';
import { useGetScores } from 'modules/result/hooks/useGetScores';
import { Spinner } from 'UI/spinner';
import { ErrorMessage } from 'UI/errorMessage';

import { StyledArticle, StyledH3, StyledH2 } from '../../styles/result.Styled';

export const ResultScores = () => {
  const { t } = useTranslation('', {
    keyPrefix: `modules.result.scores`,
  });
  const statusLoading = useGetStatusLoading();
  const [quantityQuestions, quantityRightAnswers] = useGetScores();

  if (statusLoading === 'loading') {
    return (
      <Spinner width={50} height={50} color={'#1f2ce0'} margin={'0 auto'} />
    );
  }

  if (statusLoading === 'error') {
    return <ErrorMessage />;
  }

  return (
    <StyledArticle>
      <StyledH3>{t('title')}</StyledH3>
      <StyledH2>{`${quantityRightAnswers} ${t(
        'from',
      )} ${quantityQuestions}`}</StyledH2>
    </StyledArticle>
  );
};
