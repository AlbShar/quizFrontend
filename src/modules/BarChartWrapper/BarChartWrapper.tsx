import {FC} from 'react';

import { StyledArticle, StyledP, StyledSpan } from "./BarChart.Styled";
import BarChart from '../../components/BarChart/BarChart';

type BarChartWrapperProps = {
    nameThemes: string[]
};
const BarChartWrapper: FC<BarChartWrapperProps> = ({nameThemes}) => {
    return (
        <StyledArticle>
        <BarChart labels={nameThemes}/>
        <StyledP>
          График отображает процент вопросов, на которые были даны верные и
          неверные ответы
        </StyledP>
      </StyledArticle>
    );
};

export default BarChartWrapper;