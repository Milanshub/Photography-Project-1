import React from "react";
import Container  from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Nicole1 from "./Nicole1.jpeg";
import Nicole2 from "./Nicole2.jpeg";
import Nicole3 from "./Nicole3.jpeg";
import Nicole4 from "./Nicole4.jpeg";
import Nicole5 from "./Nicole5.jpeg";
import Nicole6 from "./Nicole6.jpeg";
import Nicole7 from "./Nicole7.jpeg";
import Nicole8 from "./Nicole8.jpeg"; 
import Nicole9 from "./Nicole9.jpeg";
import Nicole10 from "./Nicole10.jpeg";




function Nicole(){
    return(
        <Container>
            <Row>
                <Col>
                    <Image className="nicole-img" src={Nicole1} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={Nicole2} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img" src={Nicole3} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={Nicole4} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img-5" src={Nicole5} data-sizes="auto"  />
                </Col>
                <Col>
                    <Image className="nicole-img" src={Nicole6} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img" src={Nicole7} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={Nicole8} data-sizes="auto" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="nicole-img" src={Nicole9} data-sizes="auto" fluid />
                </Col>
                <Col>
                    <Image className="nicole-img" src={Nicole10} data-sizes="auto" fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Nicole; 