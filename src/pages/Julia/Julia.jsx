import React from "react";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import julia1 from './julia1.jpeg';
import julia2 from './julia2.jpeg';
import julia3 from './julia3.jpeg';
import julia4 from './julia4.jpeg';
import julia5 from './julia5.jpeg';
import julia6 from './julia6.jpeg';
import julia7 from './julia7.jpeg';
import julia8 from './julia8.jpeg';


function Julia(){
    return(
        <Container>
            <Row>
                <Col>
                    <Image className="nicole-img" src={julia1} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={julia2} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img" src={julia3} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={julia4} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img" src={julia5} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={julia6} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img" src={julia7} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={julia8} data-sizes="auto" fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Julia; 