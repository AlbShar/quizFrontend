import { useTranslation } from 'react-i18next';

import {useGetStatusLoading} from 'hooks/useGetStatusLoading';
import { Spinner } from 'UI/Spinner';
import { ErrorMessage } from 'UI/ErrorMessage';

import { DoughnutChart } from './components/doughuntChart/doughuntChart';
import { BarChart } from './components/barChart/barChart';
import { StyledArticle, StyledP } from './styles/chart.Styled';
import { TChart } from './types';

export const Chart = ({ typeChart }: TChart) => {
  const { t } = useTranslation('', {
    keyPrefix: `modules.chart.${typeChart}`,
  });
  const statusLoading = useGetStatusLoading();

  if (statusLoading === 'loading') {
    return (
      <Spinner width={50} height={50} color={'#fcfdff'} margin={'0 auto'} />
    );
  }

  if (statusLoading === 'error') {
    return <ErrorMessage />;
  }

  return (
    <StyledArticle typeChart={typeChart}>
      {typeChart === 'doughunt' ? <DoughnutChart /> : <BarChart />}
      <StyledP>{t('text')}</StyledP>
    </StyledArticle>
  );
};
