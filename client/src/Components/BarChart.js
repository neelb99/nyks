import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = props=>{
    const [chartData,setChartdata] = useState({});
    useEffect(()=>{
        const tempData = {
            labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
            datasets:[{
                data: [75, 80,60,62,60,79,83,91,100,88,85,71],
                fill:false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)'
            }]
        };
        setChartdata(tempData);
    },[]);

    return(
    <div className=" offset-1 col-10">
    <Bar data={chartData}  width={2} height={2}/>
    </div>
    );
}

export default BarChart;