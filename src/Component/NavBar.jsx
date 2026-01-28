import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  logo from '../assets/catalyst-X.png';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-black sticky">
      <Container>
        <Navbar.Brand href="#home">
            <img src = {logo} alt="Logo  " height="80px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#catalyst">Why CatalystX</Nav.Link>
            <Nav.Link href="#speakers">Speakers</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;