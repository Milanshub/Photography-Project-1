import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function handelMoreClick (){
  alert("Good Morning babe")
}

function Gallery(){
    return (
        <Container className='gallery-container' >
          <Row className="gallery-row">
            <Col className='col-1'>  
            <div className='gallery-div'>
             <h2  className='gallery-h2 portrait'>Portrait</h2>
              <button className='gallery-btn' 
              onClick={handelMoreClick}>more
              </button> 
              </div>
            </Col>
            <Col className='col-1'>
              <di>
              <h2  className='gallery-h2 campaign'>Campaign</h2>
              <button className='gallery-btn' 
               onClick={handelMoreClick}>more
              </button>
             </di>
            </Col>    
            <Col className='col-1'>
              <div> 
               <h2 className='gallery-h2 retouching'>Retouching</h2>
               <button className='gallery-btn' 
                onClick={handelMoreClick}>more</button>
              </div>
            </Col>        
          </Row>
        </Container>
      );
};

export default Gallery; 