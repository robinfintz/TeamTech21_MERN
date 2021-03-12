import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';


const Setup = () => {
        return (
        <div>
            <Container>
              <Row>
                  <Col style={{textAlign: "left", fontSize: "300%", fontWeight: "bold", color: "#5554A4", fontFamily: "Righteous"}}>Setup</Col>
              </Row>
              <Row>
                  <Col style={{textAlign: "left", fontSize: "100%", fontWeight: "normal", color: "#000000", fontFamily: "Righteous"}}>Sensor Type</Col>
                  <Col style={{textAlign: "left", fontSize: "100%", fontWeight: "normal", color: "#000000", fontFamily: "Righteous"}}>ID#/Name</Col>
                  <Col style={{textAlign: "left", fontSize: "100%", fontWeight: "normal", color: "#000000", fontFamily: "Righteous"}}>Location/Status</Col>
                  <Col style={{textAlign: "left", fontSize: "100%", fontWeight: "normal", color: "#000000", fontFamily: "Righteous"}}>Other Details</Col>
              </Row>
              <div className="spacer" > &nbsp; </div>
              <div className="spacer" > &nbsp; </div>
              <div className="spacer" > &nbsp; </div>
              <Row>
                  <Col>According to all known laws of aviation, there is no way a bee should be able to fly.</Col>
                  <Col>Its wings are too small to get its fat little body off the ground.</Col>
                  <Col>The bee, of course, flies anyway because bees don't care what humans think is impossible.</Col>
                  <Col>Yellow, black. Yellow, black. Yellow, black. Yellow, black.</Col>
              </Row>

              <Row>
                    <a href = "https://www.youtube.com/watch?v=L_vnEHDjfZ8">CLICK ME--NOT A RICK ROLL!!</a>
              </Row>
            </Container>
        </div>
        );
};

export default Setup;