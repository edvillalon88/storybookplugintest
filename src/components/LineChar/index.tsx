import React from 'react';
import { LineChartInterface, DataInterface } from './LineChartInterface';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);  

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
const axes = [      
    { primary: true, type: 'linear', position: 'bottom' },
    { type: 'linear', position: 'left' }
];
const LineChart = ({ data, title }:DataInterface) => {
    const [ _data, setData] = React.useState<LineChartInterface>({ labels: [], datasets: []})
    React.useEffect(()=>{
      const labels = data.map(item=>item.label);
      const datasets = [ { label: title, borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.5)', data: data.map(item=>item.value) }];
      setData({ labels: labels, datasets: datasets})
    },[data])
    
    return ( 
    <div>
        <Line options={options} data={_data} />
    </div>
    );
}
export default LineChart;