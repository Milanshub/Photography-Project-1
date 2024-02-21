import React from "react";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import anya1 from './anya1.jpeg';
import anya2 from './anya2.jpeg';
import anya3 from './anya3.jpeg';
import anya4 from './anya4.jpeg';
import anya5 from './anya5.jpeg';
import anya6 from './anya6.jpeg';
import anya7 from './anya7.jpeg';
import anya8 from './anya8.jpeg';
import anya9 from './anya9.jpeg';
import anya10 from './anya10.jpeg';

function Anya(){
    return(
        <Container>
            <Row>
                <Col>
                    <Image className="anya-img" src={anya1} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={anya2} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={anya3} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={anya4} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={anya5} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={anya6} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={anya7} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={anya8} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={anya9} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={anya10} data-sizes="auto" fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Anya; 