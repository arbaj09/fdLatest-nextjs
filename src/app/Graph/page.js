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
  scales: {
    x: {
      title: {
        display: true,
        text: 'Year',

      }
    },

    
  }
};

const Graph = ({YearlyGroth }) => {
  if (!YearlyGroth || YearlyGroth.length === 0) {
    return <div>No data available</div>;
  }

  const chartData = {
    labels: YearlyGroth.map((yearData) => `Year ${yearData.year}`),
    datasets: [
      {

        data: YearlyGroth .map((yearData) => parseFloat(yearData.totalAmount)),
        borderColor: 'green',
        borderColor: 'rgba(75, 192, 192, 1)',

    
      },
    ],
  };

  return (
    <div className='GRAPH'>
     
      <Line data={chartData} options={options}  className='line' height="336px" width='650px'  />
    </div>
  );
};
export default Graph
