import React from "react";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import sofia1 from './sofia1.jpeg';
import sofia2 from './sofia2.jpeg';
import sofia3 from './sofia3.jpeg';
import sofia4 from './sofia4.jpeg';
import sofia5 from './sofia5.jpeg';
import sofia6 from './sofia7.jpeg';
import sofia7 from './sofia7.jpeg';
import sofia8 from './sofia8.jpeg';
import sofia9 from './sofia9.jpeg';
import sofia10 from './sofia10.jpeg';


function Sofia(){
    return(
        <Container>
            <Row>
                <Col>
                    <Image className="nicole-img" src={sofia1} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={sofia2} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img" src={sofia3} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={sofia4} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img" src={sofia5} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={sofia6} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img" src={sofia7} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={sofia8} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img" src={sofia9} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={sofia10} data-sizes="auto" fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Sofia; 