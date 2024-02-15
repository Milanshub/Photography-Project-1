// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { useState } from "react";
import { Link } from "react-router-dom";



function Header(){

   const [show, setShow]= useState(false);


    return (
    <>
    <div className="nav-bar">
      <h3>
        Likakambur Gallery
      </h3>
      <ul className="main-menu">
         <li>Main</li>
         
         <li>
         <div onClick={()=> setShow(!show)}>Gallery</div>
         {show && (
          <ul className="drop-down" onClick={()=> setShow(false)}>
            <li><Link to="/portrait"> Portrait </Link></li>
            <li>Commercial</li>
            <li>Retouching</li>
           </ul>
         )
         }
          </li> 
      
         <li>Services</li>
         <li>Testimonials</li>
         <li>Contacts</li>
      </ul>
    </div>
    {/* <Navbar expand="lg" className="navbar-header">
          <Container className='navbar-header-inner'>
            <Navbar.Brand href="#home">Likakambur Gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#main">Main</Nav.Link>
                <NavDropdown title="Gallery" id="basic-nav-dropdown">
                  <Nav.Link href="">Services</Nav.Link>
                  <Nav.Link href="/portrait" activeStyle> Portrait </Nav.Link>
                  <NavDropdown.Item href="#action/3.3">Commercial</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Retouching
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                <Nav.Link href="#contacts">Contacts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}


        {/* <Outlet /> */}
        </>
     
  
      );
   
    

}

export default Header; 
