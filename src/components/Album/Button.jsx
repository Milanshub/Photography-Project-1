// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function handleClick(){
  alert("Love you babe!")
}

function ButtonExample() {
  return (
    <><Container className="btn-outer-section">
        <Row className='btn-inner-section'>
         <Col className='btn-col'>
            <button className="btn" onClick={handleClick} >ORDER</button>
         </Col>
        </Row>
    </Container>
    </>
  );
}

export default ButtonExample;



