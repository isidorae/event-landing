import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <small>29 de Junio 9.00 AM, <span className="font-bolder">Hotel Hyatt</span>, Vitacura</small>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;