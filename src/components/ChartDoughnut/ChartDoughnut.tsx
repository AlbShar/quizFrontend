import { FC } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, LinearScale);

type PiechartProps = {
  dataPieChart: number[];
};

const ChartDoughnut: FC<PiechartProps> = ({ dataPieChart }) => {
  const data = {
    labels: ['Верно', 'Неверно'],
    datasets: [
      {
        label: '%',
        data: dataPieChart,
        backgroundColor: ['green', 'red'],
        borderColor: ['green', 'red'],
        cutout: '75%',
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data}></Doughnut>;
};

export default ChartDoughnut;
