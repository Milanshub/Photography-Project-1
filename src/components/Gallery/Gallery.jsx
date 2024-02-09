import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gallery(){
    return (
        <Container>
          <Row>
            <Col className='col-1'>Portrait</Col>
            <Col className='col-1'>Campaign</Col>
            <Col className='col-1'>Retouching</Col>
          </Row>
        </Container>
      );
}

export default Gallery; 