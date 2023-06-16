import { FC } from 'react';

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
const ChartBar: FC<ChartBarProps> = ({ pointsByTheme }) => {
  return (
    <StyledArticle>
      <StyledBarChartWrapper>
        <BarChart pointsByTheme={pointsByTheme} />
      </StyledBarChartWrapper>
      <StyledP>
        График отображает процент правильных ответов по каждому тематическому
        разделу. Показатель считается как отношение количества верных ответов к
        общему количеству вопросов тематики. Если показатель менее 50 %, то
        данный раздел необходимо изучить дополнительно.
      </StyledP>
    </StyledArticle>
  );
};

export default ChartBar;
