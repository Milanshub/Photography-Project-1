import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header(){
    return (
      <Navbar expand="lg" className="navbar-header">
          <Container className='navbar-header-inner'>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#main">Main</Nav.Link>
                <NavDropdown title="Gallery" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Portrait
                  </NavDropdown.Item>
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
        </Navbar>
  
      );
   
    

}

export default Header; 
