import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Registration = () => {
  return (
    <Container id="register" fluid className='py-5  text-center text-white'>
       <Row className="registeration">
        <Col>
        
        <h2>Be Part of the Future</h2>
        <p>Catalyst X Conference brings together minds that move industries forward.<br/>
Don’t just watch the future — help shape it.</p>

<a href="https://docs.google.com/forms/d/e/1FAIpQLSf9-5q2_AIyziNB5ZH3obfCjrsaB5k830ER21eOrhj4hAa82A/viewform?usp=publish-editor"><button style={{backgroundColor:'#007bff', color:'white', padding:'10px 20px', border:'none', borderRadius:'5px', cursor:'pointer'}}>Register Now</button></a>
        </Col>
       </Row>
    </Container>
  )
}

export default Registration
