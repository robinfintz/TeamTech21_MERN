import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';


const Setup = () => {
    return (   
    <div>
        <Container>
        {/* <div className = "purp">HELLO THERE</div> */}
        <div className = "rectangle">
            
            <Row>
                <Row><div className = "purp" style = {{position: "absolute", left: "50px", top: "120px"}}>SENSOR SETUP</div></Row>

                <Form inline>
                    <Col><Button className = "circle" variant="dark" style = {{borderColor: "#ffa305", fontWeight: "bold", alignContent: "center"}}>+</Button></Col>
                    <Col><div className="spacer" > &nbsp; </div></Col>
                    <Col><Button className = "circle" variant="dark" style = {{borderColor: "#ffa305", fontWeight: "bold", alignContent: "center"}}>-</Button></Col>
                </Form>

                <Form inline style={{position: "absolute", left:"735px", top: "150px"}}>
                    <FormControl type="text" placeholder="looking for..." className="mr-sm-2"/>
                    <Button variant="light" style={{backgroundColor: "#5554A4", color: "#ffffff", borderColor: "#5554A4"}}>search</Button>
                </Form>
            </Row>
            
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>
       


            

            <Row style = {{position: "absolute", left: "500", top: "100"}}>
                <table  border = "1" cellpadding = "10" width = "964">
                    <tr align = "center">
                        <th className= "black">
                            <Dropdown.Toggle variant = "outline-light" id = "dropdown-basic" style={{color:"#5554A4", borderColor:"#ffffff00", fontSize: "25px"}}>Sensor Type</Dropdown.Toggle>
                        </th>
                        <th className= "black">
                            <Dropdown.Toggle variant = "outline-light" id = "dropdown-basic" style={{color:"#5554A4", borderColor:"#ffffff00", fontSize: "25px"}}>ID#/Name</Dropdown.Toggle>
                        </th>
                        <th className= "black">
                            <Dropdown.Toggle variant = "outline-light" id = "dropdown-basic" style={{color:"#5554A4", borderColor:"#ffffff00", fontSize: "25px"}}>Location/Status</Dropdown.Toggle>
                        </th>
                        <th className= "black">
                            <Dropdown.Toggle variant = "outline-light" id = "dropdown-basic" style={{color:"#5554A4", borderColor:"#ffffff00", fontSize: "25px"}}>Other Details</Dropdown.Toggle>
                        </th>
                    </tr>

                    <tr>
                        <td className= "black2">blank1</td>
                        <td className= "black2">blank2</td>
                        <td className= "black2">blank3</td>
                        <td className= "black2">blank4</td>
                    </tr>
                    <tr>
                        <td className= "black2">blank1</td>
                        <td className= "black2">blank2</td>
                        <td className= "black2">blank3</td>
                        <td className= "black2">blank4</td>
                    </tr>
                    <tr>
                        <td className= "black2">blank1</td>
                        <td className= "black2">blank2</td>
                        <td className= "black2">blank3</td>
                        <td className= "black2">blank4</td>
                    </tr>
                    <tr>
                        <td className= "black2">blank1</td>
                        <td className= "black2">blank2</td>
                        <td className= "black2">blank3</td>
                        <td className= "black2">blank4</td>
                    </tr>
                    <tr>
                        <td className= "black2">blank1</td>
                        <td className= "black2">blank2</td>
                        <td className= "black2">blank3</td>
                        <td className= "black2">blank4</td>
                    </tr>
                    <tr>
                        <td className= "black2">blank1</td>
                        <td className= "black2">blank2</td>
                        <td className= "black2">blank3</td>
                        <td className= "black2">blank4</td>
                    </tr>
                    <tr>
                        <td className= "black2">blank1</td>
                        <td className= "black2">blank2</td>
                        <td className= "black2">blank3</td>
                        <td className= "black2">blank4</td>
                    </tr>
                </table>
            </Row>
                
            </div>

            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>

        </Container>
        <a href = "https://www.tutorialspoint.com/html/html_forms.htm">HTML Form stuff (text input)</a>
    </div>
    );
};

export default Setup;

/*
.rectangle {
  width: 200px;
  height: 100px;
  background: #EDE4D5;
}

.magnifying-glass {
  font-size: 10em;
  display: inline-block;
  width: 0.4em;
  box-sizing: content-box;
  height: 0.4em;
  border: 0.1em solid black;
  position: relative;
  border-radius: 0.35em;
}
.magnifying-glass:before {
  content: "";
  display: inline-block;
  position: absolute;
  right: -0.25em;
  bottom: -0.1em;
  border-width: 0;
  background: black;
  width: 0.35em;
  height: 0.08em;
  transform: rotate(45deg);
}
*/