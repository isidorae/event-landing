import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AboutEvent() {

    return(
        <>
        <div>
            <Container>
                <Row className="d-flex align-items-center justify-content-center text-center m-5">
                    <Col>
                        <p className="text-align-justify font-size-lg">Este evento reúne a los actores que están definiendo el nuevo estándar:
                            Desde portales líderes como Portal inmobiliario, Toctoc, hasta referentes
                             en experiencia digital, marketing de alto impacto e inversión inmobiliaria.
                        </p>
                    </Col>
                    <Col>
                        <h1 className="about-event-text">IMG</h1>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )

}