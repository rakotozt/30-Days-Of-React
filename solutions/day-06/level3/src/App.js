import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart, CategoryScale, registerables } from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(CategoryScale);
Chart.register(...registerables);
// Chart.register(ChartDataLabels);



export const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
];




const Header = () => {
  return (
    <div>
      <h1>30 Days of React</h1>
      <h3>World population</h3>
    </div>

  )
}

export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          indexAxis: "y",
          plugins: {
            title: {
              display: true,
              text: "The most populated country"
            },
            // datalabels: {
            //   anchor: 'end',
            //   align: 'top',
            //   formatter: Math.round,
            //   font: {
            //     weight: 'bold'
            //   }
            // },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};



function App() {
  const [chartData, setChartData] = useState({
    labels: tenHighestPopulation.map((data) => data.country),
    datasets: [
      {
        label: "Users Gained ",
        data: tenHighestPopulation.map((data) => data.population),
        backgroundColor: "orange",
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  return (
    <div className="App">
      <Header />
      <BarChart chartData={chartData} />
    </div>
  );
}

export default App;
