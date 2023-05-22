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
import type { TPointsByThemes } from "../../types/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


type BarChartProps = {
  pointsByTheme: TPointsByThemes | null;
};

const BarChart: FC<BarChartProps> = ({ pointsByTheme }) => {
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


  return <Bar options={options} data={data}/>;
};

export default BarChart;
