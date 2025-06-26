import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="d-flex flex-wrap wrap-text">
          <small className="font-size-xs">
            Viernes 
            <span className="font-bolder"> 27 de Junio </span>
             8.30 AM | 
             <span className="font-bolder"> Radisson Blu </span>
              Plaza El Bosque, Av. Manquehue Nte. 656, <span className="font-bolder"> Las Condes</span>, Santiago
          </small>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;