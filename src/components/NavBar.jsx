import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <small className="font-size-xs">Viernes 27 de Junio 9.00 AM | <span className="font-bolder">Hotel Radisson Blu</span>, Plaza El Bosque</small>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;