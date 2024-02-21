import React from "react";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import anna1 from './anna1.jpeg';
import anna2 from './anna2.jpeg';
import anna3 from './anna3.jpeg';
import anna4 from './anna4.jpeg';
import anna5 from './anna5.jpeg';


function Anna(){
    return(
        <Container>
            <Row>
                <Col>
                    <Image className="nicole-img" src={anna1} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={anna2} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img" src={anna3} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={anna4} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={anna5} data-sizes="auto" fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Anna; 