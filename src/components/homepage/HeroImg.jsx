
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
                                    <h4 className="hero-img-title text-white">Tendencias, marketing, inversión y diferenciación: Todo lo que necesitas para transformar tu negocio.</h4>
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
        <div className="bg-dark p-3">
            <p className="m-0 text-white font-bold text-center">El corretaje inmobiliario está viviendo una <span className="red-font">trasformación</span> profunda.</p>
        </div>
        </>
    )
}
