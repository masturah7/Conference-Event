import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import present from "../assets/presentation.jpg";

function About() {
  return (
    <Container id="about" className="py-5">
      <Row className="align-items-center">
        <Col xs={12}  md={6}>
          <img
            src={present}
            alt="About"
            width="100%"
            height="500px"
            style={{ objectFit: "cover" }}
          />
        </Col>

        <Col xs={12}  md={6} className="mt-4">
          <h6 className="text-muted mb-2">ABOUT THE CONFERENCE</h6>
          <h4>About Catalyst X Conference</h4>

          <p>
            Catalyst X Conference is a high-impact annual gathering focused on
            innovation, leadership, technology, and business growth in Africa.
          </p>

          <p>
            Hosted in the heart of Lagos, Nigeria’s commercial and creative
            capital, Catalyst X provides a platform for visionaries,
            professionals, entrepreneurs, and young leaders to exchange ideas,
            gain clarity, and build meaningful connections that drive real-world
            impact.
          </p>

          <p>
            This is not just a conference — it is a space for purposeful
            dialogue, strategic thinking, and forward movement.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
