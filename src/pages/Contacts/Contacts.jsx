import React from "react";
import  Image  from "react-bootstrap/Image";
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactsImg from "./contacts.jpeg";
import { Link } from "react-router-dom";



function Contacts(){
    return(
        <Container className="contacts-container">
            <Row className="contacts-row">
               <Col> <Image className="contacts-img" src={ContactsImg} data-sizes="auto" fluid /> </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="contacts-h1">Photographer in Marbella</h1>
                    <p className="contacts-p">For contacts</p>
                    <h3>+34 607 313 733</h3>
                </Col>
            </Row>
            <Row>
                <Col className="contacts-col">
                    <button className="btn-contacts" > 
                        <Link className="link-contacts" to="https://wa.me/34607313733" >
                            WHATSAPP
                        </Link>
                    </button>
                </Col>
            </Row>
            <Row>
                <Col className="contacts-col">
                    <button className="btn-contacts" >
                     <Link className="link-contacts" to="https://t.me/LikaLaz">
                        TELEGRAM 
                     </Link> 
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacts; 