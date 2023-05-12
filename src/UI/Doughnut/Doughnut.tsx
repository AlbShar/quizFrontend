import {FC} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type PiechartProps = {
  dataPieChart: number[]
};

const Piechart: FC<PiechartProps> = ({dataPieChart}) => {
  const data = {
    labels: ["Верно", "Неверно"],
    datasets: [
      {
        label: '# of Votes',
        data: dataPieChart,
        backgroundColor: [
          "green",
          "red",
        ],
        
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data}/>;
};

export default Piechart;
