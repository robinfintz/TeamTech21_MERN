import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';
import battery100 from '../symbols/battery-100.jpg'
import battery75 from '../symbols/battery-75.jpg'
import battery50 from '../symbols/battery-50.jpg'
import battery25 from '../symbols/battery-25.jpg'
import batteryWarning from '../symbols/battery-warning.jpg'
import deviceOnline from '../symbols/device-online.jpg'
import deviceOffline from '../symbols/device-offline.jpg'
import goodAir from '../symbols/good-air.jpg'
import badAir from '../symbols/bad-air.jpg'
import noWarning from '../symbols/no-warning.jpg'
import warning from '../symbols/warning.jpg'

const Employees = () => {
        return (
          <div>
              <div class="container">
              <div className="row">
                  <div className="col-lg" style={{textAlign:"center", fontSize:"64px", fontWeight:"bold", color:"#5554A4", fontFamily:"righteous"}}>Employees</div>
                </div>
              <div className="spacer"> &nbsp; </div>
             
              <div className="row">
                  <div className="col-sm-4"  style={{textAlign:"center", fontSize:"36px", fontWeight:"bold", color:"#F78628", fontFamily:"righteous"}}>Device</div>
                  <div className="col-sm-4"  style={{textAlign:"center", fontSize:"36px", fontWeight:"bold", color:"#F78628", fontFamily:"righteous"}}>Air Conditions</div>
                  <div className="col-sm-4"  style={{textAlign:"center", fontSize:"36px", fontWeight:"bold", color:"#F78628", fontFamily:"righteous"}}>Battery Life</div>
                </div> 
                <div className="spacer"> &nbsp; </div>

              <div className="row">
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOnline} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={badAir} className="img-fluid" alt="poor air conditions" /><img src={warning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={battery100} className="img-fluid" alt="battery 100%" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>

              <div className="row">
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOnline} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={goodAir} className="img-fluid" alt="poor air conditions" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={battery100} className="img-fluid" alt="battery 100%" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>
              
              <div className="row">
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOnline} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={goodAir} className="img-fluid" alt="good air conditions" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={battery75} className="img-fluid" alt="battery 75%" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>

              <div className="row">
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOnline} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={goodAir} className="img-fluid" alt="good air conditions" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={battery50} className="img-fluid" alt="battery 50%" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>
              
              <div className="row">
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOnline} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={goodAir} className="img-fluid" alt="poor air conditions" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={battery25} className="img-fluid" alt="battery 25%" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>
              
              <div className="row">
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOnline} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={goodAir} className="img-fluid" alt="poor air conditions" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={batteryWarning} className="img-fluid" alt="battery warning" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>

              <div className="row">
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOffline} className="img-fluid" alt="device offline" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOffline} className="img-fluid" alt="device offline" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={batteryWarning} className="img-fluid" alt="battery offline" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>
              
              <div className="row">
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOffline} className="img-fluid" alt="device offline" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOffline} className="img-fluid" alt="device offline" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={batteryWarning} className="img-fluid" alt="battery offline" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>

              <div className="row">
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOffline} className="img-fluid" alt="device offline" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={deviceOffline} className="img-fluid" alt="device offline" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4" style={{textAlign:"center"}}><img src={batteryWarning} className="img-fluid" alt="battery offline" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>

                </div>
            </div>
        );
};

export default Employees;