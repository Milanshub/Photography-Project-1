import React from "react";
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AmericanDream1 from "./AmericanDream1.jpeg";
import LolaAdu from "./LolaAdu1.jpeg"; 

function Commercial(){
    return(
    <div className="commercial-div">
        <Container className="commercial-container">
            <Row className="commerical-row">
                <Col><Image className="commercial-img" src={LolaAdu} data-sizes="auto" fluid />  </Col>
                <Col><Image className="commercial-img" src={AmericanDream1} data-sizes="auto" fluid /> </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Commercial; 