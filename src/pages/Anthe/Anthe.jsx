import React from "react";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import anthe1 from "./anthe1.jpeg"; 
import anthe2 from "./anthe2.jpeg";
import anthe3 from './anthe3.jpeg';
import anthe4 from './anthe4.jpeg';
import anthe5 from './anthe5.jpeg';
import anthe6 from './anthe6.jpeg';
import anthe7 from './anthe7.jpeg';
import anthe8 from './anthe8.jpeg';
import anthe9 from './anthe9.jpeg';
import anthe10 from './anthe10.jpeg';



function Anthe(){
    return(
        <Container>          
            <Row>
                <Col>
                    <Image className="anthe-img" src={anthe1} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anthe-img" src={anthe2} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anthe-img" src={anthe3} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anthe-img" src={anthe4} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anthe-img" src={anthe5} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anthe-img" src={anthe6} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anthe-img" src={anthe7} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anthe-img" src={anthe8} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anthe-img" src={anthe9} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anthe-img" src={anthe10} data-sizes="auto" fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Anthe; 