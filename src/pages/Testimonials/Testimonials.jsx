import React from "react";
import  Image  from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TestimonialIcon from "./speech-bubble-icon.png";
import PopupForm from "./PopupForm";
import { useState } from "react";   


function Testimonials(){

    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

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
                <button className="btn-testimonials"
                onClick={openPopup}>
                    LEAVE FEEDBACK
                </button>

                <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
            </Col>
        </Row>
    
    </Container>
    )
      
}

export default Testimonials; 