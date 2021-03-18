import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';


const Setup = () => {
    return (   
    <div>
        <Container>
        <div class = "rectangle">
            <Row>
                <Col style={
                    {position: "absolute",
                    width: "541px",
                    height: "105px",
                    left: "375px",

                    fontSize: "300%",
                    fontWeight: "bold",
                    color: "#5554A4",
                    fontFamily: "Righteous"}
                }>Sensor Setup</Col>
            </Row>
              
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>


                <table border = "1" cellpadding = "10" width = "1000">
                    <tr>
                        <th className={{fontSize:"300%"}}>Sensor Type</th>
                        <th>ID#/Name</th>
                        <th>Location/Status</th>
                        <th>Other Details</th>
                    </tr>

                    <tr>
                        <td>blank1</td>
                        <td>blank2</td>
                        <td>blank3</td>
                        <td>blank4</td>
                    </tr>
                </table>
            </div>

            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>
            <div className="spacer" > &nbsp; </div>

            <a href = "https://www.tutorialspoint.com/html/html_forms.htm">HTML Form stuff (text input)</a>
            
            
        </Container>
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