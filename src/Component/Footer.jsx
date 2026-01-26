import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Footer = () => {

    useEffect(() => {const script = document.createElement("script");
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;
    document.body.appendChild(script);
    return ()=> {
        document.body.removeChild(script);
    };}, []);

  return (
    <Container fluid className=' text-white '>
      <Row className='foot   p-5'>
        <Col>
        <h2>Catalyst X Conference 2026</h2>
        <p><strong>Theme:</strong> From Ideas to Implementation: <br/>Scaling African-Led Solutions for Global Impact.
        </p>
        </Col>
        <Col>
        <h2>Contact</h2>
        <p><strong>Date:</strong> 28 February 2026</p>
        <p><strong>Venue:</strong> Landmark Event Center, Victoria Island, Lagos.</p>
        <p><strong>Email:</strong> catalystx@gmail.com</p>
        <p><strong>Phone:</strong> +2349021020191</p>
        </Col>
        <Col >
        
<a href="https://logwork.com/countdown-acth" className="countdown-timer" data-style="flip" data-timezone="Africa/Lagos" data-textcolor="#ffffff" data-date="2026-02-28 09:00" data-background="" data-digitscolor="#f7f4f4" data-unitscolor="#ffffff">Countdown To D-day</a>
        </Col>
      </Row>
      <Row>
          <Col className='footer text-center py-3 bg-black'>
          <p>&copy; 2026 Catalyst X Conference. All rights reserved.</p>
           </Col>
      </Row>
    </Container>
  )
}

export default Footer
