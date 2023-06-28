import { useTranslation } from 'react-i18next';

import BarChart from '../../components/BarChart/BarChart';

import {
  StyledArticle,
  StyledP,
  StyledBarChartWrapper,
} from './BarChart.Styled';

import type { TPointsByThemes } from '../../types/types';

type ChartBarProps = {
  pointsByTheme: TPointsByThemes | null;
};
const ChartBar= ({ pointsByTheme }: ChartBarProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledArticle>
      <StyledBarChartWrapper>
        <BarChart pointsByTheme={pointsByTheme} />
      </StyledBarChartWrapper>
      <StyledP>{t('Подпись_столбчатая_диаграмма')}</StyledP>
    </StyledArticle>
  );
};

export default ChartBar;
