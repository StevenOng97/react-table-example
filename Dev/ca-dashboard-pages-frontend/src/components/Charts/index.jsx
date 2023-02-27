import React, { useMemo } from 'react';

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
import { options } from './options';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Point 1',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: '#fd7e14',
      barThickness: 15,
    },
  ],
};

const Charts = ({ label }) => {
  const chartData = useMemo(() => data, []);

  chartData.datasets[0].label = label;

  return (
    <div className="flex-1">
      <Bar
        options={options}
        data={chartData}
        width={'300px'}
        height={'390px'}
      />
    </div>
  );
};

export default Charts;
