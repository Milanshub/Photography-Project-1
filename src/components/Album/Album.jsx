import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image  from "react-bootstrap/Image";
import Angelica1 from "./Angelica 1 .jpeg";
import Angelica2 from "./Angelica2.jpeg"; 
import Angelica3 from "./Angelica3.jpeg"; 
import Angelica4 from "./Angelica4.jpeg";
import Angelica5 from "./Angelica5.jpeg";
import Angelica6 from "./Angelica6.jpeg"; 
import Angelica7 from "./Angelica7.jpeg"; 
import Angelica8 from "./Angelica8.jpeg"; 
import Angelica9 from "./Angelica9.jpeg"; 
import Angelica10 from "./Angelica10.jpeg"; 
import Angelica11 from "./Angelica11.jpeg"; 


function Album(){
    return (
        <Container  className='albm-outer-section'>
        <Row>
          <Col><Image className='vertical-photo' src={Angelica1}data-sizes="auto" fluid /></Col>
          <Col><Image className='vertical-photo' src={Angelica2}data-sizes="auto" fluid /></Col>
        </Row>
        <Row>
          <Col><Image className='vertical-photo' src={Angelica3}data-sizes="auto" fluid /></Col>
          <Col><Image className='vertical-photo' src={Angelica4}data-sizes="auto" fluid /></Col>
        </Row>
        <Row>
         <Col ><Image className='horizontal-photo' src={Angelica5}data-sizes="auto" fluid /></Col>
        </Row>
        <Row>
         <Col><Image className='vertical-photo' src={Angelica6}data-sizes="auto" fluid /></Col>
         <Col><Image className='vertical-photo' src={Angelica7}data-sizes="auto" fluid /></Col>
        </Row>
        <Row>
         <Col><Image className='vertical-photo' src={Angelica8}data-sizes="auto" fluid /></Col>
         <Col><Image className='vertical-photo' src={Angelica9}data-sizes="auto" fluid /></Col>
        </Row>
        <Row>
         <Col><Image className='vertical-photo-chng'  src={Angelica10}data-sizes="auto" fluid /></Col>
         <Col><Image className='vertical-photo' src={Angelica11}data-sizes="auto" fluid /></Col>
        </Row>
      </Container>
    )
}

export default Album; 