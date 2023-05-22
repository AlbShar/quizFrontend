import React, { FC, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

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
  totalQuantityQuestions: number;
};
type TPointsByThemes = {
  [key: string]: TInfoTheme;
};

type BarChartProps = {
  pointsByTheme: TPointsByThemes | null;
};

const BarChart: FC<BarChartProps> = ({ pointsByTheme }) => {
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  // const [widthBar, setWidthBar] = useState<number>(280);
  // const [heightBar, setHeightBar] = useState<number>(220);

  const colors = ["black", "red", "blue"];

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        align: "start" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  const data = {
    labels: [""],
    datasets: pointsByTheme
      ? Object.entries(pointsByTheme).map((item, index) => {
          const percentOfTheme = +(
            (item[1].totalPoints / item[1].totalQuantityQuestions) *
            100
          ).toFixed();
          const shortNameTheme = item[0].length > 25 ? `${item[0].slice(0, 25)}...` : item[0];

          return {
            label: `${percentOfTheme} % - ${shortNameTheme}`,
            data: [percentOfTheme],
            backgroundColor: colors[index],
          };
        })
      : [],
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (windowWidth > 320 && windowWidth < 459.8) {
  //     setWidthBar(280);
  //     setHeightBar(191);
  //   } else if (windowWidth > 459.8 && windowWidth < 767.8) {
  //     setWidthBar(350);
  //     setHeightBar(250);
  //   } else if (windowWidth > 767.8 && windowWidth < 1023.8) {
  //     setWidthBar(525);
  //     setHeightBar(320);
  //   }
  // }, [windowWidth]);

  return <Bar options={options} data={data}/>;
};

export default BarChart;
