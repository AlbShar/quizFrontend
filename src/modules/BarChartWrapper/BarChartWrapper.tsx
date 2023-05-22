import {FC} from 'react';

import { StyledArticle, StyledP, StyledBarChartWrapper } from "./BarChart.Styled";
import BarChart from '../../components/BarChart/BarChart';

type TInfoTheme = {
  totalPoints: number;
   totalQuantityQuestions: number
};
type TPointsByThemes = {
  [key: string]: TInfoTheme;
};

type BarChartWrapperProps = {
  pointsByTheme: TPointsByThemes | null
};
const BarChartWrapper: FC<BarChartWrapperProps> = ({pointsByTheme}) => {
    return (
      <StyledArticle>
        <StyledBarChartWrapper>
          <BarChart pointsByTheme={pointsByTheme} />
        </StyledBarChartWrapper>
          <StyledP>
            График отображает процент правильных ответов по каждому
            тематическому разделу. Показатель считается как отношение
            количества верных ответов к общему количеству вопросов тематики. Если показатель 
            менее 50 %, то данный раздел необходимо изучить дополнительно.
          </StyledP>
      </StyledArticle>
    );
};

export default BarChartWrapper;