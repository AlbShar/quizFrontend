import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import {
  StyledSpan,
  StyledDoughuntWrapper,
} from './DoughuntChart.Styled';

ChartJS.register(ArcElement, Tooltip, Legend, LinearScale);

type TDoughnutChartProps = {
  userAnswersStats: number[]
}

export const DoughnutChart = ({ userAnswersStats }: TDoughnutChartProps) => {
  const { t } = useTranslation('', {
    keyPrefix: 'components.doughuntChart',
  });

  const data = {
    labels: [t('right'), t('wrong')],
    datasets: [
      {
        label: '%',
        data: userAnswersStats,
        backgroundColor: ['#3BA268', '#D61A31'],
        borderColor: ['#3BA268', '#D61A31'],
        cutout: '75%',
        borderWidth: 1,
        spacing: 2,
      },
    ],
  };

  return (
    <StyledDoughuntWrapper>
      <Doughnut data={data}/>
      <StyledSpan>{`${userAnswersStats[0]} %`}</StyledSpan>
    </StyledDoughuntWrapper>
  )
};

