import {FC} from 'react';

import { StyledArticle, StyledP, StyledSpan } from "./BarChart.Styled";
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
        <BarChart pointsByTheme={pointsByTheme}/>
        <StyledP>
        График отображает процент правильных ответов по каждому тематическому разделу теста. 
        Показатель считается как отношение колисества вопросов,на которые был дан правильный ответ, 
        к общему количеству вопросов  данной тематики. Если показатель составляет менее 50 %, 
        то данный раздел необходимо изучить дополнительно.
        </StyledP>
      </StyledArticle>
    );
};

export default BarChartWrapper;