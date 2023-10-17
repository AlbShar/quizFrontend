import { useTranslation } from 'react-i18next';

import LoadingStatusComponent from 'components/LoadingStatusComponent';
import useDataLoaded from 'hooks/useDataLoaded';

import { DoughnutChart } from './components/doughuntChart/doughuntChart';
import { BarChart } from './components/barChart/barChart';
import { StyledArticle, StyledP } from './styles/chart.Styled';
import { TChart } from './types';

export const Chart = ({ typeChart }: TChart) => {
  const { t } = useTranslation('', {
    keyPrefix: `modules.chart.${typeChart}`,
  });
  const isDataLoaded = useDataLoaded();

  return (
    <StyledArticle typeChart={typeChart}>
      <LoadingStatusComponent />
      {isDataLoaded ? (
        <>
          {typeChart === 'doughunt' ? <DoughnutChart /> : <BarChart />}
          <StyledP>{t('text')}</StyledP>
        </>
      ) : null}
    </StyledArticle>
  );
};
