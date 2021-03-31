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

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
    <div style={{position:"sticky", backgroundColor:"#EDE4D5", borderRadius:"20px", left: "100px", width: "1250px"}}>
        <Container>
            <Row>
                <Col style={{position: "absolute", fontSize: "70px", fontWeight: "100", color: "#5554A4", left: "53px", top:"28px", fontFamily: "gill sans"}}>HOME PAGE</Col>
                <img src={home} style={{position: "absolute", left: "460px", top: "40px"}} ></img>

                <Form inline style={{position: "absolute", left:"885px", top: "60px"}}>
                    <FormControl type="text" placeholder="looking for..." className="mr-sm-2"/>
                    <Button variant="light" style={{backgroundColor: "#5554A4", color: "#ffffff", borderColor: "#5554A4"}}>search</Button>
                </Form>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>

                <Dropdown style={{position: "absolute", left:"68px", top: "133px"}}>                
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic" style={{color:"#5554A4", borderColor:"#ffffff00"}}>
                        buildings
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/bldg-1">Chemicals Storage Building</Dropdown.Item>
                        <Dropdown.Item href="#/bldg-2">New Physics Building</Dropdown.Item>
                        <Dropdown.Item href="#/bldg-3">Olympia Centre</Dropdown.Item>
                        <Dropdown.Item href="#/bldg-3">Human Resources Building</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
                <Dropdown style={{position: "absolute", left:"185px", top: "133px"}}>
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic" style={{color:"#5554A4", borderColor:"#ffffff00"}}>
                        floors
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/floor-1">1st floor</Dropdown.Item>
                        <Dropdown.Item href="#/floor-2">2nd floor</Dropdown.Item>
                        <Dropdown.Item href="#/floor-3">3rd floor</Dropdown.Item>
                        <Dropdown.Item href="#/floor-4">4th floor</Dropdown.Item>
                        <Dropdown.Item href="#/floor-5">5th floor</Dropdown.Item>
                        <Dropdown.Item href="#/floor-6">6th floor</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown><div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
                <div className="spacer" > &nbsp; </div>
                <Dropdown style={{position: "absolute", left:"275px", top: "133px"}}>
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic" style={{color:"#5554A4", borderColor:"#ffffff00"}}>
                        sensors
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/snsr-1">sensor 1</Dropdown.Item>
                        <Dropdown.Item href="#/snsr-2">sensor 2</Dropdown.Item>
                        <Dropdown.Item href="#/snsr-3">sensor 3</Dropdown.Item>
                        <Dropdown.Item href="#/snsr-4">sensor 4</Dropdown.Item>
                        <Dropdown.Item href="#/snsr-5">sensor 5</Dropdown.Item>
                        <Dropdown.Item href="#/snsr-6">sensor 6</Dropdown.Item>
                        <Dropdown.Item href="#/snsr-7">sensor 7</Dropdown.Item>
                        <Dropdown.Item href="#/snsr-8">sensor 8</Dropdown.Item>
                        <Dropdown.Item href="#/snsr-9">sensor 9</Dropdown.Item>
                        <Dropdown.Item href="#/snsr-10">sensor 10</Dropdown.Item>
                        <Dropdown.Item href="#/snsr-11">sensor 11</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>

            <Row>
                <img src={map} className="rounded" style={{position: "sticky", left: "168px", width: "1120px", height: "660px"}} ></img>
                <div className="spacer" > &nbsp; </div>

            </Row>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>

        </Container>
    </div>
    );
};

export default Home;

