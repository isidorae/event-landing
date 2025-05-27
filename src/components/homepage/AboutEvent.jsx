import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AboutEvent() {

    return(
        <>
        <div className="second-banner-container">
            <div className='second-banner-opacity d-flex align-items-center justify-content-center'>
                <div className="hero-img-content">
                    <section className="d-flex flex-column align-items-center justify-content-center text-center">
                        <p className="font-size-md text-center text-white p-5">
                            Este evento reúne a los actores que están definiendo <span className="font-bolder">el nuevo estándar</span>.
                            Desde portales líderes como Portal inmobiliario, Toctoc, hasta referentes
                            en experiencia digital, marketing de alto impacto e inversión inmobiliaria.
                        </p>
                    </section>
                </div>
            </div>
        </div>
        </>
    )

}