

export default function AgendaList() {
    return(
        <>
        <div className="d-flex flex-column align-items-center justify-content-center p-5 bg-light">
            <h2 className="font-bolder">AGENDA</h2>
            <div>
                <section className="agenda-card d-flex flex-column align-items-center justify-content-center p-2">
                    <p className="font-bolder mt-3">08:30 – 09:30</p>
                    <p>Desayuno & Networking (Recepción con café, buffet y kit)</p>
                </section>
                <section className="agenda-card d-flex flex-column align-items-center justify-content-center p-2">
                    <p className="font-bolder mt-3">09:30 – 09:45</p>
                    <p>Bienvenida oficial + video de apertura + palabras del equipo organizador</p>
                </section>
                <section className="agenda-card d-flex flex-column align-items-center justify-content-center p-2">
                    <p className="font-bolder mt-3">09:45 – 10:00</p>
                    <p>Panel 1: Paula Díaz (Portal Inmobiliario) – Experiencia del cliente</p>
                </section>
                <section className="agenda-card d-flex flex-column align-items-center justify-content-center p-2">
                    <p className="font-bolder mt-3">10:00 – 10:15</p>
                    <p>Panel 2: Tomás Charles (Fraccional) – Modelos colaborativos</p>
                </section>
                <section className="agenda-card d-flex flex-column align-items-center justify-content-center p-2">
                    <p className="font-bolder mt-3">10:15 – 10:30</p>
                    <p>Panel 3: Francisco Ackermann – Inversión y comportamiento generacional</p>
                </section>
                <section className="agenda-card d-flex flex-column align-items-center justify-content-center p-2">
                    <p className="font-bolder mt-3">10:30 – 10:45</p>
                    <p>Panel 4: Gonzalo Uribe (Dataprop) – El rol del corredor inmobiliario de cara al 2030</p>
                </section>
                <section className="agenda-card d-flex flex-column align-items-center justify-content-center p-2">
                    <p className="font-bolder mt-3">10:45 – 11:00</p>
                    <p>Coffee break & networking</p>
                </section>
                <section className="agenda-card d-flex flex-column align-items-center justify-content-center p-2">
                    <p className="font-bolder mt-3">11:00 – 11:15</p>
                    <p>Panel 5: invitado sorpresa - Tendencias y el futuro del corretaje al 2030</p>
                </section>
                <section className="agenda-card d-flex flex-column align-items-center justify-content-center p-2">
                    <p className="font-bolder mt-3">11:15 – 11:40</p>
                    <p>Panel especial: Mario Lipari – Diagnóstico actual del corretaje</p>
                </section>
                <section className="agenda-card d-flex flex-column align-items-center justify-content-center p-2">
                    <p className="font-bolder mt-3">11:40 – 13:00</p>
                    <p>Cierre & networking</p>
                </section>
            </div>
        </div>
        </>
    )
}