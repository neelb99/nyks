import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = props=>{
    const [chartData,setChartdata] = useState({});
    useEffect(()=>{
        const tempData = {
            labels: ['Present','Absent'],
            datasets:[{
                data: [props.present, props.absent],
                backgroundColor: ['#54d16f','#f03e3e'],
                borderWidth:1
            }]
        };
        setChartdata(tempData);
    },[]);

    return(
    <div className="col-12">
    <Doughnut data={chartData} width={1} height={1}/>
    </div>
    );
}

export default DoughnutChart;