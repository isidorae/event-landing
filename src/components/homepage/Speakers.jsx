

export default function Speakers() {

    return(
        <>
        <div>
            <div className="bg-dark text-white d-flex flex-column align-items-center justify-content-center text-center py-5"> 
                <h2 className="font-bolder">SPEAKERS</h2>
                <div className="d-flex flex-column align-items-start justify-content-center p-5">
                    <section className="d-flex flex-row align-items-center justify-content-center p-2">
                        <img className="speaker-img me-3" src="./toc_toc.png"/>
                        <p className="font-size-md"><span className="font-bolder">TOC TOC</span> Tendencias y datos: así se está moviendo la industria</p>
                    </section>
                    <section className="d-flex flex-row align-items-center justify-content-center p-2">
                        <img className="speaker-img me-3" src="./meli.png"/>
                        <p className="font-size-md"><span className="font-bolder">PORTAL INMOBILIARIO</span> Cómo está evolucionando la experiencia del comprador y del vendedor</p>
                    </section>
                    <section className="d-flex flex-row align-items-center justify-content-center p-2">
                        <img className="speaker-img me-3" src="./ceo_fraccional.png"/>
                        <p className="font-size-md"><span className="font-bolder">CEO FRACCIONAL</span> CEO Fraccional, Marketing inmobiliario para emocionar y fidelizar</p>
                    </section>
                    <section className="d-flex flex-row align-items-center justify-content-center p-2">
                        <img className="speaker-img me-3" src="./fco_ackerman.png"/>
                        <p className="font-size-md"><span className="font-bolder">FRANCISCO ACKERMANN</span> Inversión inmobiliaria hoy: cómo piensan y deciden las nuevas generaciones de inversionistas</p>
                    </section>
                    <section className="d-flex flex-row align-items-center justify-content-center p-2">
                        <img className="speaker-img me-3" src="./gonzalo_uribe.png"/>
                        <p className="font-size-md"><span className="font-bolder">GONZALO URIBE</span> El corretaje profesional y conectado: cómo se ve desde adentro el futuro del negocio</p>
                    </section>
                </div>
            </div>
        </div>
        </>
    )

}