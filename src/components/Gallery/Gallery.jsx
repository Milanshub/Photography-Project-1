import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';



function Gallery(){
    return (
        <Container className='gallery-container' >
          <Row className="gallery-row">
            <Col className='col-1'>  
            <div className='gallery-div'>
             <h2  className='gallery-h2 portrait'>Portrait</h2>
                <button className='gallery-btn'>
                 <Link className='link-gallery' to="/portrait" >
                   more
                </Link>
                </button> 
              </div>
            </Col>
            <Col className='col-1'>
              <di>
              <h2  className='gallery-h2 campaign'>Campaign</h2>
              <button className='gallery-btn' >
                <Link className='link-gallery' to="/commercial" >
                   more
                </Link>
              </button>
             </di>
            </Col>    
            <Col className='col-1'>
              <div> 
               <h2 className='gallery-h2 retouching'>Retouching</h2>
               <button className='gallery-btn'>
               <Link className='link-gallery' to="/retouching" >
                   more
                </Link>
               </button>
              </div>
            </Col>        
          </Row>
        </Container>
      );
};

export default Gallery; 