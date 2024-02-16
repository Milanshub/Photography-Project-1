import React from "react";
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Anna1 from "./Anna1.jpeg";
import Anthe1 from "./Anthe1.jpeg";
import Anya from "./Anya1.jpeg";
import Nicole1 from "./Nicole1.jpeg";
import Julia1 from "./Julia1.jpeg";
import Sofia1 from "./Sofia1.jpeg";
import Yana1 from "./Yana1.jpeg";


function Portrait() {
    return (
        <div className="portrait-div">
            <Container className="portrait-contrainer">
                <Row className="portrait-row">
                    <Col><Image className="portrait-img" src={Anthe1} data-sizes="auto" fluid /></Col>
                    <Col><Image className="portrait-img" src={Nicole1} data-sizes="auto" fluid /> </Col>
                </Row>
                <Row className="portrait-row">
                    <Col><Image className="portrait-img" src={Anya} data-sizes="auto" fluid /> </Col>
                    <Col><Image className="portrait-img" src={Anna1} data-sizes="auto" fluid /> </Col>
                </Row>
                <Row className="portrait-row">
                    <Col><Image className="portrait-img" src={Sofia1} data-sizes="auto" fluid /> </Col>
                    <Col><Image className="portrait-img" src={Julia1} data-sizes="auto" fluid /> </Col>
                </Row>
                <Row className="portrait-row">
                    <Col><Image className="portrait-img" src={Yana1} data-sizes="auto" fluid /> </Col>
                </Row>
            </Container>
        </div>
    );
};
 
export default Portrait;