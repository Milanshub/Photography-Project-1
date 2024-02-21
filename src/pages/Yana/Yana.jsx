import React from "react";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import yana1 from './yana1.jpeg';
import yana2 from './yana2.jpeg';
import yana3 from './yana3.jpeg';
import yana4 from './yana4.jpeg';
import yana5 from './yana5.jpeg';
import yana6 from './yana6.jpeg';
import yana7 from './yana7.jpeg';

function Yana(){
    return(
        <Container>
        <Row>
            <Col>
                <Image className="nicole-img" src={yana1} data-sizes="auto" fluid />
            </Col>
            <Col>
                <Image className="nicole-img" src={yana2} data-sizes="auto" fluid />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="nicole-img" src={yana3} data-sizes="auto" fluid />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="nicole-img" src={yana4} data-sizes="auto" fluid />
            </Col>
            <Col>
                <Image className="nicole-img" src={yana5} data-sizes="auto" fluid />
            </Col>
        </Row>
        <Row>
            <Col>
                <Image className="nicole-img" src={yana6} data-sizes="auto" fluid />
            </Col>
            <Col>
                <Image className="nicole-img" src={yana7} data-sizes="auto" fluid />
            </Col>
        </Row>
    </Container>
    )
}

export default Yana; 