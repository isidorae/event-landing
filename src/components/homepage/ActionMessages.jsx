import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ActionMessages() {

    return(
        <>
            <div>
                <Container>
                    <Row className="font-size-md m-5 d-flex flex-wrap">
                        <Col xs={12} md={4} className="d-flex flex-column align-items-center justify-content-center p-2">
                            <p className="font-bolder">TECNOLOGIA</p>
                            <p className="text-center">La tecnología cambia cómo vendemos.</p>
                        </Col>
                        <Col xs={12} md={4}  className="d-flex flex-column align-items-center justify-content-center p-2">
                            <p className="font-bolder">MARKETING</p>
                            <p className="text-center">El marketing cambia cómo nos posicionamos.</p> 
                        </Col>
                        <Col xs={12} md={4} className="d-flex flex-column align-items-center justify-content-center p-2">
                            <p className="font-bolder">USER EXPERIENCE</p>
                            <p className="text-center">La experiencia de cliente cambia cómo nos recomiendan.</p>
                        </Col>
                    </Row>
                </Container>
                <div className="bg-dark p-3">
                    <p className="m-0 text-white font-bold text-center text-center">Porque el futuro no lo ganan los más grandes, sino los que mejor se <span className="red-font">adaptan</span>.</p>
                </div>
            </div>
        </>
    )

}