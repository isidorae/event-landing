
import Button from 'react-bootstrap/Button';
export default function Speakers({ref}) {

    return(
        <>
        <div>
            <div className="bg-dark text-white d-flex flex-column align-items-center justify-content-center text-center py-5"> 
                <h2 className="font-bolder">SPEAKERS</h2>
                <div className="d-flex flex-wrap flex-row align-items-start justify-content-center p-5">
                    <section className="speaker-card d-flex flex-column align-items-center justify-content-center p-2">
                        <img className="speaker-img" src="./paula.png"/>
                        <p className="font-bolder mt-3">PAULA DÍAZ BURGOS</p>
                        <p>Subgerente Marketplace VIS, Portal Inmobiliario. El presente y futuro de los portales inmobiliarios</p>
                    </section>
                    <section className="speaker-card d-flex flex-column align-items-center justify-content-center p-2">
                        <img className="speaker-img" src="./ceo_fraccional.png"/>
                        <p className="font-bolder mt-3">TOMÁS CHARLES</p>
                        <p>CEO Fraccional, El presente y futuro del Marketing Inmobiliario</p>
                    </section>
                        <section className="speaker-card d-flex flex-column align-items-center justify-content-center p-2">
                        <img className="speaker-img" src="./gonzalo_uribe.png"/>
                        <p className="font-bolder mt-3">GONZALO URIBE</p>
                        <p>CCO Dataprop. Cómo diferenciarse en una industria que evoluciona rápido</p>
                    </section>
                    <section className="speaker-card d-flex flex-column align-items-center justify-content-center p-2">
                        <img className="speaker-img" src="./fco_ackerman.png"/>
                        <p className="font-bolder mt-3">FRANCISCO ACKERMANN</p>
                        <p>Fundador Ackermann Propiedades. Cómo invierten las nuevas generaciones</p>
                    </section>
                    <section className="speaker-card d-flex flex-column align-items-center justify-content-center p-2">
                        <img className="speaker-img" src="./surprise.png"/>
                        <p className="font-bolder mt-3">INVITADO SORPRESA</p>
                        <p>Tendencias y el futuro del corretaje que serán el estándar en 2030</p>
                    </section>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={() => ref.current?.scrollIntoView({
                                        behavior: 'smooth'
                                    })}>REGÍSTRATE YA!</button>
                </div>
            </div>
        </div>
        </>
    )

}