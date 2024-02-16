import React from "react";
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Retouching1 from "./retouching1.jpg";
import Retouching2 from "./retouchin2.jpeg";
import Retouching3 from "./retouching3.jpeg";
import Retouching4 from "./retouching4.jpeg";
import Retouching5 from "./retouching5.jpeg";


function Retouching(){
    return(
        <div className="retouching-div">
            <Container className="retouching-container">
                <Row className="retouching-row">
                    <Col><Image className="retouching-img" src={Retouching1} data-sizes="auto" fluid /> </Col>
                </Row>
                <Row className="retouching-row">
                    <Col><Image className="retouching-img" src={Retouching2} data-sizes="auto" fluid /> </Col>
                </Row>
                <Row className="retouching-row">
                    <Col><Image className="retouching-img" src={Retouching3} data-sizes="auto" fluid /> </Col>
                </Row>
                <Row className="retouching-row">
                    <Col><Image className="retouching-img" src={Retouching4} data-sizes="auto" fluid /> </Col>
                </Row>
                <Row className="retouching-row">
                    <Col><Image className="retouching-img" src={Retouching5} data-sizes="auto" fluid /> </Col>
                </Row>
            </Container>
        </div>
    );

};

export default Retouching; 

