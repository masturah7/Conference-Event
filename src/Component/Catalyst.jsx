import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import audience from '../assets/audience.jpg';

function Catalyst() {
  return (
    <Container className='py-5'>
      <Row className='align-items-center'>
        

        
    <h3>WHY CATALYST X
</h3>
    <h4>Why Attend Catalyst X?
</h4>

    <p>Catalyst X is designed for people who want more than motivation — people who want direction, strategy, and results.
</p>

    <p>Hosted in the heart of Lagos, Nigeria’s commercial and creative capital, At Catalyst X, you will:</p>

    <ul>
      <li>Gain insights from proven industry leaders</li>
      <li>Understand emerging trends shaping Africa’s future</li>
      <li>Learn practical strategies you can apply immediately</li>
      <li>Build high-value connections across industries</li>
      <li>Position yourself for growth, leadership, and opportunity
</li>
    </ul>
      </Row>
      <Row>
        
      </Row>
      <Container className='py-5'>
      <Row className='align-items-center'>
        

        <Col>
   <Col><img src= {audience} alt="Audience" width="100%" height="500px" style={{objectFit: 'cover'}}/></Col>
</Col>
      </Row>
      <Row>
        
      </Row>
    </Container>
    </Container>

    
  );
}

export default Catalyst;