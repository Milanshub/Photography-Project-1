import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import whatssapp from "./whatsapp-24.png"
import instagram from './2515843_black and white_dark grey_instagram_icon.png'
import { useState, useEffect } from 'react';

// import { Link } from "react-router-dom";



function Header(){
  const[Sticky, setSticky] = useState(false);

  function handleScroll(){
    setSticky(window.scrollY>0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
   <Navbar    className={`navbar ${Sticky ? 'sticky' : ''}`}
   expand="lg"
   sticky="top"
   style={{ backgroundColor: Sticky ? 'white' : 'white' }}>
   
          <Container className='h-100'>
            <Navbar.Brand  className='nav-h' href="https://www.instagram.com/likakambur">
              <img src={instagram} className='icon' alt='whatsapp-icon' />
            </Navbar.Brand>
            <Navbar.Brand className='nav-h'  href="https://wa.me/34607313733">
              <img src={whatssapp} className='icon' alt='whatsapp-icon' />
            </Navbar.Brand>
            <Navbar.Toggle className='nav-h'  aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='nav-h'  id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">MAIN</Nav.Link>
                <NavDropdown title="GALLERY" id="basic-nav-dropdown">
                  <Nav.Link href="/portrait" activeStyle>Portrait </Nav.Link>
                  <Nav.Link href="/commercial" activeStyle> Commercial</Nav.Link>
                  <Nav.Link href="/retouching" activeStyle> Retouching</Nav.Link>
                </NavDropdown>
                <Nav.Link href="/services">SERVICES</Nav.Link>
                <Nav.Link href="/testimonials">TESTIMONIALS</Nav.Link>
                <Nav.Link href="/contacts">CONTACTS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

)
}

export default Header; 
