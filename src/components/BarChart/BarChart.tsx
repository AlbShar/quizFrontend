import {FC} from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
type TInfoTheme = {
  totalPoints: number;
   totalQuantityQuestions: number
};
type TPointsByThemes = {
  [key: string]: TInfoTheme;
};

type BarChartProps = {
  pointsByTheme: TPointsByThemes | null
}; 

const BarChart: FC<BarChartProps> = ({pointsByTheme}) => {
  const labels = pointsByTheme ? 
  Object.keys(pointsByTheme)
  .map((theme) => theme.length > 13 ? `${theme.slice(0, 13)}...` : theme) : 
  ["There is no data"];

    const percentRightAnswers: number[] = (pointsByTheme) ? Object.values(pointsByTheme)
  .map((point: TInfoTheme) => +(point.totalPoints / point.totalQuantityQuestions * 100)
  .toFixed()) : [0];

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: "Столбчатая диаграмма",
          },
        },
        scales: {
            y: {
                ticks: {
                    stepSize: 25,
                }
            }
        }
      };
      
      
      const data = {
        labels,
        datasets: [
          {
            label: '%',
            data: percentRightAnswers,
            backgroundColor: percentRightAnswers.map((percent: number) => percent <= 25 ? "red" : "green"),
          },
        ],
      };

  return <Bar options={options} data={data} />;
}

export default BarChart;
