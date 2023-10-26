import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { useTematicsStats } from 'modules/Chart/hooks/useTematicsStats';

import { StyledBarWrapper } from './barChart.Styled';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type TData = {
  label: string;
  data: number[];
  backgroundColor: string;
};


export const BarChart = () => {
  const thematicsStats = useTematicsStats();
  
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'center' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
    },
  };

  const data = {
    labels: [''],
    datasets: thematicsStats,
  };

  return (
    <StyledBarWrapper>
      <Bar options={options} data={data} />
    </StyledBarWrapper>
  );
};
