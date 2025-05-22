import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <small>29 de Junio 9.00 AM, <span className="font-bolder">Hotel Hyatt</span>, Vitacura</small>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;