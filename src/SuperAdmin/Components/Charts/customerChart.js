import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.4,
        backgroundColor: '#935CCB',
        borderColor: '#935CCB',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#935CCB',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: '#935CCB',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55,23,45,57,78,34,12]
      }
    ]
  };

  const options = {
    legend: {
        display: false
        }
    };


class customerChart extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container-fluid bg-white">
                <div class="row">
                    <div class="col-12">
                        <h6 class=""  style={{fontFamily:"Alegreys Sans",fontSize:"18px",lineHeight:"26px",color:"#374767",marginLeft:"15px"}}><span class="stat-chart-title-border">Monthly </span>Progress Report </h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Line ref="chart" data={data} options={options}/>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}


export default customerChart;