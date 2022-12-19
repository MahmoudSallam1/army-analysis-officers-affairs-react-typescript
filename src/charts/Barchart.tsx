import React from "react";
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

type BarProps = any;

export function Barchart({ weapons }: BarProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        // text: "Chart.js Bar Chart",
      },
    },
  };

  const labels: string[] = weapons.map((weapon: any) => weapon.attributes.name);
  const achieved: number[] = weapons.map(
    (weapon: any) => weapon.attributes.achieved
  );
  const requested: number[] = weapons.map(
    (weapon: any) => weapon.attributes.requested
  );
  const percentages: number[] = weapons.map((weapon: any) =>
    ((weapon.attributes.achieved / weapon.attributes.requested) * 100).toFixed(
      1
    )
  );

  const data = {
    labels,
    datasets: [
      {
        label: "مطالب الجيش",
        data: requested,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "تم التنفيذ",
        data: achieved,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "النسبة",
        data: percentages,
        backgroundColor: "rgba(75, 192, 192,0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
