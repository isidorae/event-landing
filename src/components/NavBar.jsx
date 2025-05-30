import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <small>29 de Junio 9.00 AM | Lugar por confirmar</small>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;