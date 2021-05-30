import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import map from '../map.png'
import Vector5 from '../Vector5.png'
import Vector4 from '../Vector4.png'
import Vector1 from '../Vector1.png'
import Vector2 from '../Vector2.png'



const Location = () => {
        return (
        <div className="SensorUpdate">
            <Container>
            <div className = "roundRect" >
              <div className="spacer" > &nbsp; </div>
              <Row>
                  <div className="spacer" > &nbsp; </div>
                  <div className="spacer" > &nbsp; </div>
                  <hr className="border1"></hr>
                  <Col><div className="Bmap">BUILDING MAP</div></Col>
                  <hr className="border2"></hr>
                  <img src = {map} className="imageFormat"></img>
                  <Col></Col>
                  <Col></Col>
                  <Col><div className="selBuilding">Select bulding:</div></Col>
              </Row>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>

              <Row>
                  <img src ={Vector1} className="vector1"></img>
                  <Col><div className="style">Olympia Centre</div></Col>
              </Row>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
              <Row>
                  <img src ={Vector5} className="vector5"></img>
                  <Col><div className="style">229 E Erie St</div></Col>
              </Row>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
              <Row>
              <img src ={Vector4} className="vector4"></img>
                  <Col><div className="style">Chemical storage Building</div></Col>
              </Row>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
              <Row>
              <img src ={Vector2} className="vector2"></img>
                  <Col><div className="style">Human Resources Building</div></Col>
              </Row>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
              <Row>
              <img src ={Vector1} className="vector3"></img>
                  <Col><div className="style">Park Tower</div></Col>
              </Row>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
              <Row>
              <img src ={Vector5} className="vector6"></img>
                  <Col><div className="style">110 Superior St</div></Col>
              </Row>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
              </div>
            </Container>
        </div>
        );
};

export default Location;