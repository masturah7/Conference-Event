import React, { useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CTA = () => {
    useEffect(() => {const script = document.createElement("script");
    script.src = "https://cdn.logwork.com/widget/countdown.js";
    script.async = true;
    document.body.appendChild(script);
    return ()=> {
        document.body.removeChild(script);
    };}, []);
    
  return (
    <div>
      <Container fluid className="p-5 bg-primary text-white ">
        <Row>
        <Col xs={12}  lg={6}>
<script src="https://cdn.logwork.com/widget/countdown.js"></script>
<a href="https://logwork.com/countdown-acth" className="countdown-timer" data-style="flip" data-timezone="Africa/Lagos" data-textcolor="#ffffff" data-date="2026-02-28 09:00" data-background="" data-digitscolor="#f7f4f4" data-unitscolor="#ffffff">Countdown To D-day</a></Col>
    
        <Col xs={12} lg={6} className="text-white ps-5 border-start border-white">
        <h6 className='text-uppercase opacity-75 mb-2'>Catalyst X 2026</h6>
        <h2 className='fw-bold mb-0'>From Ideas to Implementation: Scaling African-Led Solutions for Global Impact.

</h2>

        </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default CTA
