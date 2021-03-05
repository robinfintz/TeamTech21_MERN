import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const Settings = () => {
        return (
        <div>
            <Container>
              <Row>
                  <Col style={{textAlign: "center", fontSize: "300%", fontWeight: "bold"}}>Settings</Col>
              </Row>
              <div className="spacer" > &nbsp; </div>
              <div className="spacer" > &nbsp; </div>
              <div className="spacer" > &nbsp; </div>
              <Row>
              <Col>Hi</Col>
              <Col>Hi</Col>
                </Row>
            </Container>
        </div>
        );
};

export default Settings;