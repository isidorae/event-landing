
import './home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HeroImg({ref}) {

    return(
        <>
         <div className="hero-img-container">
            <div className='hero-img-opacity d-flex align-items-center justify-content-center'>
                <div className="hero-img-content">
                    <section className="d-flex flex-column align-items-center justify-content-center text-center">
                        <Container>
                            <Row>
                                <Col>
                                    <img className="logo-event-name-transparent" src="./logo_nombre.png"/>
                                </Col>
                                <Col className="d-flex flex-column align-items-start justify-content-center">
                                    <h1 className="hero-img-title text-white">Tendencias, datos, experiencias. Todo lo que necesitas para transformar tu negocio.</h1>
                                    <button className="btn btn-light m-2" onClick={() => ref.current?.scrollIntoView({
                                        behavior: 'smooth'
                                    })}>
                                        INSCRÍBETE
                                    </button>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}
