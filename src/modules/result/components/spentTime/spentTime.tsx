import { useTranslation } from 'react-i18next';

import { Spinner } from 'UI/Spinner';
import { transformSecondsToMinutes } from 'modules/result/helpers/transformSecondsToMinutes';

import { useGetTime } from '../../hooks/useGetTime';
import { StyledArticle, StyledH3, StyledH2 } from '../../styles/result.Styled';

export const SpentTime = () => {
  const { isLoading, time } = useGetTime();
  const { t } = useTranslation('', {
    keyPrefix: `modules.result.time`,
  });
  
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
