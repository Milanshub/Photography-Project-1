import React from "react"
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import dream1 from './dream1.jpeg';
import dream2 from './dream2.jpeg';
import dream3 from './dream3.jpeg';
import dream4 from './dream5.jpeg';
import dream5 from './dream5.jpeg';
import dream6 from './dream6.jpeg';
import dream7 from './dream8.jpeg';
import dream8 from './dream8.jpeg';
import dream9 from './dream9.jpeg'; 
import dream10 from './dream10.jpeg';



function AmericanDream(){
    return(
        <Container>
            <Row>
                <Col>
                    <Image className="anya-img" src={dream1} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={dream2} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={dream3} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={dream4} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={dream5} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={dream6} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={dream7} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={dream8} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="anya-img" src={dream9} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="anya-img" src={dream10} data-sizes="auto" fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default AmericanDream; 