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

type BarChartProps = {
    labels: string[]
}; 

const BarChart: FC<BarChartProps> = ({labels}) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
        scales: {
            y: {
                ticks: {
                    stepSize: 1,
                }
            }
        }
      };
      
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [0, 1, 2],
            backgroundColor: 'rgba(255, 99, 132)',
          },
        ],
      };

  return <Bar options={options} data={data} />;
}

export default BarChart;
