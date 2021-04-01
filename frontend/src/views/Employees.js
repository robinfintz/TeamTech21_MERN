import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles.css'
import battery100 from '../symbols/battery-100.jpg'
import battery75 from '../symbols/battery-75.jpg'
import battery50 from '../symbols/battery-50.jpg'
import battery25 from '../symbols/battery-25.jpg'
import batteryWarning from '../symbols/battery-warning.jpg'
import batteryOffline from '../symbols/battery-offline.jpg'
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
                  <div className="col-lg" className="purp">Employees</div>
                </div>
              <div className="spacer"> &nbsp; </div>
             
              <div className="row">
                  <div className="col-sm-4" className="orange">Device</div>
                  <div className="col-sm-4" className="orange">Air Conditions</div>
                  <div className="col-sm-4" className="orange">Battery Life</div>
                </div> 
                <div className="spacer"> &nbsp; </div>

              <div className="row">
                  <div className="col-sm-4"><img src={deviceOnline} className="image" className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={badAir} className="image" className="img-fluid" alt="poor air conditions" /><img src={warning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={battery100} className="image" className="img-fluid" alt="battery 100%" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>

              <div className="row">
                  <div className="col-sm-4"><img src={deviceOnline} className="image" className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={goodAir} className="image" className="img-fluid" alt="poor air conditions" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={battery100} className="image" className="img-fluid" alt="battery 100%" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>
              
              <div className="row">
                  <div className="col-sm-4"><img src={deviceOnline} className="image" className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={goodAir} className="image" className="img-fluid" alt="good air conditions" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={battery75} className="image" className="img-fluid" alt="battery 75%" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>

              <div className="row">
                  <div className="col-sm-4"><img src={deviceOnline} className="image" className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={goodAir} className="image" className="img-fluid" alt="good air conditions" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={battery50} className="image" className="img-fluid" alt="battery 50%" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>
              
              <div className="row">
                  <div className="col-sm-4"><img src={deviceOnline} className="image" className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={goodAir} className="image" className="img-fluid" alt="poor air conditions" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={battery25} className="image" className="img-fluid" alt="battery 25%" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>
              
              <div className="row">
                  <div className="col-sm-4"><img src={deviceOnline} className="image" className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={goodAir} className="image" className="img-fluid" alt="poor air conditions" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={batteryWarning} className="image" className="img-fluid" alt="battery warning" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>

              <div className="row">
                  <div className="col-sm-4"><img src={deviceOffline} className="image" className="img-fluid" alt="device offline" /></div>
                  <div className="col-sm-4"><img src={deviceOffline} className="image" className="img-fluid" alt="device offline" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={batteryOffline} className="image" className="img-fluid" alt="battery offline" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>
              
              <div className="row">
                  <div className="col-sm-4"><img src={deviceOffline} className="image" className="img-fluid" alt="device offline" /></div>
                  <div className="col-sm-4"><img src={deviceOffline} className="image" className="img-fluid" alt="device offline" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={batteryOffline} className="image" className="img-fluid" alt="battery offline" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>

              <div className="row">
                  <div className="col-sm-4"><img src={deviceOffline} className="image" className="img-fluid" alt="device offline" /></div>
                  <div className="col-sm-4"><img src={deviceOffline} className="image" className="img-fluid" alt="device offline" /><img src={noWarning} className="img-fluid" alt="online" /></div>
                  <div className="col-sm-4"><img src={batteryOffline} className="image" className="img-fluid" alt="battery offline" /></div>
                </div>
                <div className="spacer"> &nbsp; </div>

                </div>
            </div>
        );
};

export default Employees;

/*  working on css here just in case something happens in the css file 

  .orange {
    position: relative;
    text-align: center;
    width: 100%;
    font-size: 250%;
    font-weight: bold;
    color: #F78628;
    font-family:  Righteous;
  }

  .image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

*/  


// style={{textAlign:"center", fontSize:"64px", fontWeight:"bold", color:"#5554A4", fontFamily:"righteous"}} was orig inline css for the title, for reference
// style={{textAlign:"center", fontSize:"36px", fontWeight:"bold", color:"#F78628", fontFamily:"righteous"}} orig css for the headers of the columns, for reference