import 'bootstrap/dist/css/bootstrap.min.css';
import home from '../home.png'
import map from '../map.png'
import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import * as ReactBootstrap from 'react-bootstrap';

const SensorUpdate = () => {

    const readings = [
        {time: "12:10:01.264", sensorID: 103, workerName: "Boris", latitude: 29.632344, longitude: -82.874577, temperature: 82.34, ethanol: 17054, tvoc: 0},
        {time: "12:05:01.264", sensorID: 102, workerName: "Viktor", latitude: 30.632344, longitude: -82.874577, temperature: 84.34, ethanol: 18077, tvoc: 0}, 
        {time: "12:03:01.264", sensorID: 100, workerName: "Sveta", latitude: 20.632344, longitude: -82.874577, temperature: 84.34, ethanol: 18077, tvoc: 0}, 
        {time: "12:02:01.264", sensorID: 101, workerName: "Viktor", latitude: 30.632344, longitude: -82.874577, temperature: 84.34, ethanol: 18077, tvoc: 0}, 
    ]

    const renderReading = (reading, index) => {
        return (
            <tr key = {index}>
                <td>{reading.time}</td>
                <td>{reading.sensorID}</td>
                <td>{reading.workerName}</td>
                <td>{reading.latitude}</td>
                <td>{reading.longitude}</td>
                <td>{reading.temperature}</td>
                <td>{reading.ethanol}</td>
                <td>{reading.tvoc}</td>
            </tr>
        )
    }
    return (
    <div className = "SensorUpdate">
       <ReactBootstrap.Table striped bordered hover>
           <thead>
               <tr>
                <th>Time</th>
                <th>Sensor ID</th>
                <th>Worker Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Temperature</th>
                <th>Ethanol</th>
                <th>TVOC</th>
               </tr>
           </thead>
           <tbody>
               {readings.map(renderReading)}
           </tbody>
       </ReactBootstrap.Table>
    </div>
    );
};

export default SensorUpdate;