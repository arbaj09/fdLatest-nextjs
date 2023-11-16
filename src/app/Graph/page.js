"use client"

import React from 'react';
import './Graph.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const options = {
  indexyxis: 'X',
  elements: {
    area: {
      borderWidth: 2, // You can customize area element properties here
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Fd Return', // Update the chart title
    },
  },
};

const Graph = ({YearlyGroth }) => {
  const chartData = {
    labels: YearlyGroth.map((yearData) => `Year ${yearData.year}`),
    datasets: [
      {
        label: 'Earnings',
        data: YearlyGroth .map((yearData) => parseFloat(yearData.totalAmount)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className='GRAPH'>
     
      <Line data={chartData} options={options}  className='line'/>
    </div>
  );
};
export default Graph
