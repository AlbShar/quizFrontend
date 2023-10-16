import { useTranslation } from 'react-i18next';

import { DoughnutChart } from 'components/DoughuntChart';
import { BarChart } from 'components/BarChart';
import LoadingStatusComponent from 'components/LoadingStatusComponent';
import useDataLoaded from 'hooks/useDataLoaded';

import { useUserAnswersStats } from './hooks/useUserAnswersStats';
import { useTematicsStats } from './hooks/useTematicsStats';
import {
  StyledArticle,
  StyledP,
  StyledChartWrapper,
} from './styles/chart.Styled';

import { TChart } from './types';


export const Chart = ({ typeChart }: TChart) => {
  const { t } = useTranslation('', {
    keyPrefix: `modules.chart.${typeChart}`,
  });
  const isDataLoaded = useDataLoaded();
  const thematicsStats = useTematicsStats();
  const userAnswersStats = useUserAnswersStats();

  return (
    <StyledArticle typeChart={typeChart}>
      <LoadingStatusComponent />
      {isDataLoaded ? (
        <>
          <StyledChartWrapper typeChart={typeChart}>
            {typeChart === 'doughunt' ? (
              <DoughnutChart userAnswersStats={userAnswersStats} />
            ) : (
              <BarChart thematicsStats={thematicsStats} />
            )}
          </StyledChartWrapper>
          <StyledP>{t('text')}</StyledP>
        </>
      ) : null}
    </StyledArticle>
  );
};

