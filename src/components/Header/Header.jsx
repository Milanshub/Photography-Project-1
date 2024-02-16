import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import { Link } from "react-router-dom";



function Header(){
  return(
  <>
  <div>
   <Navbar expand="lg" className="navbar-header">
          <Container className='navbar-header-inner'>
            <Navbar.Brand href="/">Likakambur Gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">MAIN</Nav.Link>
                <NavDropdown title="GALLERY" id="basic-nav-dropdown">
                  <Nav.Link href="/portrait" activeStyle>Portrait </Nav.Link>
                  <Nav.Link href="/commercial" activeStyle> Commercial</Nav.Link>
                  <Nav.Link href="/retouching" activeStyle> Retouching</Nav.Link>
                </NavDropdown>
                <Nav.Link href="/services">SERVICES</Nav.Link>
                <Nav.Link href="#testimonials">TESTIMONIALS</Nav.Link>
                <Nav.Link href="#contacts">CONTACTS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
</div>
</>)
}

export default Header; 
