import React from "react";
import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import services1 from "./services1.jpeg";
import services2 from "./services2.jpeg";
import services3 from "./services3.jpeg";
import services4 from "./services4.jpeg";
import  Image  from "react-bootstrap/Image";


function Services(){
    return(
        <div className="services-div">
            <Container className="services-container">
                <Row className="services-row">
                    <Col className="services-col-header">
                        <h1>Rates for different types of photoshoot.</h1>
                        <p>Here you can see more information about price and service.</p>
                    </Col>
                </Row>
                <Row className="services-row">
                    <Col>
                        <h2>Private portrait</h2>
                        <ul>
                            <li>Consulting before the photoshoot</li>
                            <li>1.5 hours of photoshoot</li>
                            <li>12 retouched photos</li>
                            <li>All orignal photos</li>
                            <li>Professional advice on best locations</li>
                            <li>Fashion tips</li>
                            <li>Posing tips</li>
                            <li>Prefessionaly made reel for Instagram</li>
                        </ul>
                    </Col>
                    <Col><Image className="services-img" src={services1} data-sizes="auto" fluid /> </Col>
                </Row>
                <Row className="services-row">
                    <Col>
                        <h2>Lookbook for brand</h2>
                        <ul>
                            <li>Consulting before the photoshoot</li>
                            <li>From 3 hours</li>  
                            <li>All orignal photos</li>
                            <li>30 photos in color correction*</li>
                            <li>Professional advice on best locations</li>
                            <li>I’ll find professional models, if necessary</li>
                        </ul>
                        <p className="services-p">*it's possible to make more photos in color correction.  </p>
                    </Col>
                    <Col><Image className="services-img" src={services2} data-sizes="auto" fluid /></Col>
                </Row>
                <Row className="services-row">
                    <Col>
                        <h2>Family and repoortage</h2>
                        <ul>
                            <li>Consulting before the photoshoot</li>
                            <li>1.5 hours of photoshoot</li>
                            <li>Retouched photos</li>
                            <li>All original photos</li>
                            <li>Professional advice on best locations</li>
                            <li>Posing tips</li>
                        </ul>
                    </Col>
                    <Col><Image className="services-img" src={services3} data-sizes="auto" fluid /></Col>
                </Row>
                <Row className="services-row">
                    <Col>
                        <h2 className="services-retouching">Retouching</h2>
                    </Col>
                    <Col><Image className="services-img" src={services4} data-sizes="auto" fluid /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services; 