import { useTranslation } from 'react-i18next';

import { transformSecondsToMinutes } from 'modules/result/helpers/transformSecondsToMinutes';
import { Spinner } from 'UI/spinner';
import { ErrorMessage } from 'UI/errorMessage';
import {useGetStatusLoading} from 'hooks/useGetStatusLoading';

import { useGetTime } from '../../hooks/useGetTime';
import { StyledArticle, StyledH3, StyledH2 } from '../../styles/result.Styled';

export const SpentTime = () => {
  const { isLoading, time } = useGetTime();
  const { t } = useTranslation('', {
    keyPrefix: `modules.result.time`,
  });
  const statusLoading = useGetStatusLoading();


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
};
