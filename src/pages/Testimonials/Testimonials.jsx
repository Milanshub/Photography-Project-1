import React from "react";
import  Image  from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TestimonialIcon from "./speech-bubble-icon.png";


function Testimonials(){
    return(
    <Container className="testimonials-container">
          <Row>
            <Col>
            <Image className="testimonials-img" src={TestimonialIcon} data-sizes="auto" fluid />   
            <p className="testimonials-p">No feedback yet, you will be the first!</p> 
            </Col>
        </Row>
        <Row>
            <Col>
                <button className="btn-testimonials">LEAVE FEEDBACK</button>
            </Col>
        </Row>
    
    </Container>
    )
      
}

export default Testimonials; 