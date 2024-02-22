import React from "react";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import boho1 from './boho1.jpeg';
import boho2 from './boho2.jpeg';
import boho3 from './boho3.jpeg';
import boho4 from './boho4.jpeg';
import boho5 from './boho5.jpeg';
import boho6 from './boho6.jpeg';
import boho7 from './boho7.jpeg';
import boho8 from './boho8.jpeg';
import boho9 from './boho9.jpeg';
import boho10 from './boho10.jpeg';


function Boho(){
    return(
        <Container>
            <Row>
                <Col>
                    <Image className="anya-img" src={boho1} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={boho2} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={boho3} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={boho4} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={boho5} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={boho6} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={boho7} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={boho8} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={boho9} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={boho10} data-sizes="auto" fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Boho; 