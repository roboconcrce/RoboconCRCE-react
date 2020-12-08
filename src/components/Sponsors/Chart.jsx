import React, { useState } from 'react'
import {Pie, defaults } from 'react-chartjs-2'
import './sponsors.css'

defaults.global.maintainAspectRatio = false


function Chart() {

  const [chart,setChart] = useState({
    labels : ['Arena','Motor and Motor Drivers','Registration Fees','Sensors and Encoders',
              'Battery and Chargers','PCB and Electronic Components','Fabrication and Materials','Pneumatics',
              'Wheels and Controllers'],
    datasets : [{
      data:[50000,50000,35000,60000,40000,20000,60000,20000,50000],
      backgroundColor:['#54e346','#0a043c','#9d0191','#98acf8','#f05454','#fc8621','#52057b','#060930','#af6b58']
       
    }]
  })

  return (
    <div>
      <Pie
         data={{
           labels:chart.labels,
           datasets:chart.datasets
         }} 
         options= {{ 
        legend: {
            labels: {
                fontColor: "#fff",  
                fontSize: 12
            }
        }
      } }
      height='300%'
      />
    </div>
  )
}

export default Chart
