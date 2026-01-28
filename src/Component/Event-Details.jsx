import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import present from "../assets/presentation.jpg";

const EventDetails = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <img
            src={present}
            alt="About"
            width="100%"
            height="500px"
            style={{ objectFit: "cover" }}
          />
        </Col>

        <Col xs={12} md={6} className="mt-4">
          <h6 className="text-muted mb-2">Catalyst X 2026</h6>

         <h4> Email </h4>
          <p> catalystx@gmail.com</p>

          <h4>Instagram</h4>
          <p>@catalystx</p>

          <h4>Venue</h4>
          <p>Landmark Event Center, Victoria Island, Lagos.</p>

          <h4>Newsletter</h4>
          <p>@catalystx</p>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetails;
