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
        <Col>
<script src="https://cdn.logwork.com/widget/countdown.js"></script>
<a href="https://logwork.com/countdown-acth" className="countdown-timer" data-style="flip" data-timezone="Africa/Lagos" data-textcolor="#ffffff" data-date="2026-02-28 09:00" data-background="" data-digitscolor="#f7f4f4" data-unitscolor="#ffffff">Countdown To D-day</a></Col>
    
        <Col className="text-white ps-5 border-start border-white">
        <h3>Catalyst X Conference 2026</h3>
        <h5>From Ideas to Implementation: Scaling African-Led Solutions for Global Impact.

</h5>

        </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default CTA
